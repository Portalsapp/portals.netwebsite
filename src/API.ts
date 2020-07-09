/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
  displayName?: string | null,
};

export type UpdateAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
};

export type DeleteAmplifyDataStoreInput = {
  ds_pk: string,
  ds_sk: string,
};

export type UpdateAmplifyDataStoreUserMetadataInput = {
  ds_pk: string,
  ds_sk: string,
  displayName?: string | null,
  pic?: string | null,
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

export type AllUserMetadataFilterInput = {
  ds_pk?: TableStringFilterInput | null,
  ds_sk?: TableStringFilterInput | null,
};

export type SimpleFilterInput = {
  ds_pk?: TableStringFilterInput | null,
  ds_sk?: TableStringFilterInput | null,
};

export type CreateAmplifyDataStoreMutationVariables = {
  input: CreateAmplifyDataStoreInput,
};

export type CreateAmplifyDataStoreMutation = {
  createAmplifyDataStore:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
  } | null,
};

export type UpdateAmplifyDataStoreUserMetadataMutationVariables = {
  input: UpdateAmplifyDataStoreUserMetadataInput,
};

export type UpdateAmplifyDataStoreUserMetadataMutation = {
  updateAmplifyDataStoreUserMetadata:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
  } | null,
};

export type CreateNewUserMetadataMutationVariables = {
  input: UpdateAmplifyDataStoreUserMetadataInput,
};

export type CreateNewUserMetadataMutation = {
  createNewUserMetadata:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
      displayName: string | null,
      pic: string | null,
      stripeCustomerId: string | null,
      dateOfBirth: string | null,
      phone: string | null,
      email: string | null,
      uid: string | null,
      catalog: string | null,
      description: string | null,
      splashPic: string | null,
      colorTheme: string | null,
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
      displayName: string | null,
      pic: string | null,
      stripeCustomerId: string | null,
      dateOfBirth: string | null,
      phone: string | null,
      email: string | null,
      uid: string | null,
      catalog: string | null,
      description: string | null,
      splashPic: string | null,
      colorTheme: string | null,
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
      displayName: string | null,
      pic: string | null,
      stripeCustomerId: string | null,
      dateOfBirth: string | null,
      phone: string | null,
      email: string | null,
      uid: string | null,
      catalog: string | null,
      description: string | null,
      splashPic: string | null,
      colorTheme: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListAllUserMetadataQueryVariables = {
  filter?: AllUserMetadataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllUserMetadataQuery = {
  listAllUserMetadata:  {
    __typename: "AmplifyDataStoreConnection",
    items:  Array< {
      __typename: "AmplifyDataStore",
      ds_pk: string,
      ds_sk: string,
      displayName: string | null,
      pic: string | null,
      stripeCustomerId: string | null,
      dateOfBirth: string | null,
      phone: string | null,
      email: string | null,
      uid: string | null,
      catalog: string | null,
      description: string | null,
      splashPic: string | null,
      colorTheme: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListAllEntitiesQueryVariables = {
  filter?: SimpleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllEntitiesQuery = {
  listAllEntities:  {
    __typename: "AmplifyDataStoreConnection",
    items:  Array< {
      __typename: "AmplifyDataStore",
      ds_pk: string,
      ds_sk: string,
      displayName: string | null,
      pic: string | null,
      stripeCustomerId: string | null,
      dateOfBirth: string | null,
      phone: string | null,
      email: string | null,
      uid: string | null,
      catalog: string | null,
      description: string | null,
      splashPic: string | null,
      colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
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
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
  } | null,
};

export type OnUpdateAmplifyDataStoreUserMetadataSubscriptionVariables = {
  ds_pk: string,
  ds_sk: string,
};

export type OnUpdateAmplifyDataStoreUserMetadataSubscription = {
  onUpdateAmplifyDataStoreUserMetadata:  {
    __typename: "AmplifyDataStore",
    ds_pk: string,
    ds_sk: string,
    displayName: string | null,
    pic: string | null,
    stripeCustomerId: string | null,
    dateOfBirth: string | null,
    address:  {
      __typename: "Address",
      address1: string,
      address2: string | null,
      unit: string | null,
      city: string,
      state: string,
      zip: string,
      country: string | null,
    } | null,
    phone: string | null,
    email: string | null,
    uid: string | null,
    catalog: string | null,
    description: string | null,
    splashPic: string | null,
    colorTheme: string | null,
  } | null,
};
