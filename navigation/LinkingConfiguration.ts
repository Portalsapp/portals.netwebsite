import * as Linking from 'expo-linking';
import { PathConfigMap } from '@react-navigation/native';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
        Login: 'login',
        Root: {
          screens: {
        Portals: {
          screens: {
            Portals: 'portals',
            Select: 'portals/select',
          },
        },
        Stuff: {
          screens: {
            Stuff: 'stuff',
            Trading: 'stuff/trade',
          },
        },
        Discover: {
          screens: {
            Discover: 'discover',
          },
        },
        Shop: {
          screens: {
            Shop: 'shop',
          }
        },
        Settings: {
          screens: {
            Settings: 'settings',
          },
        },
        NotFound: '*',
      },
      }
    }
  },
};
