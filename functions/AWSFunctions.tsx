import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
/*@ts-ignore */
import awsconfig from '../aws-exports.js';
import gql from 'graphql-tag';
import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';
import * as subscriptions from '../src/graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';
import { Portal, BankHistory, TradeSession } from '../src/reducers/types.js';

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
        ds_pk: 'USER#' + username,
        ds_sk: '#METADATA#' + username,
      },
    })
    .then(
      /*@ts-ignore */
      ({ data: { getAmplifyDataStore } }) => {
        const items = getAmplifyDataStore;
        return items;
      }
    )
    .catch((err) => {
      console.log('Get User Metadata Error:', err);
    });
};

export const getUserPortalConnections = async (username: string) => {
  return await client
    .query({
      query: gql(queries.listEntityConnections),
      variables: {
        listEntityConnections: {
          ds_pk: 'USER#' + username,
          ds_sk: '#PORTAL_CONNECTION#',
        },
      },
      /*@ts-ignore*/
    })
    .then(({ data }) => {
      /*@ts-ignore*/
      const items = data.listEntityConnections.items;
      return items;
    });
};

export const userDataSubscription = async (username: string) => {
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
  return (
    client
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
      })
  );
};

export const createNewPortalMetadata = async (
  portalName: string,
  portalData: Portal
) => {
  return (
    client
      .mutate({
        mutation: gql(mutations.createNewPortalMetadata),
        variables: {
          ds_pk: 'ENTITY#' + portalName,
          ds_sk: '#METADATA' + portalName,
          ...portalData,
        },
      })
      /*@ts-ignore*/
      .then(({ data }) => {
        return data.createNewPortalMetadata;
      })
  );
};

export const getUserItems = async (username: string) => {
  return client
    .query({
      query: gql(queries.retrieveUserItems),
      variables: {
        invUID: username,
      },
    })
    .then(({ data }) => {
      /*@ts-ignore*/
      return data.retrieveUserInventory.items;
    });
};

export const getBankItems = async (username: string) => {
  return client
    .query({
      query: gql(queries.retrieveBankHistory),
      variables: {
        ds_pk: 'USER#' + username,
      },
    })
    .then(({ data }) => {
      return data.retrieveBankHistory.items as BankHistory[];
    });
};

export const getPortalBankHistory = async (portalName: string) => {
  return client.query({
    query: gql(queries.retrieveBankHistory),
    variables: {
      ds_pk: 'ENTITY#' + portalName,
    },
  })
  .then(({ data }) => {
    return data.retrieveBankHistory.items as BankHistory[];
  })
}

export const startTrade = async (username: string) => {
  return client
    .mutate({
      mutation: gql(mutations.startTrade),
      variables: {
        userId: username,
      },
    })
    .then(({ data }) => {
      return data.startTradeSession.code;
    });
};

export const updateTradeSession = async (
  userId: String,
  roomId: String,
  addItem?: String,
  removeItem?: String,
  accepted?: Boolean,
  reviewed?: Boolean,
  declined?: Boolean
) => {
  return client.mutate({
    mutation: gql(mutations.updateTrade),
    variables: {
      userId: userId,
      roomId: roomId!,
      addItem: addItem,
      removeItem: removeItem,
      accepted: accepted,
      reviewed: reviewed,
      declined: declined,
    },
  }).then(({ data }) => {
    return data.updateTradeSession as TradeSession;
  }).catch((error) => {
    console.log('Update trade error', error);
  });
};

export const retrieveGlobalFeed = async (userID: String) => {
  return client.query({
    query: gql(queries.retrieveGlobalFeed),
    variables: {
      userID: userID,
    },
  }).then(({ data }) => {
    return data.retrieveGobalFeed.items as BankHistory[];
  });
};