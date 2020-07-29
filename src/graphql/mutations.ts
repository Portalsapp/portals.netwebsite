/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmplifyDataStore = /* GraphQL */ `
  mutation CreateAmplifyDataStore($input: CreateAmplifyDataStoreInput!) {
    createAmplifyDataStore(input: $input) {
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
export const updateAmplifyDataStore = /* GraphQL */ `
  mutation UpdateAmplifyDataStore($input: UpdateAmplifyDataStoreInput!) {
    updateAmplifyDataStore(input: $input) {
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
export const deleteAmplifyDataStore = /* GraphQL */ `
  mutation DeleteAmplifyDataStore($input: DeleteAmplifyDataStoreInput!) {
    deleteAmplifyDataStore(input: $input) {
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
export const updateAmplifyDataStoreUserMetadata = /* GraphQL */ `
  mutation UpdateAmplifyDataStoreUserMetadata(
    $input: UpdateAmplifyDataStoreUserMetadataInput!
  ) {
    updateAmplifyDataStoreUserMetadata(input: $input) {
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
export const createNewUserMetadata = /* GraphQL */ `
  mutation CreateNewUserMetadata(
    $input: UpdateAmplifyDataStoreUserMetadataInput!
  ) {
    createNewUserMetadata(input: $input) {
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

export const createNewPortalMetadata = /* GraphQL */ `
  mutation createNewPortalMetadata($createNewPortalMetadata: CreatePortalMetadata) {
    createNewPortalMetadata (input: $createNewPortalMetadata) {
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

export const startTrade = /* GraphQL */ `
  mutation startTrade($userId: String! $invite: String $code: String) {
    startTradeSession(
      userId: $userId
      invite: $invite
      code: $code
    ) {
      code
    }
  }
`

export const  updateTrade = /* GraphQL */ `
  mutation updateTrade(
    $userId: String!,
		$roomId: String!,
		$addItem: String,
		$removeItem: String,
		$accepted: Boolean,
		$reviewed: Boolean,
		$declined: Boolean
  ) {
    updateTradeSession(
      userId: $userId
      roomId: $roomId
      addItem: $addItem
      removeItem: $removeItem
      accepted: $accepted
      reviewed: $reviewed
      declined: $declined
    ) {
      id
      createdAt
      user1
      user2
      items1
      items2
      accepted1
      accepted2
      reviewed1
      reviewed2
      completed
      declined
      error
    }
  }
`