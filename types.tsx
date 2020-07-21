import { Portal } from "./src/reducers/types";

export type RootStackParamList = {
  Main: undefined;
  Modal: undefined;
};

export type BottomTabParamList = {
  Stuff: undefined;
  Portals: undefined;
  Discover: undefined;
};

export type TabOneParamList = {
  Stuff: undefined;
};

export type TabTwoParamList = {
  Portals: undefined,
  Select: { title: string },
};

export type TabThreeParamList = {
  Discover: undefined;
}

export type MainTabParams = {
  Stuff: undefined;
  Portals: undefined;
  Discover: undefined;
};

export type RootDrawerParamList = {
  Portals: undefined,
  Stuff: undefined,
  Discover: undefined,
  Shop: undefined,
  Settings: undefined,
  NotFound: undefined,
  Publisher: undefined,
}

export type PortalsStackParamList = {
  Portals: undefined,
  Select: {
    title: string,
    data: Portal,
  },
  AddPortal: undefined,
  Settings: undefined,
}

export type StuffStackParamList = {
  Stuff: undefined,
  Trade: undefined,
}

export type DiscoverStackParamList = {
  Discover: undefined,
}

export type SettingsStackParamList = {
  Settings: undefined,
}

export type ShopStackParamList = {
  Shop: undefined,
  InitiateTrade: undefined,
  Trade: {
    title: string,
  }
  History: undefined,
};

export type PublisherStackParamList = {
  Publisher: undefined,
  CreatePortal: undefined,
  ManagePortal: undefined,
}

export type AuthStackParamList = {
  Login: undefined,
  CreateAccount: undefined,
}

export type MainTabNavigatorParamList = {
  Shop: undefined,
  Portals: undefined,
  Discover: undefined,
}