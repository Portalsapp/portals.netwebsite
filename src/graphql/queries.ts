/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmplifyDataStore = /* GraphQL */ `
  query GetAmplifyDataStore($ds_pk: String!, $ds_sk: String!) {
    getAmplifyDataStore(ds_pk: $ds_pk, ds_sk: $ds_sk) {
      ds_pk
      ds_sk
    }
  }
`;
export const listAmplifyDataStores = /* GraphQL */ `
  query ListAmplifyDataStores(
    $filter: TableAmplifyDataStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmplifyDataStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ds_pk
        ds_sk
      }
      nextToken
    }
  }
`;
export const queryAmplifyDataStoresByInvertedIndex = /* GraphQL */ `
  query QueryAmplifyDataStoresByInvertedIndex(
    $ds_sk: String!
    $first: Int
    $after: String
  ) {
    queryAmplifyDataStoresByInvertedIndex(
      ds_sk: $ds_sk
      first: $first
      after: $after
    ) {
      items {
        ds_pk
        ds_sk
      }
      nextToken
    }
  }
`;
export const queryAmplifyDataStoresByDsPkIndex = /* GraphQL */ `
  query QueryAmplifyDataStoresByDsPkIndex(
    $ds_pk: String!
    $first: Int
    $after: String
  ) {
    queryAmplifyDataStoresByDsPkIndex(
      ds_pk: $ds_pk
      first: $first
      after: $after
    ) {
      items {
        ds_pk
        ds_sk
      }
      nextToken
    }
  }
`;
