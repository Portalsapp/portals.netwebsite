import * as Linking from 'expo-linking';
import { PathConfigMap } from '@react-navigation/native';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Portals: {
        screens: {
          Portals: 'portals',
          Select: 'portals/select',
        },
      },
      Stuff: {
        screens: {
          Stuff: 'stuff',
        },
      },
      Discover: {
        screens: {
          Discover: 'discover',
        },
      },
      Settings: {
        screens: {
          Settings: 'settings',
        },
      },
      NotFound: '*',
    },
  },
};
