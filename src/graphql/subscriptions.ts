/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAmplifyDataStore = /* GraphQL */ `
  subscription OnCreateAmplifyDataStore($ds_pk: String, $ds_sk: String) {
    onCreateAmplifyDataStore(ds_pk: $ds_pk, ds_sk: $ds_sk) {
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
export const onUpdateAmplifyDataStore = /* GraphQL */ `
  subscription OnUpdateAmplifyDataStore($ds_pk: String, $ds_sk: String) {
    onUpdateAmplifyDataStore(ds_pk: $ds_pk, ds_sk: $ds_sk) {
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
export const onDeleteAmplifyDataStore = /* GraphQL */ `
  subscription OnDeleteAmplifyDataStore($ds_pk: String, $ds_sk: String) {
    onDeleteAmplifyDataStore(ds_pk: $ds_pk, ds_sk: $ds_sk) {
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
export const onUpdateAmplifyDataStoreUserMetadata = /* GraphQL */ `
  subscription OnUpdateAmplifyDataStoreUserMetadata(
    $ds_pk: String!
    $ds_sk: String!
  ) {
    onUpdateAmplifyDataStoreUserMetadata(ds_pk: $ds_pk, ds_sk: $ds_sk) {
      ds_pk
      ds_sk
      displayName
      pic
    }
  }
`;
