/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
};

export type UpdateAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
};

export type DeleteAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
};

export type TableAmplifyDataStoreFilterInput = {
  ds_pk?: TableStringFilterInput | null,
  ds_sk?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateAmplifyDataStoreMutationVariables = {
  input: CreateAmplifyDataStoreInput,
};

export type CreateAmplifyDataStoreMutation = {
  createAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type UpdateAmplifyDataStoreMutationVariables = {
  input: UpdateAmplifyDataStoreInput,
};

export type UpdateAmplifyDataStoreMutation = {
  updateAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type DeleteAmplifyDataStoreMutationVariables = {
  input: DeleteAmplifyDataStoreInput,
};

export type DeleteAmplifyDataStoreMutation = {
  deleteAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type GetAmplifyDataStoreQueryVariables = {
  ds_pk: string,
  ds_sk: string,
};

export type GetAmplifyDataStoreQuery = {
  getAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type ListAmplifyDataStoresQueryVariables = {
  filter?: TableAmplifyDataStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAmplifyDataStoresQuery = {
  listAmplifyDataStores:  {
    __typename: "AmplifyDataStoreConnection",
    items:  Array< {
      __typename: "AmplifyDataStore",
      ds_pk: string,
      ds_sk: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryAmplifyDataStoresByInvertedIndexQueryVariables = {
  ds_sk: string,
  first?: number | null,
  after?: string | null,
};

export type QueryAmplifyDataStoresByInvertedIndexQuery = {
  queryAmplifyDataStoresByInvertedIndex:  {
    __typename: "AmplifyDataStoreConnection",
    items:  Array< {
      __typename: "AmplifyDataStore",
      ds_pk: string,
      ds_sk: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryAmplifyDataStoresByDsPkIndexQueryVariables = {
  ds_pk: string,
  first?: number | null,
  after?: string | null,
};

export type QueryAmplifyDataStoresByDsPkIndexQuery = {
  queryAmplifyDataStoresByDsPkIndex:  {
    __typename: "AmplifyDataStoreConnection",
    items:  Array< {
      __typename: "AmplifyDataStore",
      ds_pk: string,
      ds_sk: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAmplifyDataStoreSubscriptionVariables = {
  ds_pk?: string | null,
  ds_sk?: string | null,
};

export type OnCreateAmplifyDataStoreSubscription = {
  onCreateAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type OnUpdateAmplifyDataStoreSubscriptionVariables = {
  ds_pk?: string | null,
  ds_sk?: string | null,
};

export type OnUpdateAmplifyDataStoreSubscription = {
  onUpdateAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};

export type OnDeleteAmplifyDataStoreSubscriptionVariables = {
  ds_pk?: string | null,
  ds_sk?: string | null,
};

export type OnDeleteAmplifyDataStoreSubscription = {
  onDeleteAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
  } | null,
};
