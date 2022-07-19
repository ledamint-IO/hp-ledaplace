import React, { FC } from 'react';
import { SearchQuery, MetadataJson, Wallet, Nft } from 'src/graphql/indexerTypes';
import { PublicKey } from '@solana/web3.js';
import { ProfileSearchItem, NFTSearchItem } from './SearchItems';
import { isPublicKey } from './SearchBar';
import { profile } from 'console';
import { useAnalytics } from 'src/views/_global/AnalyticsProvider';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/router';

interface SearchResultsProps {
  term?: string;
  results?: MetadataJson[];
  collectionResults?: MetadataJson[];
  profileResults?: Wallet[];
  walletResult?: Wallet;
  mintAddressResult?: Nft;
}

const SearchResultTrackAction = 'Search Result Selected';

const SearchResults: FC<SearchResultsProps> = ({
  term,
  results,
  profileResults,
  walletResult,
  mintAddressResult,
  collectionResults,
}) => {
  const { track } = useAnalytics();

  const router = useRouter();

  if (results?.length === 0 && profileResults?.length === 0 && !walletResult) {
    return (
      <div className={`flex h-6 w-full items-center justify-center`}>
        <p className={`m-0 text-center text-base font-medium`}>No Results</p>
      </div>
    );
  }

  function trackSearchResultSelected(args: {
    resultType: string;
    profileAddress?: string;
    profileHandle?: string | null;
    nftName?: string;
    nftImage?: string;
    nftAddress?: string;
  }) {
    track(SearchResultTrackAction, {
      event_category: 'Search',
      event_label: args.resultType,
      term,
      termCharCount: term?.length,
      profileResultsCount: profileResults?.length || 0,
      walletResultsCount: walletResult ? 1 : 0,
      nftResultsCount: results?.length || 0,
      usedMintAddressSearch: Boolean(mintAddressResult),
      ...args,
    });
  }

  return (
    <>
      {collectionResults && collectionResults?.length > 0 && (
        <>
          <h6 className={`px-6 pt-6 text-base font-medium text-gray-300`}>Collections</h6>
          {collectionResults?.map((collection) => (
            <>
              {collection?.address && (
                <Combobox.Option key={'collection-' + collection.address} value={collection}>
                  {({ active }) => (
                    <NFTSearchItem
                      creatorHandle={collection.creatorTwitterHandle}
                      creatorAddress={collection.creatorAddress}
                      key={`collection-search-item-${collection.address}`}
                      address={collection.mintAddress || collection.address}
                      image={collection.image!}
                      name={collection.name}
                      onClick={() => {
                        trackSearchResultSelected({
                          resultType: 'Collection',
                          nftName: collection.name,
                          nftImage: collection.image as string | undefined,
                          nftAddress: collection.address,
                        });
                        router.push(`/collections/${collection.address}`);
                      }}
                      active={active}
                    />
                  )}
                </Combobox.Option>
              )}
            </>
          ))}
        </>
      )}

      {profileResults && profileResults?.length > 0 && (
        <>
          <h6 className={`px-6 pt-6 text-base font-medium text-gray-300`}>Profiles</h6>
          {profileResults?.map((profile) => (
            <>
              {profile?.address && (
                <Combobox.Option key={'profile-' + profile.address} value={profile}>
                  {({ active }) => (
                    <ProfileSearchItem
                      address={profile?.address}
                      handle={profile?.twitterHandle}
                      profileImage={profile?.profile?.profileImageUrlLowres}
                      onClick={() =>
                        trackSearchResultSelected({
                          resultType: 'Profile',
                          profileAddress: profile.address,
                          profileHandle: profile.twitterHandle,
                        })
                      }
                      active={active}
                    />
                  )}
                </Combobox.Option>
              )}
            </>
          ))}
        </>
      )}

      {walletResult && isPublicKey(walletResult.address) && (
        <Combobox.Option value={walletResult}>
          {({ active }) => (
            <ProfileSearchItem
              address={walletResult?.address}
              handle={walletResult?.twitterHandle}
              profileImage={walletResult?.profile?.profileImageUrlLowres}
              onClick={() =>
                trackSearchResultSelected({
                  resultType: 'Wallet',
                  profileAddress: walletResult.address,
                  profileHandle: walletResult.twitterHandle,
                })
              }
              active={active}
            />
          )}
        </Combobox.Option>
      )}
      {results && results.length > 0 && (
        <>
          <h6 className={`px-6 pt-6 text-base font-medium text-gray-300`}>NFTs</h6>
          {results?.map((nft) => (
            <>
              {nft.address && nft.image && nft.name && (
                <Combobox.Option key={nft.address} value={nft}>
                  {({ active }) => (
                    <NFTSearchItem
                      creatorHandle={nft.creatorTwitterHandle}
                      creatorAddress={nft.creatorAddress}
                      key={nft.address}
                      address={nft.mintAddress || nft.address}
                      image={nft.image!}
                      name={nft.name}
                      onClick={() =>
                        trackSearchResultSelected({
                          resultType: 'NFT',
                          nftName: nft.name,
                          nftImage: nft.image as string | undefined,
                          nftAddress: nft.address,
                        })
                      }
                      active={active}
                    />
                  )}
                </Combobox.Option>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default SearchResults;
