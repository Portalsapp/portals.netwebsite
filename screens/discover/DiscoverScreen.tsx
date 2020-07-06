import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from '../../components/header/HeaderContainer';
import DiscoverGroup from '../../components/discover_group/DiscoverGroup'
import style from './DiscoverStyle';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import gql from 'graphql-tag';
import client from '../../functions/AWSFunctions';

const data: {
  title: string;
  count: number;
}[] = [
  {
    title: 'Featured Portals',
    count: 5,
  },
  {
    title: 'You May Like',
    count: 5,
  },
  {
    title: 'Entertainment',
    count: 4,
  },
];

// async function SignIn() {
//   try {
//     const user = await Auth.signIn('testuser1', 'password');
//     console.log('signed in', user);
//     const temp = await Auth.currentSession();
//     console.log(temp);
//   } catch (error) {
//     console.log('error signing in', error);
//   }
// }

export default function DiscoverScreen() {
  /*@ts-ignore */
  // await SignIn();
  // console.log(await Auth.currentSession())
  // const todos = await API.graphql({
  //   query: queries.listAmplifyDataStoreI3fbvvtyknhvzhn6pkkmc3vyomDevs,
  //   /*@ts-ignore*/
  //   authMode: 'AMAZON_COGNITO_USER_POOLS',
  // });
  return (
    <View style={style.container}>
      <Header />
      <View style={style.searchContainer}>
        <TouchableOpacity>
          <View style={style.searchWrapper}>
            <Image
              source={require('../../assets/images/search.png')}
              style={style.searchImage}
            />
            <Text style={style.searchText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.categoryContainer}>
        {data.map((elem) => 
          <DiscoverGroup 
            title={elem.title}
            count={elem.count}
          />
        )}
      </View>
    </View>
  );
}
