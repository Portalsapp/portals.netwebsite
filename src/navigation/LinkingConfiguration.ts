import * as Linking from 'expo-linking';
import { PathConfigMap } from '@react-navigation/native';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: '',
      Privacy: 'privacy',
      Support: 'support',
      AASA: '.well-known/apple-app-site-association'
      // Login: 'login',
      // Main: {
      //   screens: {
      //     Portals: {
      //       screens: {
      //         Portals: 'portals',
      //         Select: 'portals/select',
      //       },
      //     },
      //     Stuff: {
      //       screens: {
      //         Stuff: 'stuff',
      //         Trading: 'stuff/trade',
      //       },
      //     },
      //     Discover: {
      //       screens: {
      //         Discover: 'discover',
      //       },
      //     },
      //     Shop: {
      //       screens: {
      //         Shop: 'shop',
      //       }
      //     },
      //     Publisher: {
      //       screens: {
      //         Publisher: 'publisher',
      //         CreatePortal: 'publisher/create_portal',
      //         ManagePortal: 'publisher/manage_portal',
      //       },
      //     },
      //     Settings: {
      //       screens: {
      //         Settings: 'settings',
      //       },
      //     },
      //     NotFound: '*',
      //   },
      // },
    }
  },
};
