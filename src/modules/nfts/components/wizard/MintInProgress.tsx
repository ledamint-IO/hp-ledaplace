import { Divider, Row, Col, Space, Button } from 'antd';
import React, { useCallback, useContext, useEffect } from 'react';
import Image from 'next/image';
import { StepWizardChildProps } from 'react-step-wizard';
import GreenCheckIcon from '@/common/assets/images/green-check.svg';
import RedXClose from '@/common/assets/images/red-x-close.svg';
import Paragraph from 'antd/lib/typography/Paragraph';
import EmptySpinnerIcon from '@/common/assets/images/empty-spinner.svg';
import NavContainer from '@/modules/nfts/components/wizard/NavContainer';
import { Spinner } from '@/common/components/elements/Spinner';
import { Connection } from '@solana/web3.js';
import { actions } from '@metaplex/js';
import { MintStatus, NFTValue, UploadedFilePin } from 'pages/nfts/new';
import { Solana } from '@/modules/solana/types';
import { NFTPreviewGrid } from '@/common/components/elements/NFTPreviewGrid';
import { WalletContext } from '@/modules/wallet';

const { mintNFT } = actions;

const APPROVAL_FAILED_CODE = 4001;
const REQUESTED_METHOD_NOT_AUTHORIZED_CODE = 4100;

enum TransactionStep {
  SENDING_FAILED,
  APPROVAL_FAILED,
  META_DATA_UPLOAD_FAILED,
  META_DATA_UPLOADING,
  APPROVING,
  SENDING,
  FINALIZING,
  SUCCESS,
}

interface Props extends Partial<StepWizardChildProps> {
  images: Array<File>;
  wallet: Solana;
  connection: Connection;
  nftValues: NFTValue[];
  index: number;
  updateNFTValue: (value: NFTValue, index: number) => void;
  uploadMetaData: (value: NFTValue) => Promise<UploadedFilePin>;
}

const MintStep = ({
  text,
  isActive,
  isDone,
  failed,
}: {
  text: string;
  isActive: boolean;
  isDone: boolean;
  failed?: boolean;
}) => {
  let icon;

  if (isDone) {
    icon = <Image width={32} height={32} src={GreenCheckIcon} alt="green-check" />;
  } else if (isActive) {
    icon = <Spinner />;
  } else if (failed) {
    icon = <Image width={32} height={32} src={RedXClose} alt="red-x-close" />;
  } else {
    icon = <Image width={32} height={32} src={EmptySpinnerIcon} alt="green-check" />;
  }

  return (
    <Row style={{ marginBottom: 16 }}>
      <Space size={17}>
        {icon}
        <Paragraph
          style={{
            fontSize: 14,
            fontWeight: isActive ? 900 : 400,
            opacity: isActive ? 1 : 0.6,
            marginBottom: 6,
          }}
        >
          {text}
        </Paragraph>
      </Space>
    </Row>
  );
};

export default function MintInProgress({
  previousStep,
  goToStep,
  images,
  nextStep,
  isActive,
  nftValues,
  wallet,
  updateNFTValue,
  uploadMetaData,
  connection,
  index,
}: Props) {
  const [transactionStep, setTransactionStep] = React.useState(TransactionStep.APPROVING);
  const showErrors =
    transactionStep === TransactionStep.SENDING_FAILED ||
    transactionStep === TransactionStep.APPROVAL_FAILED;

  const { connect } = useContext(WalletContext);
  const nftValue = nftValues[index];

  if (!wallet) {
    // connect({ redirect: '/nfts/new' });
  }

  const handleNext = useCallback(() => {
    const updatedValue = showErrors
      ? { ...nftValue, mintStatus: MintStatus.FAILED }
      : { ...nftValue, mintStatus: MintStatus.SUCCESS };
    updateNFTValue(updatedValue, index);

    setTransactionStep(TransactionStep.APPROVING);
    nextStep!();
  }, [nextStep, nftValue, updateNFTValue, showErrors, index, setTransactionStep]);

  const attemptMetaDataUpload = () => {};

  const attemptMint = useCallback(async () => {
    if (!nftValue) {
      throw new Error('No NFT Value, something went wrong');
    }

    if (nftValue.mintStatus === MintStatus.SUCCESS) {
      return; // Don't accidentally mint
    }

    setTransactionStep(TransactionStep.APPROVING);
    // TODO: I would split into two functions for metadata upload and mint and then useState to set metadata
    let metaData: UploadedFilePin | null = null;

    try {
      setTransactionStep(TransactionStep.META_DATA_UPLOADING);
      metaData = await uploadMetaData(nftValue);
    } catch (err) {
      setTransactionStep(TransactionStep.META_DATA_UPLOAD_FAILED);
    }

    if (!metaData) {
      throw new Error('No Meta Data, something went wrong');
    }

    setTransactionStep(TransactionStep.APPROVING);

    try {
      const mintResp = await mintNFT({
        connection,
        wallet,
        uri: metaData.uri,
        maxSupply: nftValue.properties.maxSupply,
      });
      setTransactionStep(TransactionStep.FINALIZING);
      console.log('transaction id is', mintResp.txId);
      await connection.confirmTransaction(mintResp.txId);
      setTransactionStep(TransactionStep.SUCCESS);
      handleNext();
    } catch (err) {
      console.log('mintNFT err', err);
      if (err?.code === APPROVAL_FAILED_CODE) {
        setTransactionStep(TransactionStep.APPROVAL_FAILED);
      } else {
        setTransactionStep(TransactionStep.SENDING_FAILED);
      }
    }
  }, [nftValue, handleNext, uploadMetaData, connection, wallet]);

  useEffect(() => {
    if (showErrors) {
      return;
    }

    if (isActive && nftValue) {
      attemptMint();
    }
  }, [isActive, showErrors, nftValue, attemptMint, index]);

  if (!nftValue) {
    return null;
  }

  return (
    <NavContainer
      title={`Minting ${index + 1} of ${images.length}`}
      previousStep={previousStep}
      goToStep={goToStep}
    >
      <Row>
        <Col style={{ marginRight: 224 }}>
          <Row>
            <Paragraph style={{ fontWeight: 900 }}>Progress</Paragraph>
          </Row>
          <Row style={{ marginTop: 37 }}>
            <Col style={{ minWidth: 237 }}>
              <MintStep
                text="Uploading metadata"
                isActive={transactionStep === TransactionStep.META_DATA_UPLOADING}
                isDone={transactionStep > TransactionStep.META_DATA_UPLOADING}
                failed={transactionStep === TransactionStep.META_DATA_UPLOAD_FAILED}
              />
              <MintStep
                text="Approving transaction"
                isActive={transactionStep === TransactionStep.APPROVING}
                isDone={transactionStep > TransactionStep.APPROVING}
                failed={transactionStep === TransactionStep.APPROVAL_FAILED}
              />
              <MintStep
                text="Sending transaction to Solana"
                isActive={transactionStep === TransactionStep.SENDING}
                isDone={transactionStep > TransactionStep.SENDING}
                failed={transactionStep === TransactionStep.SENDING_FAILED}
              />
              <MintStep
                text="Waiting for final confirmation"
                isActive={transactionStep === TransactionStep.FINALIZING}
                isDone={transactionStep === TransactionStep.SUCCESS}
              />
            </Col>
          </Row>
          {showErrors && (
            <>
              <Row style={{ marginTop: 144 }}>
                <Paragraph style={{ fontSize: 14, color: '#D24040' }}>
                  {/* TODO: Show error */}
                  Mint #{index + 1} failed.
                </Paragraph>
              </Row>
              <Row>
                <Space size={8}>
                  <Button
                    type="default"
                    onClick={handleNext}
                    style={{ background: 'rgba(53, 53, 53, 1)' }}
                  >
                    Skip
                  </Button>

                  <Button
                    type="primary"
                    onClick={() => setTransactionStep(TransactionStep.APPROVING)}
                  >
                    Try Again
                  </Button>
                </Space>
              </Row>
            </>
          )}
        </Col>

        <Divider
          type="vertical"
          style={{ margin: '0 46px', height: 500, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
        <NFTPreviewGrid index={index} images={images} nftValues={nftValues} />
      </Row>
    </NavContainer>
  );
}
