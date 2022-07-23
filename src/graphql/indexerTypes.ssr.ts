import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTimeUtc: any;
  /** I64 */
  I64: any;
  /** NaiveDateTime */
  NaiveDateTime: any;
  /** PublicKey */
  PublicKey: any;
  /** U64 */
  U64: any;
  /** Uuid */
  Uuid: any;
};

export type AhListing = {
  __typename?: 'AhListing';
  auctionHouse?: Maybe<AuctionHouse>;
  canceledAt?: Maybe<Scalars['DateTimeUtc']>;
  createdAt: Scalars['DateTimeUtc'];
  id: Scalars['Uuid'];
  metadata: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  price: Scalars['U64'];
  purchaseId?: Maybe<Scalars['Uuid']>;
  seller: Scalars['PublicKey'];
  tokenSize: Scalars['Int'];
  tradeState: Scalars['String'];
  tradeStateBump: Scalars['Int'];
};

/** Filter on NFT attributes */
export type AttributeFilter = {
  traitType: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type AttributeGroup = {
  __typename?: 'AttributeGroup';
  name: Scalars['String'];
  variants: Array<AttributeVariant>;
};

export type AttributeVariant = {
  __typename?: 'AttributeVariant';
  count: Scalars['Int'];
  name: Scalars['String'];
};

export type AuctionHouse = {
  __typename?: 'AuctionHouse';
  address: Scalars['String'];
  auctionHouseFeeAccount: Scalars['String'];
  auctionHouseTreasury: Scalars['String'];
  authority: Scalars['String'];
  bump: Scalars['Int'];
  canChangeSalePrice: Scalars['Boolean'];
  creator: Scalars['String'];
  feePayerBump: Scalars['Int'];
  feeWithdrawalDestination: Scalars['String'];
  requiresSignOff: Scalars['Boolean'];
  sellerFeeBasisPoints: Scalars['Int'];
  stats?: Maybe<MintStats>;
  treasuryBump: Scalars['Int'];
  treasuryMint: Scalars['String'];
  treasuryWithdrawalDestination: Scalars['String'];
};

export type Bid = {
  __typename?: 'Bid';
  bidderAddress: Scalars['String'];
  cancelled: Scalars['Boolean'];
  lastBidAmount: Scalars['U64'];
  lastBidTime: Scalars['String'];
  listing?: Maybe<Listing>;
  listingAddress: Scalars['String'];
};

export type BidReceipt = {
  __typename?: 'BidReceipt';
  address: Scalars['String'];
  auctionHouse?: Maybe<AuctionHouse>;
  bookkeeper: Scalars['PublicKey'];
  bump: Scalars['Int'];
  buyer: Scalars['PublicKey'];
  canceledAt?: Maybe<Scalars['DateTimeUtc']>;
  createdAt: Scalars['DateTimeUtc'];
  metadata: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  price: Scalars['U64'];
  purchaseReceipt?: Maybe<Scalars['PublicKey']>;
  tokenAccount?: Maybe<Scalars['String']>;
  tokenSize: Scalars['Int'];
  tradeState: Scalars['String'];
  tradeStateBump: Scalars['Int'];
};

export type ConnectionCounts = {
  __typename?: 'ConnectionCounts';
  fromCount: Scalars['Int'];
  toCount: Scalars['Int'];
};

export type Creator = {
  __typename?: 'Creator';
  address: Scalars['String'];
  attributeGroups: Array<AttributeGroup>;
  counts: CreatorCounts;
  profile?: Maybe<TwitterProfile>;
  stats: Array<MintStats>;
};

export type CreatorStatsArgs = {
  auctionHouses: Array<Scalars['PublicKey']>;
};

export type CreatorCounts = {
  __typename?: 'CreatorCounts';
  creations: Scalars['Int'];
};

export type Denylist = {
  __typename?: 'Denylist';
  listings: Array<Scalars['PublicKey']>;
  storefronts: Array<Scalars['PublicKey']>;
};

/** Bonding change enriched with reserve change and supply change */
export type EnrichedBondingChange = {
  __typename?: 'EnrichedBondingChange';
  address: Scalars['String'];
  insertTs: Scalars['NaiveDateTime'];
  reserveChange: Scalars['I64'];
  slot: Scalars['U64'];
  supplyChange: Scalars['I64'];
};

export type FeedEvent = FollowEvent | ListingEvent | MintEvent | OfferEvent | PurchaseEvent;

export type FollowEvent = {
  __typename?: 'FollowEvent';
  connection?: Maybe<GraphConnection>;
  createdAt: Scalars['DateTimeUtc'];
  feedEventId: Scalars['String'];
  graphConnectionAddress: Scalars['PublicKey'];
  profile?: Maybe<TwitterProfile>;
  wallet: Wallet;
  walletAddress: Scalars['PublicKey'];
};

export type GraphConnection = {
  __typename?: 'GraphConnection';
  address: Scalars['String'];
  connectedAt: Scalars['DateTimeUtc'];
  from: Wallet;
  to: Wallet;
};

export type Listing = {
  __typename?: 'Listing';
  address: Scalars['String'];
  bids: Array<Bid>;
  cacheAddress: Scalars['String'];
  ended: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTimeUtc']>;
  extAddress: Scalars['String'];
  nfts: Array<Nft>;
  storeAddress: Scalars['String'];
  storefront?: Maybe<Storefront>;
};

export type ListingEvent = {
  __typename?: 'ListingEvent';
  createdAt: Scalars['DateTimeUtc'];
  feedEventId: Scalars['String'];
  lifecycle: Scalars['String'];
  listing?: Maybe<AhListing>;
  listingId: Scalars['Uuid'];
  profile?: Maybe<TwitterProfile>;
  wallet: Wallet;
  walletAddress: Scalars['PublicKey'];
};

export type MarketStats = {
  __typename?: 'MarketStats';
  nfts?: Maybe<Scalars['U64']>;
};

export type Marketplace = {
  __typename?: 'Marketplace';
  auctionHouses: Array<AuctionHouse>;
  bannerUrl: Scalars['String'];
  configAddress: Scalars['PublicKey'];
  creators: Array<StoreCreator>;
  description: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  ownerAddress: Scalars['String'];
  stats?: Maybe<MarketStats>;
  storeAddress?: Maybe<Scalars['PublicKey']>;
  subdomain: Scalars['String'];
};

export type MetadataJson = {
  __typename?: 'MetadataJson';
  address: Scalars['String'];
  creatorAddress?: Maybe<Scalars['String']>;
  creatorTwitterHandle?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  mintAddress: Scalars['String'];
  name: Scalars['String'];
};

export type MintEvent = {
  __typename?: 'MintEvent';
  createdAt: Scalars['DateTimeUtc'];
  feedEventId: Scalars['String'];
  metadataAddress: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  profile?: Maybe<TwitterProfile>;
  wallet: Wallet;
  walletAddress: Scalars['PublicKey'];
};

export type MintStats = {
  __typename?: 'MintStats';
  auctionHouse?: Maybe<AuctionHouse>;
  average?: Maybe<Scalars['U64']>;
  floor?: Maybe<Scalars['U64']>;
  mint: Scalars['String'];
  volume24hr?: Maybe<Scalars['U64']>;
  volumeTotal?: Maybe<Scalars['U64']>;
};

export type Nft = {
  __typename?: 'Nft';
  activities: Array<NftActivity>;
  address: Scalars['String'];
  animationUrl?: Maybe<Scalars['String']>;
  attributes: Array<NftAttribute>;
  category: Scalars['String'];
  collection?: Maybe<Nft>;
  createdAt?: Maybe<Scalars['DateTimeUtc']>;
  creators: Array<NftCreator>;
  description: Scalars['String'];
  externalUrl?: Maybe<Scalars['String']>;
  files: Array<NftFile>;
  image: Scalars['String'];
  listings: Array<AhListing>;
  mintAddress: Scalars['String'];
  name: Scalars['String'];
  offers: Array<Offer>;
  owner?: Maybe<NftOwner>;
  /**
   * The JSON parser with which the NFT was processed by the indexer
   *
   * - `"full"` indicates the full Metaplex standard-compliant parser was
   *   used.
   * - `"minimal"` (provided with an optional description of an error)
   *   indicates the full model failed to parse and a more lenient fallback
   *   parser with fewer fields was used instead.
   */
  parser?: Maybe<Scalars['String']>;
  primarySaleHappened: Scalars['Boolean'];
  purchases: Array<Purchase>;
  sellerFeeBasisPoints: Scalars['Int'];
  tokenAccountAddress: Scalars['String'];
  updateAuthorityAddress: Scalars['String'];
};

export type NftImageArgs = {
  width?: InputMaybe<Scalars['Int']>;
};

export type NftActivity = {
  __typename?: 'NftActivity';
  activityType: Scalars['String'];
  auctionHouse?: Maybe<AuctionHouse>;
  createdAt: Scalars['DateTimeUtc'];
  id: Scalars['Uuid'];
  metadata: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  price: Scalars['U64'];
  wallets: Array<Wallet>;
};

export type NftAttribute = {
  __typename?: 'NftAttribute';
  metadataAddress: Scalars['String'];
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NftCount = {
  __typename?: 'NftCount';
  listed: Scalars['Int'];
  total: Scalars['Int'];
};

export type NftCountListedArgs = {
  auctionHouses?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type NftCreator = {
  __typename?: 'NftCreator';
  address: Scalars['String'];
  metadataAddress: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  profile?: Maybe<TwitterProfile>;
  share: Scalars['Int'];
  twitterHandle?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type NftFile = {
  __typename?: 'NftFile';
  fileType: Scalars['String'];
  metadataAddress: Scalars['String'];
  uri: Scalars['String'];
};

export type NftOwner = {
  __typename?: 'NftOwner';
  address: Scalars['String'];
  associatedTokenAccountAddress: Scalars['String'];
  profile?: Maybe<TwitterProfile>;
  twitterHandle?: Maybe<Scalars['String']>;
};

export type NftsStats = {
  __typename?: 'NftsStats';
  /** The total number of buy-now listings */
  buyNowListings: Scalars['Int'];
  /** The total number of NFTs with active offers */
  nftsWithActiveOffers: Scalars['Int'];
  /** The total number of indexed NFTs */
  totalNfts: Scalars['Int'];
};

export type Offer = {
  __typename?: 'Offer';
  auctionHouse?: Maybe<AuctionHouse>;
  buyer: Scalars['PublicKey'];
  canceledAt?: Maybe<Scalars['DateTimeUtc']>;
  createdAt: Scalars['DateTimeUtc'];
  id: Scalars['Uuid'];
  metadata: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  price: Scalars['U64'];
  purchaseId?: Maybe<Scalars['Uuid']>;
  tokenAccount?: Maybe<Scalars['String']>;
  tokenSize: Scalars['Int'];
  tradeState: Scalars['String'];
  tradeStateBump: Scalars['Int'];
};

export type OfferEvent = {
  __typename?: 'OfferEvent';
  createdAt: Scalars['DateTimeUtc'];
  feedEventId: Scalars['String'];
  lifecycle: Scalars['String'];
  offer?: Maybe<Offer>;
  offerId: Scalars['Uuid'];
  profile?: Maybe<TwitterProfile>;
  wallet: Wallet;
  walletAddress: Scalars['PublicKey'];
};

/** Sorts results ascending or descending */
export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PriceChart = {
  __typename?: 'PriceChart';
  listingFloor: Array<PricePoint>;
  salesAverage: Array<PricePoint>;
  totalVolume: Array<PricePoint>;
};

export type PricePoint = {
  __typename?: 'PricePoint';
  date: Scalars['DateTimeUtc'];
  price: Scalars['U64'];
};

export type ProfilesStats = {
  __typename?: 'ProfilesStats';
  /** The total number of indexed profiles */
  totalProfiles: Scalars['Int'];
};

export type Purchase = {
  __typename?: 'Purchase';
  auctionHouse?: Maybe<AuctionHouse>;
  buyer: Scalars['PublicKey'];
  createdAt: Scalars['DateTimeUtc'];
  id: Scalars['Uuid'];
  metadata: Scalars['PublicKey'];
  nft?: Maybe<Nft>;
  price: Scalars['U64'];
  seller: Scalars['PublicKey'];
  tokenSize: Scalars['Int'];
};

export type PurchaseEvent = {
  __typename?: 'PurchaseEvent';
  createdAt: Scalars['DateTimeUtc'];
  feedEventId: Scalars['String'];
  profile?: Maybe<TwitterProfile>;
  purchase?: Maybe<Purchase>;
  purchaseId: Scalars['Uuid'];
  wallet: Wallet;
  walletAddress: Scalars['PublicKey'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  activities: Array<NftActivity>;
  charts: PriceChart;
  /** Returns featured collection NFTs ordered by market cap (floor price * number of NFTs in collection) */
  collectionsFeaturedByMarketCap: Array<Nft>;
  /** Returns featured collection NFTs ordered by volume (sum of purchase prices) */
  collectionsFeaturedByVolume: Array<Nft>;
  connections: Array<GraphConnection>;
  creator: Creator;
  denylist: Denylist;
  enrichedBondingChanges: Array<EnrichedBondingChange>;
  featuredListings: Array<AhListing>;
  /** Returns events for the wallets the user is following using the graph_program. */
  feedEvents: Array<FeedEvent>;
  /** Recommend wallets to follow. */
  followWallets: Array<Wallet>;
  /** Returns the latest on chain events using the graph_program. */
  latestFeedEvents: Array<FeedEvent>;
  listings: Array<Listing>;
  /** A marketplace */
  marketplace?: Maybe<Marketplace>;
  /** Get multiple marketplaces; results will be in alphabetical order by subdomain */
  marketplaces: Array<Marketplace>;
  /** returns metadata_jsons matching the term */
  metadataJsons: Array<MetadataJson>;
  /** Get an NFT by metadata address. */
  nft?: Maybe<Nft>;
  /** Get an NFT by mint address. */
  nftByMintAddress?: Maybe<Nft>;
  nftCounts: NftCount;
  nfts: Array<Nft>;
  /** Get a list of NFTs by mint address. */
  nftsByMintAddress: Array<Nft>;
  /** Stats aggregated across all indexed NFTs */
  nftsStats: NftsStats;
  offer?: Maybe<BidReceipt>;
  profile?: Maybe<TwitterProfile>;
  /** returns profiles matching the search term */
  profiles: Array<Wallet>;
  /** returns stats about profiles */
  profilesStats: ProfilesStats;
  /** returns all the collections matching the search term */
  searchCollections: Array<MetadataJson>;
  /** A storefront */
  storefront?: Maybe<Storefront>;
  storefronts: Array<Storefront>;
  wallet: Wallet;
  wallets: Array<Wallet>;
};

export type QueryRootActivitiesArgs = {
  auctionHouses: Array<Scalars['PublicKey']>;
  creators?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type QueryRootChartsArgs = {
  auctionHouses: Array<Scalars['PublicKey']>;
  creators?: InputMaybe<Array<Scalars['PublicKey']>>;
  endDate: Scalars['DateTimeUtc'];
  startDate: Scalars['DateTimeUtc'];
};

export type QueryRootCollectionsFeaturedByMarketCapArgs = {
  endDate: Scalars['DateTimeUtc'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderDirection: OrderDirection;
  startDate: Scalars['DateTimeUtc'];
  term?: InputMaybe<Scalars['String']>;
};

export type QueryRootCollectionsFeaturedByVolumeArgs = {
  endDate: Scalars['DateTimeUtc'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderDirection: OrderDirection;
  startDate: Scalars['DateTimeUtc'];
  term?: InputMaybe<Scalars['String']>;
};

export type QueryRootConnectionsArgs = {
  from?: InputMaybe<Array<Scalars['PublicKey']>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  to?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type QueryRootCreatorArgs = {
  address: Scalars['String'];
};

export type QueryRootEnrichedBondingChangesArgs = {
  address: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  startUnixTime: Scalars['NaiveDateTime'];
  stopUnixTime: Scalars['NaiveDateTime'];
};

export type QueryRootFeaturedListingsArgs = {
  auctionHouses?: InputMaybe<Array<Scalars['PublicKey']>>;
  limit: Scalars['Int'];
  limitPerSeller?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sellerExclusions?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type QueryRootFeedEventsArgs = {
  excludeTypes?: InputMaybe<Array<Scalars['String']>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  wallet: Scalars['PublicKey'];
};

export type QueryRootFollowWalletsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  wallet?: InputMaybe<Scalars['PublicKey']>;
};

export type QueryRootLatestFeedEventsArgs = {
  cursor: Scalars['String'];
  includeTypes?: InputMaybe<Array<Scalars['String']>>;
  isForward: Scalars['Boolean'];
  limit: Scalars['Int'];
};

export type QueryRootMarketplaceArgs = {
  subdomain: Scalars['String'];
};

export type QueryRootMarketplacesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  subdomains?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryRootMetadataJsonsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  term: Scalars['String'];
};

export type QueryRootNftArgs = {
  address: Scalars['String'];
};

export type QueryRootNftByMintAddressArgs = {
  address: Scalars['String'];
};

export type QueryRootNftCountsArgs = {
  creators: Array<Scalars['PublicKey']>;
};

export type QueryRootNftsArgs = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  auctionHouses?: InputMaybe<Array<Scalars['PublicKey']>>;
  collection?: InputMaybe<Scalars['PublicKey']>;
  collections?: InputMaybe<Array<Scalars['PublicKey']>>;
  creators?: InputMaybe<Array<Scalars['PublicKey']>>;
  limit: Scalars['Int'];
  listed?: InputMaybe<Scalars['Boolean']>;
  offerers?: InputMaybe<Array<Scalars['PublicKey']>>;
  offset: Scalars['Int'];
  owners?: InputMaybe<Array<Scalars['PublicKey']>>;
  term?: InputMaybe<Scalars['String']>;
  updateAuthorities?: InputMaybe<Array<Scalars['PublicKey']>>;
  withOffers?: InputMaybe<Scalars['Boolean']>;
};

export type QueryRootNftsByMintAddressArgs = {
  addresses: Array<Scalars['PublicKey']>;
};

export type QueryRootOfferArgs = {
  address: Scalars['String'];
};

export type QueryRootProfileArgs = {
  handle: Scalars['String'];
};

export type QueryRootProfilesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  term: Scalars['String'];
};

export type QueryRootSearchCollectionsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  term: Scalars['String'];
};

export type QueryRootStorefrontArgs = {
  subdomain: Scalars['String'];
};

export type QueryRootWalletArgs = {
  address: Scalars['PublicKey'];
};

export type QueryRootWalletsArgs = {
  addresses: Array<Scalars['PublicKey']>;
};

export type StoreCreator = {
  __typename?: 'StoreCreator';
  creatorAddress: Scalars['String'];
  nftCount?: Maybe<Scalars['Int']>;
  preview: Array<Nft>;
  profile?: Maybe<TwitterProfile>;
  storeConfigAddress: Scalars['String'];
  twitterHandle?: Maybe<Scalars['String']>;
};

/** A Metaplex storefront */
export type Storefront = {
  __typename?: 'Storefront';
  address: Scalars['String'];
  bannerUrl: Scalars['String'];
  description: Scalars['String'];
  faviconUrl: Scalars['String'];
  logoUrl: Scalars['String'];
  ownerAddress: Scalars['String'];
  subdomain: Scalars['String'];
  title: Scalars['String'];
};

export type TwitterProfile = {
  __typename?: 'TwitterProfile';
  bannerImageUrl: Scalars['String'];
  description: Scalars['String'];
  handle: Scalars['String'];
  /** @deprecated Use profileImageUrlLowres instead. */
  profileImageUrl: Scalars['String'];
  profileImageUrlHighres: Scalars['String'];
  profileImageUrlLowres: Scalars['String'];
  walletAddress?: Maybe<Scalars['String']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['PublicKey'];
  bids: Array<Bid>;
  connectionCounts: ConnectionCounts;
  nftCounts: WalletNftCount;
  profile?: Maybe<TwitterProfile>;
  twitterHandle?: Maybe<Scalars['String']>;
};

export type WalletNftCountsArgs = {
  creators?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type WalletNftCount = {
  __typename?: 'WalletNftCount';
  created: Scalars['Int'];
  listed: Scalars['Int'];
  offered: Scalars['Int'];
  owned: Scalars['Int'];
};

export type WalletNftCountListedArgs = {
  auctionHouses?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type WalletNftCountOfferedArgs = {
  auctionHouses?: InputMaybe<Array<Scalars['PublicKey']>>;
};

export type ActivityPageQueryVariables = Exact<{
  address: Scalars['PublicKey'];
}>;

export type ActivityPageQuery = {
  __typename?: 'QueryRoot';
  wallet: {
    __typename: 'Wallet';
    address: any;
    bids: Array<{
      __typename: 'Bid';
      listingAddress: string;
      bidderAddress: string;
      lastBidTime: string;
      lastBidAmount: any;
      cancelled: boolean;
      listing?: {
        __typename?: 'Listing';
        address: string;
        ended: boolean;
        storefront?: {
          __typename: 'Storefront';
          ownerAddress: string;
          subdomain: string;
          title: string;
          description: string;
          faviconUrl: string;
          logoUrl: string;
          bannerUrl: string;
        } | null;
        nfts: Array<{
          __typename: 'Nft';
          address: string;
          name: string;
          description: string;
          image: string;
        }>;
        bids: Array<{
          __typename?: 'Bid';
          bidderAddress: string;
          lastBidTime: string;
          lastBidAmount: any;
          cancelled: boolean;
          listingAddress: string;
        }>;
      } | null;
    }>;
  };
};

export type CollectionNfTsQueryVariables = Exact<{
  creator: Scalars['PublicKey'];
  owner: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type CollectionNfTsQuery = {
  __typename?: 'QueryRoot';
  ownedCollection: Array<{
    __typename?: 'Nft';
    address: string;
    collection?: {
      __typename?: 'Nft';
      address: string;
      name: string;
      image: string;
      description: string;
    } | null;
  }>;
  createdCollection: Array<{
    __typename?: 'Nft';
    address: string;
    collection?: {
      __typename?: 'Nft';
      address: string;
      name: string;
      image: string;
      description: string;
    } | null;
  }>;
};

export type CreatedNfTsQueryVariables = Exact<{
  creator: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  subdomain: Scalars['String'];
}>;

export type CreatedNfTsQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    collection?: { __typename?: 'Nft'; address: string; name: string; image: string } | null;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
};

export type OwnedNfTsQueryVariables = Exact<{
  address: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  subdomain: Scalars['String'];
}>;

export type OwnedNfTsQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
    collection?: { __typename?: 'Nft'; address: string; name: string; image: string } | null;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
};

export type WalletProfileQueryVariables = Exact<{
  handle: Scalars['String'];
}>;

export type WalletProfileQuery = {
  __typename?: 'QueryRoot';
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
};

export type GetCollectionQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetCollectionQuery = {
  __typename?: 'QueryRoot';
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    description: string;
    mintAddress: string;
    image: string;
    creators: Array<{
      __typename?: 'NftCreator';
      position?: number | null;
      address: string;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
  } | null;
  nftByMintAddress?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    description: string;
    mintAddress: string;
    image: string;
    creators: Array<{
      __typename?: 'NftCreator';
      position?: number | null;
      address: string;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
  } | null;
};

export type NftCollectionQueryVariables = Exact<{
  address: Scalars['String'];
  marketplaceSubdomain: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type NftCollectionQuery = {
  __typename?: 'QueryRoot';
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    mintAddress: string;
    creators: Array<{
      __typename?: 'NftCreator';
      position?: number | null;
      address: string;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
  } | null;
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    attributes: Array<{
      __typename?: 'NftAttribute';
      metadataAddress: string;
      value?: string | null;
      traitType?: string | null;
    }>;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: { __typename?: 'NftOwner'; address: string } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
};

export type NftsInCollectionQueryVariables = Exact<{
  collectionMintAddress: Scalars['PublicKey'];
  listed?: InputMaybe<Scalars['Boolean']>;
  marketplaceSubdomain: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type NftsInCollectionQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    attributes: Array<{
      __typename?: 'NftAttribute';
      metadataAddress: string;
      value?: string | null;
      traitType?: string | null;
    }>;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    collection?: { __typename?: 'Nft'; address: string; name: string; image: string } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
};

export type DiscoverCollectionsByMarketCapQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  start: Scalars['DateTimeUtc'];
  end: Scalars['DateTimeUtc'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverCollectionsByMarketCapQuery = {
  __typename?: 'QueryRoot';
  collectionsFeaturedByMarketCap: Array<{
    __typename?: 'Nft';
    mintAddress: string;
    name: string;
    image: string;
  }>;
};

export type DiscoverCollectionsByVolumeQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  start: Scalars['DateTimeUtc'];
  end: Scalars['DateTimeUtc'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverCollectionsByVolumeQuery = {
  __typename?: 'QueryRoot';
  collectionsFeaturedByVolume: Array<{
    __typename?: 'Nft';
    mintAddress: string;
    name: string;
    image: string;
  }>;
};

export type DiscoverNftsActiveOffersQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverNftsActiveOffersQuery = {
  __typename?: 'QueryRoot';
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      purchaseId?: any | null;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
  marketplace?: {
    __typename?: 'Marketplace';
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
};

export type DiscoverNftsAllQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverNftsAllQuery = {
  __typename?: 'QueryRoot';
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      purchaseId?: any | null;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
  marketplace?: {
    __typename?: 'Marketplace';
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
};

export type DiscoverNftsBuyNowQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverNftsBuyNowQuery = {
  __typename?: 'QueryRoot';
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      purchaseId?: any | null;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
  marketplace?: {
    __typename?: 'Marketplace';
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
};

export type DiscoverProfilesAllQueryVariables = Exact<{
  userWallet?: InputMaybe<Scalars['PublicKey']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type DiscoverProfilesAllQuery = {
  __typename?: 'QueryRoot';
  followWallets: Array<{
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  }>;
};

export type FeedQueryVariables = Exact<{
  address: Scalars['PublicKey'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  excludeTypes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type FeedQuery = {
  __typename?: 'QueryRoot';
  feedEvents: Array<
    | {
        __typename: 'FollowEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        graphConnectionAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        connection?: {
          __typename?: 'GraphConnection';
          address: string;
          from: {
            __typename?: 'Wallet';
            address: any;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          };
          to: {
            __typename?: 'Wallet';
            address: any;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          };
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'ListingEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        lifecycle: string;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        listing?: {
          __typename?: 'AhListing';
          id: any;
          seller: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            listings: Array<{
              __typename?: 'AhListing';
              id: any;
              seller: any;
              price: any;
              nft?: {
                __typename?: 'Nft';
                name: string;
                image: string;
                description: string;
                sellerFeeBasisPoints: number;
                primarySaleHappened: boolean;
                address: string;
                mintAddress: string;
                owner?: {
                  __typename?: 'NftOwner';
                  address: string;
                  associatedTokenAccountAddress: string;
                  twitterHandle?: string | null;
                } | null;
                creators: Array<{
                  __typename?: 'NftCreator';
                  address: string;
                  position?: number | null;
                  profile?: {
                    __typename?: 'TwitterProfile';
                    walletAddress?: string | null;
                    handle: string;
                    profileImageUrlLowres: string;
                    profileImageUrlHighres: string;
                    bannerImageUrl: string;
                  } | null;
                }>;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'MintEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        nft?: {
          __typename?: 'Nft';
          name: string;
          image: string;
          description: string;
          sellerFeeBasisPoints: number;
          primarySaleHappened: boolean;
          address: string;
          mintAddress: string;
          owner?: {
            __typename?: 'NftOwner';
            address: string;
            associatedTokenAccountAddress: string;
            twitterHandle?: string | null;
          } | null;
          creators: Array<{
            __typename?: 'NftCreator';
            address: string;
            position?: number | null;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          }>;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'OfferEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        lifecycle: string;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        offer?: {
          __typename?: 'Offer';
          id: any;
          buyer: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            offers: Array<{
              __typename?: 'Offer';
              id: any;
              buyer: any;
              price: any;
              nft?: {
                __typename?: 'Nft';
                name: string;
                image: string;
                description: string;
                sellerFeeBasisPoints: number;
                primarySaleHappened: boolean;
                address: string;
                mintAddress: string;
                owner?: {
                  __typename?: 'NftOwner';
                  address: string;
                  associatedTokenAccountAddress: string;
                  twitterHandle?: string | null;
                } | null;
                creators: Array<{
                  __typename?: 'NftCreator';
                  address: string;
                  position?: number | null;
                  profile?: {
                    __typename?: 'TwitterProfile';
                    walletAddress?: string | null;
                    handle: string;
                    profileImageUrlLowres: string;
                    profileImageUrlHighres: string;
                    bannerImageUrl: string;
                  } | null;
                }>;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'PurchaseEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        purchase?: {
          __typename?: 'Purchase';
          id: any;
          buyer: any;
          seller: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            sellerFeeBasisPoints: number;
            primarySaleHappened: boolean;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            creators: Array<{
              __typename?: 'NftCreator';
              address: string;
              position?: number | null;
              profile?: {
                __typename?: 'TwitterProfile';
                walletAddress?: string | null;
                handle: string;
                profileImageUrlLowres: string;
                profileImageUrlHighres: string;
                bannerImageUrl: string;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
  >;
};

export type WhoToFollowQueryVariables = Exact<{
  wallet: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type WhoToFollowQuery = {
  __typename?: 'QueryRoot';
  followWallets: Array<{
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  }>;
};

export type CollectionPreviewFragment = {
  __typename?: 'Nft';
  mintAddress: string;
  name: string;
  image: string;
};

export type FollowEventPreviewFragment = {
  __typename?: 'FollowEvent';
  feedEventId: string;
  createdAt: any;
  walletAddress: any;
  graphConnectionAddress: any;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  connection?: {
    __typename?: 'GraphConnection';
    address: string;
    from: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
    to: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  } | null;
  wallet: {
    __typename?: 'Wallet';
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  };
};

export type ListingEventPreviewFragment = {
  __typename?: 'ListingEvent';
  feedEventId: string;
  createdAt: any;
  walletAddress: any;
  lifecycle: string;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  listing?: {
    __typename?: 'AhListing';
    id: any;
    seller: any;
    price: any;
    nft?: {
      __typename?: 'Nft';
      name: string;
      image: string;
      description: string;
      address: string;
      mintAddress: string;
      owner?: {
        __typename?: 'NftOwner';
        address: string;
        associatedTokenAccountAddress: string;
        twitterHandle?: string | null;
      } | null;
      listings: Array<{
        __typename?: 'AhListing';
        id: any;
        seller: any;
        price: any;
        nft?: {
          __typename?: 'Nft';
          name: string;
          image: string;
          description: string;
          sellerFeeBasisPoints: number;
          primarySaleHappened: boolean;
          address: string;
          mintAddress: string;
          owner?: {
            __typename?: 'NftOwner';
            address: string;
            associatedTokenAccountAddress: string;
            twitterHandle?: string | null;
          } | null;
          creators: Array<{
            __typename?: 'NftCreator';
            address: string;
            position?: number | null;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          }>;
        } | null;
      }>;
    } | null;
  } | null;
  wallet: {
    __typename?: 'Wallet';
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  };
};

export type MarketplaceAuctionHouseFragment = {
  __typename?: 'Marketplace';
  auctionHouses: Array<{
    __typename?: 'AuctionHouse';
    address: string;
    treasuryMint: string;
    auctionHouseTreasury: string;
    treasuryWithdrawalDestination: string;
    feeWithdrawalDestination: string;
    authority: string;
    creator: string;
    auctionHouseFeeAccount: string;
    bump: number;
    treasuryBump: number;
    feePayerBump: number;
    sellerFeeBasisPoints: number;
    requiresSignOff: boolean;
    canChangeSalePrice: boolean;
  }>;
};

export type MintEventPreviewFragment = {
  __typename?: 'MintEvent';
  feedEventId: string;
  createdAt: any;
  walletAddress: any;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  nft?: {
    __typename?: 'Nft';
    name: string;
    image: string;
    description: string;
    sellerFeeBasisPoints: number;
    primarySaleHappened: boolean;
    address: string;
    mintAddress: string;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
      twitterHandle?: string | null;
    } | null;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      position?: number | null;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
  } | null;
  wallet: {
    __typename?: 'Wallet';
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  };
};

export type NftCardFragment = {
  __typename?: 'Nft';
  address: string;
  name: string;
  sellerFeeBasisPoints: number;
  mintAddress: string;
  description: string;
  image: string;
  primarySaleHappened: boolean;
  creators: Array<{ __typename?: 'NftCreator'; address: string; share: number; verified: boolean }>;
  owner?: {
    __typename?: 'NftOwner';
    address: string;
    associatedTokenAccountAddress: string;
  } | null;
  purchases: Array<{
    __typename?: 'Purchase';
    id: any;
    buyer: any;
    price: any;
    createdAt: any;
    auctionHouse?: {
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    } | null;
  }>;
  listings: Array<{
    __typename?: 'AhListing';
    id: any;
    tradeState: string;
    seller: any;
    metadata: any;
    price: any;
    tradeStateBump: number;
    purchaseId?: any | null;
    createdAt: any;
    canceledAt?: any | null;
    auctionHouse?: {
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    } | null;
  }>;
  offers: Array<{
    __typename?: 'Offer';
    id: any;
    tradeState: string;
    buyer: any;
    metadata: any;
    price: any;
    purchaseId?: any | null;
    tradeStateBump: number;
    tokenAccount?: string | null;
    createdAt: any;
    canceledAt?: any | null;
    auctionHouse?: {
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    } | null;
  }>;
};

export type OfferEventPreviewFragment = {
  __typename?: 'OfferEvent';
  feedEventId: string;
  createdAt: any;
  walletAddress: any;
  lifecycle: string;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  offer?: {
    __typename?: 'Offer';
    id: any;
    buyer: any;
    price: any;
    nft?: {
      __typename?: 'Nft';
      name: string;
      image: string;
      description: string;
      address: string;
      mintAddress: string;
      owner?: {
        __typename?: 'NftOwner';
        address: string;
        associatedTokenAccountAddress: string;
        twitterHandle?: string | null;
      } | null;
      offers: Array<{
        __typename?: 'Offer';
        id: any;
        buyer: any;
        price: any;
        nft?: {
          __typename?: 'Nft';
          name: string;
          image: string;
          description: string;
          sellerFeeBasisPoints: number;
          primarySaleHappened: boolean;
          address: string;
          mintAddress: string;
          owner?: {
            __typename?: 'NftOwner';
            address: string;
            associatedTokenAccountAddress: string;
            twitterHandle?: string | null;
          } | null;
          creators: Array<{
            __typename?: 'NftCreator';
            address: string;
            position?: number | null;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          }>;
        } | null;
      }>;
    } | null;
  } | null;
  wallet: {
    __typename?: 'Wallet';
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  };
};

export type ProfileInfoFragment = {
  __typename?: 'TwitterProfile';
  walletAddress?: string | null;
  handle: string;
  profileImageUrlLowres: string;
  profileImageUrlHighres: string;
  bannerImageUrl: string;
};

export type PurchaseEventPreviewFragment = {
  __typename?: 'PurchaseEvent';
  feedEventId: string;
  createdAt: any;
  walletAddress: any;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  purchase?: {
    __typename?: 'Purchase';
    id: any;
    buyer: any;
    seller: any;
    price: any;
    nft?: {
      __typename?: 'Nft';
      name: string;
      image: string;
      description: string;
      sellerFeeBasisPoints: number;
      primarySaleHappened: boolean;
      address: string;
      mintAddress: string;
      owner?: {
        __typename?: 'NftOwner';
        address: string;
        associatedTokenAccountAddress: string;
        twitterHandle?: string | null;
      } | null;
      creators: Array<{
        __typename?: 'NftCreator';
        address: string;
        position?: number | null;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
      }>;
    } | null;
  } | null;
  wallet: {
    __typename?: 'Wallet';
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  };
};

export type ProfilePreviewFragment = {
  __typename?: 'Wallet';
  address: any;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
  nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
};

export type BuyNowListingFragment = {
  __typename?: 'AhListing';
  id: any;
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  } | null;
};

export type MarketplacePreviewFragment = {
  __typename?: 'Marketplace';
  subdomain: string;
  name: string;
  bannerUrl: string;
  creators: Array<{
    __typename?: 'StoreCreator';
    creatorAddress: string;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  }>;
  auctionHouses: Array<{
    __typename?: 'AuctionHouse';
    stats?: { __typename?: 'MintStats'; floor?: any | null } | null;
  }>;
  stats?: { __typename?: 'MarketStats'; nfts?: any | null } | null;
};

export type HomeQueryVariables = Exact<{
  userWallet?: InputMaybe<Scalars['PublicKey']>;
  featuredCollectionsLimit: Scalars['Int'];
  featuredProfileLimit: Scalars['Int'];
  featuredBuyNowLimit: Scalars['Int'];
  feedEventsLimit: Scalars['Int'];
}>;

export type HomeQuery = {
  __typename?: 'QueryRoot';
  feedEvents: Array<
    | {
        __typename: 'FollowEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        graphConnectionAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        connection?: {
          __typename?: 'GraphConnection';
          address: string;
          from: {
            __typename?: 'Wallet';
            address: any;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          };
          to: {
            __typename?: 'Wallet';
            address: any;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          };
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'ListingEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        lifecycle: string;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        listing?: {
          __typename?: 'AhListing';
          id: any;
          seller: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            listings: Array<{
              __typename?: 'AhListing';
              id: any;
              seller: any;
              price: any;
              nft?: {
                __typename?: 'Nft';
                name: string;
                image: string;
                description: string;
                sellerFeeBasisPoints: number;
                primarySaleHappened: boolean;
                address: string;
                mintAddress: string;
                owner?: {
                  __typename?: 'NftOwner';
                  address: string;
                  associatedTokenAccountAddress: string;
                  twitterHandle?: string | null;
                } | null;
                creators: Array<{
                  __typename?: 'NftCreator';
                  address: string;
                  position?: number | null;
                  profile?: {
                    __typename?: 'TwitterProfile';
                    walletAddress?: string | null;
                    handle: string;
                    profileImageUrlLowres: string;
                    profileImageUrlHighres: string;
                    bannerImageUrl: string;
                  } | null;
                }>;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'MintEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        nft?: {
          __typename?: 'Nft';
          name: string;
          image: string;
          description: string;
          sellerFeeBasisPoints: number;
          primarySaleHappened: boolean;
          address: string;
          mintAddress: string;
          owner?: {
            __typename?: 'NftOwner';
            address: string;
            associatedTokenAccountAddress: string;
            twitterHandle?: string | null;
          } | null;
          creators: Array<{
            __typename?: 'NftCreator';
            address: string;
            position?: number | null;
            profile?: {
              __typename?: 'TwitterProfile';
              walletAddress?: string | null;
              handle: string;
              profileImageUrlLowres: string;
              profileImageUrlHighres: string;
              bannerImageUrl: string;
            } | null;
          }>;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'OfferEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        lifecycle: string;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        offer?: {
          __typename?: 'Offer';
          id: any;
          buyer: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            offers: Array<{
              __typename?: 'Offer';
              id: any;
              buyer: any;
              price: any;
              nft?: {
                __typename?: 'Nft';
                name: string;
                image: string;
                description: string;
                sellerFeeBasisPoints: number;
                primarySaleHappened: boolean;
                address: string;
                mintAddress: string;
                owner?: {
                  __typename?: 'NftOwner';
                  address: string;
                  associatedTokenAccountAddress: string;
                  twitterHandle?: string | null;
                } | null;
                creators: Array<{
                  __typename?: 'NftCreator';
                  address: string;
                  position?: number | null;
                  profile?: {
                    __typename?: 'TwitterProfile';
                    walletAddress?: string | null;
                    handle: string;
                    profileImageUrlLowres: string;
                    profileImageUrlHighres: string;
                    bannerImageUrl: string;
                  } | null;
                }>;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
    | {
        __typename: 'PurchaseEvent';
        feedEventId: string;
        createdAt: any;
        walletAddress: any;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
        purchase?: {
          __typename?: 'Purchase';
          id: any;
          buyer: any;
          seller: any;
          price: any;
          nft?: {
            __typename?: 'Nft';
            name: string;
            image: string;
            description: string;
            sellerFeeBasisPoints: number;
            primarySaleHappened: boolean;
            address: string;
            mintAddress: string;
            owner?: {
              __typename?: 'NftOwner';
              address: string;
              associatedTokenAccountAddress: string;
              twitterHandle?: string | null;
            } | null;
            creators: Array<{
              __typename?: 'NftCreator';
              address: string;
              position?: number | null;
              profile?: {
                __typename?: 'TwitterProfile';
                walletAddress?: string | null;
                handle: string;
                profileImageUrlLowres: string;
                profileImageUrlHighres: string;
                bannerImageUrl: string;
              } | null;
            }>;
          } | null;
        } | null;
        wallet: {
          __typename?: 'Wallet';
          nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
        };
      }
  >;
  collectionsFeaturedByVolume: Array<{
    __typename?: 'Nft';
    mintAddress: string;
    name: string;
    image: string;
  }>;
  collectionsFeaturedByMarketCap: Array<{
    __typename?: 'Nft';
    mintAddress: string;
    name: string;
    image: string;
  }>;
  followWallets: Array<{
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
    nftCounts: { __typename?: 'WalletNftCount'; owned: number; created: number };
  }>;
  featuredListings: Array<{
    __typename?: 'AhListing';
    id: any;
    nft?: {
      __typename?: 'Nft';
      address: string;
      name: string;
      sellerFeeBasisPoints: number;
      mintAddress: string;
      description: string;
      image: string;
      primarySaleHappened: boolean;
      creators: Array<{
        __typename?: 'NftCreator';
        address: string;
        share: number;
        verified: boolean;
      }>;
      owner?: {
        __typename?: 'NftOwner';
        address: string;
        associatedTokenAccountAddress: string;
      } | null;
      purchases: Array<{
        __typename?: 'Purchase';
        id: any;
        buyer: any;
        price: any;
        createdAt: any;
        auctionHouse?: {
          __typename?: 'AuctionHouse';
          address: string;
          treasuryMint: string;
          auctionHouseTreasury: string;
          treasuryWithdrawalDestination: string;
          feeWithdrawalDestination: string;
          authority: string;
          creator: string;
          auctionHouseFeeAccount: string;
          bump: number;
          treasuryBump: number;
          feePayerBump: number;
          sellerFeeBasisPoints: number;
          requiresSignOff: boolean;
          canChangeSalePrice: boolean;
        } | null;
      }>;
      listings: Array<{
        __typename?: 'AhListing';
        id: any;
        tradeState: string;
        seller: any;
        metadata: any;
        price: any;
        tradeStateBump: number;
        createdAt: any;
        canceledAt?: any | null;
        auctionHouse?: {
          __typename?: 'AuctionHouse';
          address: string;
          treasuryMint: string;
          auctionHouseTreasury: string;
          treasuryWithdrawalDestination: string;
          feeWithdrawalDestination: string;
          authority: string;
          creator: string;
          auctionHouseFeeAccount: string;
          bump: number;
          treasuryBump: number;
          feePayerBump: number;
          sellerFeeBasisPoints: number;
          requiresSignOff: boolean;
          canChangeSalePrice: boolean;
        } | null;
      }>;
      offers: Array<{
        __typename?: 'Offer';
        id: any;
        tradeState: string;
        buyer: any;
        metadata: any;
        price: any;
        tradeStateBump: number;
        tokenAccount?: string | null;
        createdAt: any;
        canceledAt?: any | null;
        auctionHouse?: {
          __typename?: 'AuctionHouse';
          address: string;
          treasuryMint: string;
          auctionHouseTreasury: string;
          treasuryWithdrawalDestination: string;
          feeWithdrawalDestination: string;
          authority: string;
          creator: string;
          auctionHouseFeeAccount: string;
          bump: number;
          treasuryBump: number;
          feePayerBump: number;
          sellerFeeBasisPoints: number;
          requiresSignOff: boolean;
          canChangeSalePrice: boolean;
        } | null;
      }>;
    } | null;
  }>;
  buyNowMarketplace?: {
    __typename?: 'Marketplace';
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
  featuredMarketplaces: Array<{
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    bannerUrl: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      stats?: { __typename?: 'MintStats'; floor?: any | null } | null;
    }>;
    stats?: { __typename?: 'MarketStats'; nfts?: any | null } | null;
  }>;
};

export type NftMarketplaceQueryVariables = Exact<{
  subdomain: Scalars['String'];
  address: Scalars['String'];
}>;

export type NftMarketplaceQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    category: string;
    image: string;
    primarySaleHappened: boolean;
    files: Array<{ __typename?: 'NftFile'; uri: string; fileType: string }>;
    attributes: Array<{
      __typename?: 'NftAttribute';
      metadataAddress: string;
      value?: string | null;
      traitType?: string | null;
    }>;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    collection?: {
      __typename?: 'Nft';
      address: string;
      name: string;
      image: string;
      mintAddress: string;
    } | null;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  } | null;
  nftByMintAddress?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    category: string;
    image: string;
    primarySaleHappened: boolean;
    files: Array<{ __typename?: 'NftFile'; uri: string; fileType: string }>;
    attributes: Array<{
      __typename?: 'NftAttribute';
      metadataAddress: string;
      value?: string | null;
      traitType?: string | null;
    }>;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    collection?: {
      __typename?: 'Nft';
      address: string;
      name: string;
      image: string;
      mintAddress: string;
    } | null;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  } | null;
};

export type OffersPageQueryVariables = Exact<{
  subdomain: Scalars['String'];
  address: Scalars['PublicKey'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type OffersPageQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    ownerAddress: string;
    creators: Array<{
      __typename?: 'StoreCreator';
      creatorAddress: string;
      storeConfigAddress: string;
    }>;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
  sentOffers: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
  receivedOffers: Array<{
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  }>;
};

export type NftActivityQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type NftActivityQuery = {
  __typename?: 'QueryRoot';
  nftByMintAddress?: {
    __typename?: 'Nft';
    activities: Array<{
      __typename?: 'NftActivity';
      id: any;
      metadata: any;
      price: any;
      createdAt: any;
      activityType: string;
      wallets: Array<{
        __typename?: 'Wallet';
        address: any;
        twitterHandle?: string | null;
        profile?: {
          __typename?: 'TwitterProfile';
          walletAddress?: string | null;
          handle: string;
          profileImageUrlLowres: string;
          profileImageUrlHighres: string;
          bannerImageUrl: string;
        } | null;
      }>;
      auctionHouse?: { __typename?: 'AuctionHouse'; address: string; treasuryMint: string } | null;
    }>;
  } | null;
};

export type NftCardQueryVariables = Exact<{
  subdomain: Scalars['String'];
  address: Scalars['String'];
}>;

export type NftCardQuery = {
  __typename?: 'QueryRoot';
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{
      __typename?: 'NftCreator';
      address: string;
      share: number;
      verified: boolean;
    }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      purchaseId?: any | null;
      tradeStateBump: number;
      tokenAccount?: string | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  } | null;
  marketplace?: {
    __typename?: 'Marketplace';
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      treasuryMint: string;
      auctionHouseTreasury: string;
      treasuryWithdrawalDestination: string;
      feeWithdrawalDestination: string;
      authority: string;
      creator: string;
      auctionHouseFeeAccount: string;
      bump: number;
      treasuryBump: number;
      feePayerBump: number;
      sellerFeeBasisPoints: number;
      requiresSignOff: boolean;
      canChangeSalePrice: boolean;
    }>;
  } | null;
};

export type NftPageQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type NftPageQuery = {
  __typename?: 'QueryRoot';
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    attributes: Array<{
      __typename?: 'NftAttribute';
      metadataAddress: string;
      value?: string | null;
      traitType?: string | null;
    }>;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: { __typename?: 'NftOwner'; address: string } | null;
    purchases: Array<{
      __typename?: 'Purchase';
      id: any;
      buyer: any;
      price: any;
      createdAt: any;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    listings: Array<{
      __typename?: 'AhListing';
      id: any;
      tradeState: string;
      seller: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
    offers: Array<{
      __typename?: 'Offer';
      id: any;
      tradeState: string;
      buyer: any;
      metadata: any;
      price: any;
      tradeStateBump: number;
      tokenAccount?: string | null;
      purchaseId?: any | null;
      createdAt: any;
      canceledAt?: any | null;
      auctionHouse?: {
        __typename?: 'AuctionHouse';
        address: string;
        treasuryMint: string;
        auctionHouseTreasury: string;
        treasuryWithdrawalDestination: string;
        feeWithdrawalDestination: string;
        authority: string;
        creator: string;
        auctionHouseFeeAccount: string;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
      } | null;
    }>;
  } | null;
};

export type ShareNftQueryVariables = Exact<{
  subdomain: Scalars['String'];
  address: Scalars['String'];
}>;

export type ShareNftQuery = {
  __typename?: 'QueryRoot';
  marketplace?: {
    __typename?: 'Marketplace';
    subdomain: string;
    name: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    auctionHouses: Array<{
      __typename?: 'AuctionHouse';
      address: string;
      stats?: {
        __typename?: 'MintStats';
        floor?: any | null;
        average?: any | null;
        volume24hr?: any | null;
      } | null;
    }>;
  } | null;
  nft?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{ __typename?: 'Purchase'; id: any; buyer: any; price: any }>;
    listings: Array<{ __typename?: 'AhListing'; id: any; price: any }>;
    offers: Array<{ __typename?: 'Offer'; id: any; buyer: any; price: any }>;
  } | null;
  nftByMintAddress?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    sellerFeeBasisPoints: number;
    mintAddress: string;
    description: string;
    image: string;
    primarySaleHappened: boolean;
    creators: Array<{ __typename?: 'NftCreator'; address: string; verified: boolean }>;
    owner?: {
      __typename?: 'NftOwner';
      address: string;
      associatedTokenAccountAddress: string;
    } | null;
    purchases: Array<{ __typename?: 'Purchase'; id: any; buyer: any; price: any }>;
    listings: Array<{ __typename?: 'AhListing'; id: any; price: any }>;
    offers: Array<{ __typename?: 'Offer'; id: any; buyer: any; price: any }>;
  } | null;
};

export type ConnectionNodeFragment = {
  __typename?: 'Wallet';
  address: any;
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
};

export type AllConnectionsFromQueryVariables = Exact<{
  from: Scalars['PublicKey'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllConnectionsFromQuery = {
  __typename?: 'QueryRoot';
  connections: Array<{
    __typename?: 'GraphConnection';
    to: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
};

export type AllConnectionsToQueryVariables = Exact<{
  to: Scalars['PublicKey'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllConnectionsToQuery = {
  __typename?: 'QueryRoot';
  connections: Array<{
    __typename?: 'GraphConnection';
    from: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
};

export type GetCollectedByQueryVariables = Exact<{
  creator: Scalars['PublicKey'];
}>;

export type GetCollectedByQuery = {
  __typename?: 'QueryRoot';
  nfts: Array<{
    __typename?: 'Nft';
    address: string;
    owner?: {
      __typename?: 'NftOwner';
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    } | null;
  }>;
};

export type GetConnectedWalletProfileDataQueryVariables = Exact<{
  address: Scalars['PublicKey'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type GetConnectedWalletProfileDataQuery = {
  __typename?: 'QueryRoot';
  wallet: {
    __typename?: 'Wallet';
    address: any;
    nftCounts: {
      __typename?: 'WalletNftCount';
      owned: number;
      created: number;
      offered: number;
      listed: number;
    };
    connectionCounts: { __typename?: 'ConnectionCounts'; fromCount: number; toCount: number };
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  };
  followers: Array<{
    __typename?: 'GraphConnection';
    from: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
  following: Array<{
    __typename?: 'GraphConnection';
    to: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
};

export type GetProfileFollowerOverviewQueryVariables = Exact<{
  pubKey: Scalars['PublicKey'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type GetProfileFollowerOverviewQuery = {
  __typename?: 'QueryRoot';
  wallet: {
    __typename?: 'Wallet';
    connectionCounts: { __typename?: 'ConnectionCounts'; fromCount: number; toCount: number };
  };
  followers: Array<{
    __typename?: 'GraphConnection';
    from: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
  following: Array<{
    __typename?: 'GraphConnection';
    to: {
      __typename?: 'Wallet';
      address: any;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    };
  }>;
};

export type GetProfileInfoFromPubKeyQueryVariables = Exact<{
  pubKey: Scalars['PublicKey'];
}>;

export type GetProfileInfoFromPubKeyQuery = {
  __typename?: 'QueryRoot';
  wallet: {
    __typename?: 'Wallet';
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  };
};

export type GetProfileInfoFromTwitterHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;

export type GetProfileInfoFromTwitterHandleQuery = {
  __typename?: 'QueryRoot';
  profile?: {
    __typename?: 'TwitterProfile';
    walletAddress?: string | null;
    handle: string;
    profileImageUrlLowres: string;
    profileImageUrlHighres: string;
    bannerImageUrl: string;
  } | null;
};

export type GetProfilesQueryVariables = Exact<{
  addresses: Array<Scalars['PublicKey']> | Scalars['PublicKey'];
}>;

export type GetProfilesQuery = {
  __typename?: 'QueryRoot';
  wallets: Array<{
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  }>;
};

export type IsXFollowingYQueryVariables = Exact<{
  xPubKey: Scalars['PublicKey'];
  yPubKey: Scalars['PublicKey'];
}>;

export type IsXFollowingYQuery = {
  __typename?: 'QueryRoot';
  connections: Array<{ __typename?: 'GraphConnection'; address: string }>;
};

export type TwitterHandleFromPubKeyQueryVariables = Exact<{
  pubKey: Scalars['PublicKey'];
}>;

export type TwitterHandleFromPubKeyQuery = {
  __typename?: 'QueryRoot';
  wallet: {
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  };
};

export type MetadataSearchQueryVariables = Exact<{
  term: Scalars['String'];
}>;

export type MetadataSearchQuery = {
  __typename?: 'QueryRoot';
  metadataJsons: Array<{
    __typename?: 'MetadataJson';
    name: string;
    address: string;
    image?: string | null;
    creatorAddress?: string | null;
    creatorTwitterHandle?: string | null;
  }>;
};

export type ProfileSearchQueryVariables = Exact<{
  term: Scalars['String'];
}>;

export type ProfileSearchQuery = {
  __typename?: 'QueryRoot';
  profiles: Array<{
    __typename?: 'Wallet';
    address: any;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  }>;
};

export type SearchQueryVariables = Exact<{
  term: Scalars['String'];
  walletAddress: Scalars['PublicKey'];
  nftMintAddress: Scalars['String'];
}>;

export type SearchQuery = {
  __typename?: 'QueryRoot';
  metadataJsons: Array<{
    __typename?: 'MetadataJson';
    name: string;
    address: string;
    mintAddress: string;
    image?: string | null;
    creatorAddress?: string | null;
    creatorTwitterHandle?: string | null;
  }>;
  profiles: Array<{
    __typename?: 'Wallet';
    address: any;
    twitterHandle?: string | null;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  }>;
  wallet: {
    __typename?: 'Wallet';
    address: any;
    twitterHandle?: string | null;
    profile?: {
      __typename?: 'TwitterProfile';
      walletAddress?: string | null;
      handle: string;
      profileImageUrlLowres: string;
      profileImageUrlHighres: string;
      bannerImageUrl: string;
    } | null;
  };
  nftByMintAddress?: {
    __typename?: 'Nft';
    address: string;
    name: string;
    image: string;
    mintAddress: string;
    creators: Array<{
      __typename?: 'NftCreator';
      twitterHandle?: string | null;
      address: string;
      profile?: {
        __typename?: 'TwitterProfile';
        walletAddress?: string | null;
        handle: string;
        profileImageUrlLowres: string;
        profileImageUrlHighres: string;
        bannerImageUrl: string;
      } | null;
    }>;
  } | null;
  searchCollections: Array<{
    __typename?: 'MetadataJson';
    name: string;
    address: string;
    mintAddress: string;
    image?: string | null;
  }>;
};

export const CollectionPreviewFragmentDoc = gql`
  fragment CollectionPreview on Nft {
    mintAddress
    name
    image
  }
`;
export const ProfileInfoFragmentDoc = gql`
  fragment ProfileInfo on TwitterProfile {
    walletAddress
    handle
    profileImageUrlLowres
    profileImageUrlHighres
    bannerImageUrl
  }
`;
export const FollowEventPreviewFragmentDoc = gql`
  fragment FollowEventPreview on FollowEvent {
    feedEventId
    createdAt
    walletAddress
    profile {
      ...ProfileInfo
    }
    graphConnectionAddress
    connection {
      address
      from {
        address
        profile {
          ...ProfileInfo
        }
      }
      to {
        address
        profile {
          ...ProfileInfo
        }
      }
    }
    wallet {
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const ListingEventPreviewFragmentDoc = gql`
  fragment ListingEventPreview on ListingEvent {
    feedEventId
    createdAt
    walletAddress
    profile {
      ...ProfileInfo
    }
    lifecycle
    listing {
      id
      seller
      price
      nft {
        name
        image(width: 600)
        description
        owner {
          address
          associatedTokenAccountAddress
          twitterHandle
        }
        listings {
          id
          seller
          price
          nft {
            name
            image(width: 600)
            description
            owner {
              address
              associatedTokenAccountAddress
              twitterHandle
            }
            sellerFeeBasisPoints
            primarySaleHappened
            creators {
              address
              position
              profile {
                ...ProfileInfo
              }
            }
            address
            mintAddress
          }
        }
        address
        mintAddress
      }
    }
    wallet {
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const MarketplaceAuctionHouseFragmentDoc = gql`
  fragment MarketplaceAuctionHouse on Marketplace {
    auctionHouses {
      address
      treasuryMint
      auctionHouseTreasury
      treasuryWithdrawalDestination
      feeWithdrawalDestination
      authority
      creator
      auctionHouseFeeAccount
      bump
      treasuryBump
      feePayerBump
      sellerFeeBasisPoints
      requiresSignOff
      canChangeSalePrice
    }
  }
`;
export const MintEventPreviewFragmentDoc = gql`
  fragment MintEventPreview on MintEvent {
    feedEventId
    createdAt
    walletAddress
    profile {
      ...ProfileInfo
    }
    nft {
      name
      image(width: 600)
      description
      owner {
        address
        associatedTokenAccountAddress
        twitterHandle
      }
      sellerFeeBasisPoints
      primarySaleHappened
      creators {
        address
        position
        profile {
          ...ProfileInfo
        }
      }
      address
      mintAddress
    }
    wallet {
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const NftCardFragmentDoc = gql`
  fragment NftCard on Nft {
    address
    name
    sellerFeeBasisPoints
    mintAddress
    description
    image
    primarySaleHappened
    creators {
      address
      share
      verified
    }
    owner {
      address
      associatedTokenAccountAddress
    }
    purchases {
      id
      buyer
      auctionHouse {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
      }
      price
      createdAt
    }
    listings {
      id
      tradeState
      seller
      metadata
      auctionHouse {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
      }
      price
      tradeStateBump
      purchaseId
      createdAt
      canceledAt
    }
    offers {
      id
      tradeState
      buyer
      metadata
      auctionHouse {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
      }
      price
      purchaseId
      tradeStateBump
      tokenAccount
      createdAt
      canceledAt
    }
  }
`;
export const OfferEventPreviewFragmentDoc = gql`
  fragment OfferEventPreview on OfferEvent {
    feedEventId
    createdAt
    walletAddress
    profile {
      ...ProfileInfo
    }
    lifecycle
    offer {
      id
      buyer
      price
      nft {
        name
        image(width: 600)
        description
        owner {
          address
          associatedTokenAccountAddress
          twitterHandle
        }
        offers {
          id
          buyer
          price
          nft {
            name
            image(width: 600)
            description
            owner {
              address
              associatedTokenAccountAddress
              twitterHandle
            }
            sellerFeeBasisPoints
            primarySaleHappened
            creators {
              address
              position
              profile {
                ...ProfileInfo
              }
            }
            address
            mintAddress
          }
        }
        address
        mintAddress
      }
    }
    wallet {
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const PurchaseEventPreviewFragmentDoc = gql`
  fragment PurchaseEventPreview on PurchaseEvent {
    feedEventId
    createdAt
    walletAddress
    profile {
      ...ProfileInfo
    }
    purchase {
      id
      buyer
      seller
      price
      nft {
        name
        image(width: 600)
        description
        owner {
          address
          associatedTokenAccountAddress
          twitterHandle
        }
        sellerFeeBasisPoints
        primarySaleHappened
        creators {
          address
          position
          profile {
            ...ProfileInfo
          }
        }
        address
        mintAddress
      }
    }
    wallet {
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const ProfilePreviewFragmentDoc = gql`
  fragment ProfilePreview on Wallet {
    address
    profile {
      ...ProfileInfo
    }
    nftCounts {
      owned
      created
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const BuyNowListingFragmentDoc = gql`
  fragment BuyNowListing on AhListing {
    id
    nft {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        share
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
`;
export const MarketplacePreviewFragmentDoc = gql`
  fragment MarketplacePreview on Marketplace {
    subdomain
    name
    bannerUrl
    creators {
      creatorAddress
      profile {
        ...ProfileInfo
      }
    }
    auctionHouses {
      stats {
        floor
      }
    }
    stats {
      nfts
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const ConnectionNodeFragmentDoc = gql`
  fragment ConnectionNode on Wallet {
    address
    profile {
      ...ProfileInfo
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const ActivityPageDocument = gql`
  query activityPage($address: PublicKey!) {
    wallet(address: $address) {
      __typename
      address
      bids {
        __typename
        listingAddress
        bidderAddress
        lastBidTime
        lastBidAmount
        cancelled
        listing {
          address
          ended
          storefront {
            __typename
            ownerAddress
            subdomain
            title
            description
            faviconUrl
            logoUrl
            bannerUrl
          }
          nfts {
            __typename
            address
            name
            description
            image
          }
          bids {
            bidderAddress
            lastBidTime
            lastBidAmount
            cancelled
            listingAddress
          }
        }
      }
    }
  }
`;
export const CollectionNfTsDocument = gql`
  query collectionNFTs($creator: PublicKey!, $owner: PublicKey!, $limit: Int!, $offset: Int!) {
    ownedCollection: nfts(owners: [$owner], limit: $limit, offset: $offset) {
      address
      collection {
        address
        name
        image
        description
      }
    }
    createdCollection: nfts(creators: [$creator], limit: $limit, offset: $offset) {
      address
      collection {
        address
        name
        image
        description
      }
    }
  }
`;
export const CreatedNfTsDocument = gql`
  query createdNFTs($creator: PublicKey!, $limit: Int!, $offset: Int!, $subdomain: String!) {
    marketplace(subdomain: $subdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
      }
    }
    nfts(creators: [$creator], limit: $limit, offset: $offset) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        share
        verified
      }
      collection {
        address
        name
        image
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
`;
export const OwnedNfTsDocument = gql`
  query ownedNFTs($address: PublicKey!, $limit: Int!, $offset: Int!, $subdomain: String!) {
    marketplace(subdomain: $subdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
        stats {
          floor
          average
          volume24hr
        }
      }
    }
    nfts(owners: [$address], limit: $limit, offset: $offset) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        share
        verified
        profile {
          ...ProfileInfo
        }
      }
      collection {
        address
        name
        image
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const WalletProfileDocument = gql`
  query walletProfile($handle: String!) {
    profile(handle: $handle) {
      ...ProfileInfo
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const GetCollectionDocument = gql`
  query getCollection($address: String!) {
    nft(address: $address) {
      address
      name
      description
      mintAddress
      image
      creators {
        position
        address
        profile {
          ...ProfileInfo
        }
      }
    }
    nftByMintAddress(address: $address) {
      address
      name
      description
      mintAddress
      image
      creators {
        position
        address
        profile {
          ...ProfileInfo
        }
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const NftCollectionDocument = gql`
  query nftCollection(
    $address: String!
    $marketplaceSubdomain: String!
    $limit: Int = 25
    $offset: Int = 0
  ) {
    nft(address: "DTjENPCxVnukLh5wbdBsb3CDttSfQzdNeRyk7dzr6vjr") {
      address
      name
      mintAddress
      creators {
        position
        address
        profile {
          ...ProfileInfo
        }
      }
    }
    nfts(
      collection: "FbMgyHab7LxdhnSAFueCR9JGdCZKQNornmHEf4vocGGQ"
      limit: $limit
      offset: $offset
    ) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      attributes {
        metadataAddress
        value
        traitType
      }
      creators {
        address
        verified
      }
      owner {
        address
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
    marketplace(subdomain: $marketplaceSubdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
        stats {
          floor
          average
          volume24hr
        }
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const NftsInCollectionDocument = gql`
  query nftsInCollection(
    $collectionMintAddress: PublicKey!
    $listed: Boolean
    $marketplaceSubdomain: String!
    $limit: Int = 25
    $offset: Int = 0
  ) {
    marketplace(subdomain: $marketplaceSubdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
        stats {
          floor
          average
          volume24hr
        }
      }
    }
    nfts(collection: $collectionMintAddress, listed: $listed, limit: $limit, offset: $offset) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      attributes {
        metadataAddress
        value
        traitType
      }
      creators {
        address
        share
        verified
        profile {
          ...ProfileInfo
        }
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      collection {
        address
        name
        image
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const DiscoverCollectionsByMarketCapDocument = gql`
  query discoverCollectionsByMarketCap(
    $searchTerm: String
    $start: DateTimeUtc!
    $end: DateTimeUtc!
    $limit: Int!
    $offset: Int!
  ) {
    collectionsFeaturedByMarketCap(
      term: $searchTerm
      startDate: $start
      endDate: $end
      limit: $limit
      offset: $offset
      orderDirection: DESC
    ) {
      ...CollectionPreview
    }
  }
  ${CollectionPreviewFragmentDoc}
`;
export const DiscoverCollectionsByVolumeDocument = gql`
  query discoverCollectionsByVolume(
    $searchTerm: String
    $start: DateTimeUtc!
    $end: DateTimeUtc!
    $limit: Int!
    $offset: Int!
  ) {
    collectionsFeaturedByVolume(
      term: $searchTerm
      startDate: $start
      endDate: $end
      limit: $limit
      offset: $offset
      orderDirection: DESC
    ) {
      ...CollectionPreview
    }
  }
  ${CollectionPreviewFragmentDoc}
`;
export const DiscoverNftsActiveOffersDocument = gql`
  query discoverNftsActiveOffers($searchTerm: String, $limit: Int!, $offset: Int!) {
    nfts(
      auctionHouses: ["9SvsTjqk3YoicaYnC4VW1f8QAN9ku7QCCk6AyfUdzc9t"]
      withOffers: true
      limit: $limit
      offset: $offset
      term: $searchTerm
    ) {
      ...NftCard
    }
    marketplace(subdomain: "haus") {
      ...MarketplaceAuctionHouse
    }
  }
  ${NftCardFragmentDoc}
  ${MarketplaceAuctionHouseFragmentDoc}
`;
export const DiscoverNftsAllDocument = gql`
  query discoverNftsAll($searchTerm: String, $limit: Int!, $offset: Int!) {
    nfts(
      auctionHouses: ["9SvsTjqk3YoicaYnC4VW1f8QAN9ku7QCCk6AyfUdzc9t"]
      limit: $limit
      offset: $offset
      term: $searchTerm
    ) {
      ...NftCard
    }
    marketplace(subdomain: "haus") {
      ...MarketplaceAuctionHouse
    }
  }
  ${NftCardFragmentDoc}
  ${MarketplaceAuctionHouseFragmentDoc}
`;
export const DiscoverNftsBuyNowDocument = gql`
  query discoverNftsBuyNow($searchTerm: String, $limit: Int!, $offset: Int!) {
    nfts(
      auctionHouses: ["9SvsTjqk3YoicaYnC4VW1f8QAN9ku7QCCk6AyfUdzc9t"]
      listed: true
      limit: $limit
      offset: $offset
      term: $searchTerm
    ) {
      ...NftCard
    }
    marketplace(subdomain: "haus") {
      ...MarketplaceAuctionHouse
    }
  }
  ${NftCardFragmentDoc}
  ${MarketplaceAuctionHouseFragmentDoc}
`;
export const DiscoverProfilesAllDocument = gql`
  query discoverProfilesAll($userWallet: PublicKey, $limit: Int!, $offset: Int!) {
    followWallets(wallet: $userWallet, limit: $limit, offset: $offset) {
      address
      profile {
        ...ProfileInfo
      }
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const FeedDocument = gql`
  query feed($address: PublicKey!, $limit: Int = 25, $offset: Int = 0, $excludeTypes: [String!]) {
    feedEvents(wallet: $address, limit: $limit, offset: $offset, excludeTypes: $excludeTypes) {
      __typename
      ... on MintEvent {
        ...MintEventPreview
      }
      ... on FollowEvent {
        ...FollowEventPreview
      }
      ... on PurchaseEvent {
        ...PurchaseEventPreview
      }
      ... on ListingEvent {
        ...ListingEventPreview
      }
      ... on OfferEvent {
        ...OfferEventPreview
      }
    }
  }
  ${MintEventPreviewFragmentDoc}
  ${FollowEventPreviewFragmentDoc}
  ${PurchaseEventPreviewFragmentDoc}
  ${ListingEventPreviewFragmentDoc}
  ${OfferEventPreviewFragmentDoc}
`;
export const WhoToFollowDocument = gql`
  query whoToFollow($wallet: PublicKey!, $limit: Int!, $offset: Int = 0) {
    followWallets(wallet: $wallet, limit: $limit, offset: $offset) {
      address
      profile {
        ...ProfileInfo
      }
      nftCounts {
        owned
        created
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const HomeDocument = gql`
  query home(
    $userWallet: PublicKey
    $featuredCollectionsLimit: Int!
    $featuredProfileLimit: Int!
    $featuredBuyNowLimit: Int!
    $feedEventsLimit: Int!
  ) {
    feedEvents(
      wallet: "ALphA7iWKMUi8owfbSKFm2i3BxG6LbasYYXt8sP85Upz"
      limit: $feedEventsLimit
      offset: 0
      excludeTypes: ["follow"]
    ) {
      __typename
      ... on MintEvent {
        ...MintEventPreview
      }
      ... on FollowEvent {
        ...FollowEventPreview
      }
      ... on PurchaseEvent {
        ...PurchaseEventPreview
      }
      ... on ListingEvent {
        ...ListingEventPreview
      }
      ... on OfferEvent {
        ...OfferEventPreview
      }
    }
    collectionsFeaturedByVolume(
      startDate: "2020-01-01T00:00:00Z"
      endDate: "3000-01-01T00:00:00Z"
      limit: $featuredCollectionsLimit
      offset: 0
      orderDirection: DESC
    ) {
      ...CollectionPreview
    }
    collectionsFeaturedByMarketCap(
      startDate: "2020-01-01T00:00:00Z"
      endDate: "3000-01-01T00:00:00Z"
      limit: $featuredCollectionsLimit
      offset: 0
      orderDirection: DESC
    ) {
      ...CollectionPreview
    }
    followWallets(wallet: $userWallet, limit: $featuredProfileLimit, offset: 0) {
      ...ProfilePreview
    }
    featuredListings(limit: $featuredBuyNowLimit, offset: 0) {
      ...BuyNowListing
    }
    buyNowMarketplace: marketplace(subdomain: "haus") {
      ...MarketplaceAuctionHouse
    }
    featuredMarketplaces: marketplaces(
      subdomains: [
        "junglecats"
        "womeninnfts"
        "nft4good"
        "monkedao"
        "pixelbands"
        "event"
        "skeletoncrew"
        "thechimpions"
      ]
    ) {
      ...MarketplacePreview
    }
  }
  ${MintEventPreviewFragmentDoc}
  ${FollowEventPreviewFragmentDoc}
  ${PurchaseEventPreviewFragmentDoc}
  ${ListingEventPreviewFragmentDoc}
  ${OfferEventPreviewFragmentDoc}
  ${CollectionPreviewFragmentDoc}
  ${ProfilePreviewFragmentDoc}
  ${BuyNowListingFragmentDoc}
  ${MarketplaceAuctionHouseFragmentDoc}
  ${MarketplacePreviewFragmentDoc}
`;
export const NftMarketplaceDocument = gql`
  query nftMarketplace($subdomain: String!, $address: String!) {
    marketplace(subdomain: $subdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
        stats {
          floor
          average
          volume24hr
        }
      }
    }
    nft(address: $address) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      category
      image
      primarySaleHappened
      files {
        uri
        fileType
      }
      attributes {
        metadataAddress
        value
        traitType
      }
      creators {
        address
        verified
      }
      collection {
        address
        name
        image
        mintAddress
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
    nftByMintAddress(address: $address) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      category
      image
      primarySaleHappened
      files {
        uri
        fileType
      }
      attributes {
        metadataAddress
        value
        traitType
      }
      creators {
        address
        verified
      }
      collection {
        address
        name
        image
        mintAddress
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
`;
export const OffersPageDocument = gql`
  query offersPage($subdomain: String!, $address: PublicKey!, $limit: Int!, $offset: Int!) {
    marketplace(subdomain: $subdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      ownerAddress
      creators {
        creatorAddress
        storeConfigAddress
      }
      auctionHouses {
        address
        treasuryMint
        auctionHouseTreasury
        treasuryWithdrawalDestination
        feeWithdrawalDestination
        authority
        creator
        auctionHouseFeeAccount
        bump
        treasuryBump
        feePayerBump
        sellerFeeBasisPoints
        requiresSignOff
        canChangeSalePrice
        stats {
          floor
          average
          volume24hr
        }
      }
    }
    sentOffers: nfts(offerers: [$address], limit: $limit, offset: $offset) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
    receivedOffers: nfts(owners: [$address], limit: $limit, offset: $offset) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
`;
export const NftActivityDocument = gql`
  query nftActivity($address: String!) {
    nftByMintAddress(address: $address) {
      activities {
        id
        metadata
        price
        createdAt
        wallets {
          address
          twitterHandle
          profile {
            ...ProfileInfo
          }
        }
        activityType
        auctionHouse {
          address
          treasuryMint
        }
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const NftCardDocument = gql`
  query nftCard($subdomain: String!, $address: String!) {
    nft(address: $address) {
      ...NftCard
    }
    marketplace(subdomain: $subdomain) {
      ...MarketplaceAuctionHouse
    }
  }
  ${NftCardFragmentDoc}
  ${MarketplaceAuctionHouseFragmentDoc}
`;
export const NftPageDocument = gql`
  query nftPage($address: String!) {
    nft(address: $address) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      attributes {
        metadataAddress
        value
        traitType
      }
      creators {
        address
        verified
      }
      owner {
        address
      }
      purchases {
        id
        buyer
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        createdAt
      }
      listings {
        id
        tradeState
        seller
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        purchaseId
        createdAt
        canceledAt
      }
      offers {
        id
        tradeState
        buyer
        metadata
        auctionHouse {
          address
          treasuryMint
          auctionHouseTreasury
          treasuryWithdrawalDestination
          feeWithdrawalDestination
          authority
          creator
          auctionHouseFeeAccount
          bump
          treasuryBump
          feePayerBump
          sellerFeeBasisPoints
          requiresSignOff
          canChangeSalePrice
        }
        price
        tradeStateBump
        tokenAccount
        purchaseId
        createdAt
        canceledAt
      }
    }
  }
`;
export const ShareNftDocument = gql`
  query shareNFT($subdomain: String!, $address: String!) {
    marketplace(subdomain: $subdomain) {
      subdomain
      name
      description
      logoUrl
      bannerUrl
      auctionHouses {
        address
        stats {
          floor
          average
          volume24hr
        }
      }
    }
    nft(address: $address) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        price
      }
      listings {
        id
        price
      }
      offers {
        id
        buyer
        price
      }
    }
    nftByMintAddress(address: $address) {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        id
        buyer
        price
      }
      listings {
        id
        price
      }
      offers {
        id
        buyer
        price
      }
    }
  }
`;
export const AllConnectionsFromDocument = gql`
  query allConnectionsFrom($from: PublicKey!, $limit: Int = 1000, $offset: Int = 0) {
    connections(from: [$from], limit: $limit, offset: $offset) {
      to {
        ...ConnectionNode
      }
    }
  }
  ${ConnectionNodeFragmentDoc}
`;
export const AllConnectionsToDocument = gql`
  query allConnectionsTo($to: PublicKey!, $limit: Int = 1000, $offset: Int = 0) {
    connections(to: [$to], limit: $limit, offset: $offset) {
      from {
        ...ConnectionNode
      }
    }
  }
  ${ConnectionNodeFragmentDoc}
`;
export const GetCollectedByDocument = gql`
  query getCollectedBy($creator: PublicKey!) {
    nfts(creators: [$creator], limit: 1000, offset: 0) {
      address
      owner {
        profile {
          ...ProfileInfo
        }
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const GetConnectedWalletProfileDataDocument = gql`
  query getConnectedWalletProfileData($address: PublicKey!, $limit: Int = 1000, $offset: Int = 0) {
    wallet(address: $address) {
      address
      nftCounts {
        owned
        created
        offered
        listed
      }
      connectionCounts {
        fromCount
        toCount
      }
      profile {
        ...ProfileInfo
      }
    }
    followers: connections(to: [$address], limit: $limit, offset: $offset) {
      from {
        ...ConnectionNode
      }
    }
    following: connections(from: [$address], limit: $limit, offset: $offset) {
      to {
        ...ConnectionNode
      }
    }
  }
  ${ProfileInfoFragmentDoc}
  ${ConnectionNodeFragmentDoc}
`;
export const GetProfileFollowerOverviewDocument = gql`
  query getProfileFollowerOverview($pubKey: PublicKey!, $limit: Int = 1000, $offset: Int = 0) {
    wallet(address: $pubKey) {
      connectionCounts {
        fromCount
        toCount
      }
    }
    followers: connections(to: [$pubKey], limit: $limit, offset: $offset) {
      from {
        ...ConnectionNode
      }
    }
    following: connections(from: [$pubKey], limit: $limit, offset: $offset) {
      to {
        ...ConnectionNode
      }
    }
  }
  ${ConnectionNodeFragmentDoc}
`;
export const GetProfileInfoFromPubKeyDocument = gql`
  query getProfileInfoFromPubKey($pubKey: PublicKey!) {
    wallet(address: $pubKey) {
      profile {
        ...ProfileInfo
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const GetProfileInfoFromTwitterHandleDocument = gql`
  query getProfileInfoFromTwitterHandle($handle: String!) {
    profile(handle: $handle) {
      ...ProfileInfo
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const GetProfilesDocument = gql`
  query getProfiles($addresses: [PublicKey!]!) {
    wallets(addresses: $addresses) {
      address
      profile {
        ...ProfileInfo
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const IsXFollowingYDocument = gql`
  query isXFollowingY($xPubKey: PublicKey!, $yPubKey: PublicKey!) {
    connections(from: [$xPubKey], to: [$yPubKey], limit: 1, offset: 0) {
      address
    }
  }
`;
export const TwitterHandleFromPubKeyDocument = gql`
  query twitterHandleFromPubKey($pubKey: PublicKey!) {
    wallet(address: $pubKey) {
      ...ConnectionNode
    }
  }
  ${ConnectionNodeFragmentDoc}
`;
export const MetadataSearchDocument = gql`
  query metadataSearch($term: String!) {
    metadataJsons(term: $term, limit: 25, offset: 0) {
      name
      address
      image
      creatorAddress
      creatorTwitterHandle
    }
  }
`;
export const ProfileSearchDocument = gql`
  query profileSearch($term: String!) {
    profiles(term: $term, limit: 5, offset: 0) {
      address
      profile {
        ...ProfileInfo
      }
    }
  }
  ${ProfileInfoFragmentDoc}
`;
export const SearchDocument = gql`
  query search($term: String!, $walletAddress: PublicKey!, $nftMintAddress: String!) {
    metadataJsons(term: $term, limit: 25, offset: 0) {
      name
      address
      mintAddress
      image
      creatorAddress
      creatorTwitterHandle
    }
    profiles(term: $term, limit: 5, offset: 0) {
      address
      twitterHandle
      profile {
        ...ProfileInfo
      }
    }
    wallet(address: $walletAddress) {
      address
      twitterHandle
      profile {
        ...ProfileInfo
      }
    }
    nftByMintAddress(address: $nftMintAddress) {
      address
      name
      image
      creators {
        twitterHandle
        address
        profile {
          ...ProfileInfo
        }
      }
      mintAddress
    }
    searchCollections(term: $term, limit: 25, offset: 0) {
      name
      address
      mintAddress
      image
    }
  }
  ${ProfileInfoFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    activityPage(
      variables: ActivityPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ActivityPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ActivityPageQuery>(ActivityPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'activityPage',
        'query'
      );
    },
    collectionNFTs(
      variables: CollectionNfTsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CollectionNfTsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CollectionNfTsQuery>(CollectionNfTsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'collectionNFTs',
        'query'
      );
    },
    createdNFTs(
      variables: CreatedNfTsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreatedNfTsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatedNfTsQuery>(CreatedNfTsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createdNFTs',
        'query'
      );
    },
    ownedNFTs(
      variables: OwnedNfTsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<OwnedNfTsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OwnedNfTsQuery>(OwnedNfTsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ownedNFTs',
        'query'
      );
    },
    walletProfile(
      variables: WalletProfileQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<WalletProfileQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<WalletProfileQuery>(WalletProfileDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'walletProfile',
        'query'
      );
    },
    getCollection(
      variables: GetCollectionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCollectionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCollectionQuery>(GetCollectionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCollection',
        'query'
      );
    },
    nftCollection(
      variables: NftCollectionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftCollectionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftCollectionQuery>(NftCollectionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftCollection',
        'query'
      );
    },
    nftsInCollection(
      variables: NftsInCollectionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftsInCollectionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftsInCollectionQuery>(NftsInCollectionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftsInCollection',
        'query'
      );
    },
    discoverCollectionsByMarketCap(
      variables: DiscoverCollectionsByMarketCapQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverCollectionsByMarketCapQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverCollectionsByMarketCapQuery>(
            DiscoverCollectionsByMarketCapDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'discoverCollectionsByMarketCap',
        'query'
      );
    },
    discoverCollectionsByVolume(
      variables: DiscoverCollectionsByVolumeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverCollectionsByVolumeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverCollectionsByVolumeQuery>(
            DiscoverCollectionsByVolumeDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'discoverCollectionsByVolume',
        'query'
      );
    },
    discoverNftsActiveOffers(
      variables: DiscoverNftsActiveOffersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverNftsActiveOffersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverNftsActiveOffersQuery>(
            DiscoverNftsActiveOffersDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'discoverNftsActiveOffers',
        'query'
      );
    },
    discoverNftsAll(
      variables: DiscoverNftsAllQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverNftsAllQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverNftsAllQuery>(DiscoverNftsAllDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'discoverNftsAll',
        'query'
      );
    },
    discoverNftsBuyNow(
      variables: DiscoverNftsBuyNowQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverNftsBuyNowQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverNftsBuyNowQuery>(DiscoverNftsBuyNowDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'discoverNftsBuyNow',
        'query'
      );
    },
    discoverProfilesAll(
      variables: DiscoverProfilesAllQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DiscoverProfilesAllQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DiscoverProfilesAllQuery>(DiscoverProfilesAllDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'discoverProfilesAll',
        'query'
      );
    },
    feed(
      variables: FeedQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FeedQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FeedQuery>(FeedDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'feed',
        'query'
      );
    },
    whoToFollow(
      variables: WhoToFollowQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<WhoToFollowQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<WhoToFollowQuery>(WhoToFollowDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'whoToFollow',
        'query'
      );
    },
    home(
      variables: HomeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<HomeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<HomeQuery>(HomeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'home',
        'query'
      );
    },
    nftMarketplace(
      variables: NftMarketplaceQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftMarketplaceQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftMarketplaceQuery>(NftMarketplaceDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftMarketplace',
        'query'
      );
    },
    offersPage(
      variables: OffersPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<OffersPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OffersPageQuery>(OffersPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'offersPage',
        'query'
      );
    },
    nftActivity(
      variables: NftActivityQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftActivityQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftActivityQuery>(NftActivityDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftActivity',
        'query'
      );
    },
    nftCard(
      variables: NftCardQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftCardQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftCardQuery>(NftCardDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftCard',
        'query'
      );
    },
    nftPage(
      variables: NftPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NftPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NftPageQuery>(NftPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'nftPage',
        'query'
      );
    },
    shareNFT(
      variables: ShareNftQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ShareNftQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ShareNftQuery>(ShareNftDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'shareNFT',
        'query'
      );
    },
    allConnectionsFrom(
      variables: AllConnectionsFromQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AllConnectionsFromQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AllConnectionsFromQuery>(AllConnectionsFromDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'allConnectionsFrom',
        'query'
      );
    },
    allConnectionsTo(
      variables: AllConnectionsToQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AllConnectionsToQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AllConnectionsToQuery>(AllConnectionsToDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'allConnectionsTo',
        'query'
      );
    },
    getCollectedBy(
      variables: GetCollectedByQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCollectedByQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCollectedByQuery>(GetCollectedByDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCollectedBy',
        'query'
      );
    },
    getConnectedWalletProfileData(
      variables: GetConnectedWalletProfileDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetConnectedWalletProfileDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetConnectedWalletProfileDataQuery>(
            GetConnectedWalletProfileDataDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getConnectedWalletProfileData',
        'query'
      );
    },
    getProfileFollowerOverview(
      variables: GetProfileFollowerOverviewQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetProfileFollowerOverviewQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProfileFollowerOverviewQuery>(
            GetProfileFollowerOverviewDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getProfileFollowerOverview',
        'query'
      );
    },
    getProfileInfoFromPubKey(
      variables: GetProfileInfoFromPubKeyQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetProfileInfoFromPubKeyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProfileInfoFromPubKeyQuery>(
            GetProfileInfoFromPubKeyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getProfileInfoFromPubKey',
        'query'
      );
    },
    getProfileInfoFromTwitterHandle(
      variables: GetProfileInfoFromTwitterHandleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetProfileInfoFromTwitterHandleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProfileInfoFromTwitterHandleQuery>(
            GetProfileInfoFromTwitterHandleDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getProfileInfoFromTwitterHandle',
        'query'
      );
    },
    getProfiles(
      variables: GetProfilesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetProfilesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProfilesQuery>(GetProfilesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getProfiles',
        'query'
      );
    },
    isXFollowingY(
      variables: IsXFollowingYQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IsXFollowingYQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IsXFollowingYQuery>(IsXFollowingYDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'isXFollowingY',
        'query'
      );
    },
    twitterHandleFromPubKey(
      variables: TwitterHandleFromPubKeyQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TwitterHandleFromPubKeyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TwitterHandleFromPubKeyQuery>(TwitterHandleFromPubKeyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'twitterHandleFromPubKey',
        'query'
      );
    },
    metadataSearch(
      variables: MetadataSearchQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MetadataSearchQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MetadataSearchQuery>(MetadataSearchDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'metadataSearch',
        'query'
      );
    },
    profileSearch(
      variables: ProfileSearchQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ProfileSearchQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ProfileSearchQuery>(ProfileSearchDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'profileSearch',
        'query'
      );
    },
    search(
      variables: SearchQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<SearchQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SearchQuery>(SearchDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'search',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
