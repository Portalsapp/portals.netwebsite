import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
/*@ts-ignore */
import awsconfig from '../aws-exports.js';
import gql from 'graphql-tag';
import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';
import * as subscriptions from '../src/graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';
import { Portal, BankHistory } from '../src/reducers/types.js';

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
  disableOffline: true,
});

export default client;

export const getUserMetadata = async (username: string) => {
  return await client
    .query({
      query: gql(queries.listAllUserMetadata),
      variables: {
        pk: 'USER#' + username,
        sk: '#METADATA#' + username,
      },
    })
    .then(
      /*@ts-ignore */
      ({ data: { listAllUserMetadata } }) => {
        const items = listAllUserMetadata.items;
        if (Array.isArray(items) && items.length > 0) {
          return items[0];
        }
      }
    ).catch((err) => {
      console.log('Get User Metadata Error:', err);
    });
};

export const getUserPortalConnections = async (username: string) => {
  return await client.query({
    query: gql(queries.listEntityConnections),
    variables: {
      listEntityConnections: {
        ds_pk: 'USER#' + username,
        ds_sk: '#PORTAL_CONNECTION#',
      }
    },
  /*@ts-ignore*/
  }).then(({ data }) => {
    /*@ts-ignore*/
    const items = data.listEntityConnections.items;
    return items;
  });
};

export const userDataSubscription = async (username: string) => {
  console.log('subscription');
  return client
    .subscribe({
      query: gql(subscriptions.onUpdateAmplifyDataStoreUserMetadata),
      variables: {
        ds_pk: 'USER#' + username,
        ds_sk: '#METADATA#' + username,
      },
    })
    .subscribe({
      next: (data) => {
        console.log('new data:', data);
      },
      error: (error) => {
        console.log('userDataSubscription Error:', error);
      },
    });
};

export const getPortalMetadata = async (portalName: string) => {
  return client
    .query({
      query: gql(queries.getPortalMetadata),
      variables: {
        ds_pk: 'ENTITY#' + portalName,
        ds_sk: '#METADATA#' + portalName,
      },
    })
    /*@ts-ignore*/
    .then(({ data: { getPortalMetadata } }) => {
      return { ...getPortalMetadata };
    });
};

export const createNewPortalMetadata = async (portalName: string, portalData: Portal) => {
  return client.mutate({
    mutation: gql(mutations.createNewPortalMetadata),
    variables: {
      ds_pk: 'ENTITY#' + portalName,
      ds_sk: '#METADATA' + portalName,
      ...portalData
    },
  })
  /*@ts-ignore*/
  .then(({ data }) => {
    return data.createNewPortalMetadata;
  })
}

export const getUserItems = async (username: string) => {
  return client.query({
    query: gql(queries.retrieveUserItems),
    variables: {
      invUID: username,
    },
  })
  .then(({ data }) => {
    /*@ts-ignore*/
    return data.retrieveUserInventory.items;
  })
  ;
}

export const getBankItems = async (username: string) => {
  return client.query({
    query: gql(queries.retrieveBankHistory),
    variables: {
      ds_pk: 'USER#' + username,
    },
  })
  .then(({ data }) => {
    return data.retrieveBankHistory.items as BankHistory[];
  });
}