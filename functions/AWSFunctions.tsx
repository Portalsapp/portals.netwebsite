import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
/*@ts-ignore */
import awsconfig from '../aws-exports.js';
import gql from 'graphql-tag';
import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';
import * as subscriptions from '../src/graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
});

export default client;

export const getUserMetadata = async(username: string) => {
  return await client
    .query({
      query: gql(queries.listAllUserMetadata),
      variables: {
        pk: 'USER#' + username,
        sk: '#METADATA#' + username,
      }
    })
    .then(
      /*@ts-ignore */
      ({ data: { listAllUserMetadata } }) => {
        const items = listAllUserMetadata.items;
        if (Array.isArray(items) && items.length > 0) {
          return items[0];
        }
      }
    );
}

export const getUserPortalConnections = async(username: string) => {
  // Query
  // return await client
  //   .query({
  //     query: gql(queries.listAllUserMetadata),
  //     variables: {
  //       pk: 'USER#' + username,
  //       sk: '#PORTAL_CONNECTION#',
  //     },
  //   })
  //   .then(
  //     /*@ts-ignore */
  //     ({ data: { listAllUserMetadata } }) => {
  //       const items = listAllUserMetadata.items;
  //       if (Array.isArray(items) && items.length > 0) {
  //         // Query for all entries with
  //       }
  //     }
  //   );
}

export const userDataSubscription = async(username: string) => {
  console.log('subscription');
  return client.subscribe({
    query: gql(subscriptions.onUpdateAmplifyDataStoreUserMetadata),
    variables: {
      ds_pk: 'USER#' + username,
      ds_sk: '#METADATA#' + username,
    },
  }).subscribe({
    next: (data) => { console.log('new data:', data); },
    error: (error) => { console.log('userDataSubscription Error:', error); }
  });
}