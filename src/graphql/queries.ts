/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmplifyDataStore = /* GraphQL */ `
  query GetAmplifyDataStore($ds_pk: String!, $ds_sk: String!) {
    getAmplifyDataStore(ds_pk: $ds_pk, ds_sk: $ds_sk) {
      ds_pk
      ds_sk
      displayName
      pic
      stripeCustomerId
      dateOfBirth
      address {
        address1
        address2
        unit
        city
        state
        zip
        country
      }
      phone
      email
      uid
      catalog
      description
      splashPic
      colorTheme
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
        displayName
        pic
        stripeCustomerId
        dateOfBirth
        phone
        email
        uid
        catalog
        description
        splashPic
        colorTheme
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
        displayName
        pic
        stripeCustomerId
        dateOfBirth
        phone
        email
        uid
        catalog
        description
        splashPic
        colorTheme
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
        displayName
        pic
        stripeCustomerId
        dateOfBirth
        phone
        email
        uid
        catalog
        description
        splashPic
        colorTheme
      }
      nextToken
    }
  }
`;
export const listAllUserMetadata = /* GraphQL */ `
  query listAllUserMetadata($pk:String!, $sk:String!) {
    listAllUserMetadata(
      filter: {
        ds_pk: {
          contains: $pk
        }
        ds_sk: {
          contains: $sk
        }
      }
    ) {
      items {
        ds_pk
        ds_sk
        displayName
        pic
      }
    }
  }
`;
export const listAllEntities = /* GraphQL */ `
  query ListAllEntities(
    $filter: SimpleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllEntities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ds_pk
        ds_sk
        displayName
        pic
        stripeCustomerId
        dateOfBirth
        phone
        email
        uid
        catalog
        description
        splashPic
        colorTheme
      }
      nextToken
    }
  }
`;

export const getPortalMetadata = /* GraphQL */ `
  query getPortalMetadata($getPortalMetadataInput: PortalMetadataInput) {
    getPortalMetadata(
      input: $getPortalMetadataInput
    ) {
      ds_pk
      ds_sk
      displayName
      pic
      stripeCustomerId
      dateOfBirth
      address {
        address1
        address2
        unit
        city
        state
        zip
        country
      }
      phone
      email
      uid
      catalog
      description
      splashPic
      colorTheme
    }
  }
`

export const listEntityConnections = /* GraphQL */ `
  query listEntityConnections($listEntityConnections: PKSKInput) {
    listEntityConnections(input: $listEntityConnections) {
      items {
        ds_pk
        ds_sk	displayName
        pic
        stripeCustomerId
        dateOfBirth
        address {
          address1
          address2
          unit
          city
          state
          zip
          country
        }
        phone
        email
        uid
        catalog
        description
        splashPic
        colorTheme
      }
    }
  }
`

export const retrieveUserItems = /* GraphQL */ `
  query retrieveUserInventory($invUID: String!) {
    retrieveUserInventory(
      userId: $invUID
    ) {
      items {
      ds_pk
      displayName
      pic
      uid
      description
      splashPic
      colorTheme
      }
    }
  }
`;

export const retrieveBankHistory = /* GraphWL */ `
  query retrieveBankHistory($ds_pk: String!) {
    retrieveBankHistory(partyId: $ds_pk) {
      items {
        to {
          ds_pk
          displayName
          pic
        }
        from {
          ds_pk
          displayName
          pic
        }
        createdAt
        item {
          ds_pk
          displayName
          pic
        }
      }
    }
  }
`