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



export type AuthStackParamList = {
  Login: undefined,
  CreateAccount: undefined,
}

export type MainTabNavigatorParamList = {
  Shop: undefined,
  Portals: undefined,
  Discover: undefined,
  Publisher: undefined,
}

// Navigation Restructure Types

export type AuthNavigatorParamList = {
  Login: undefined;
  CreateAccount: undefined;
};

export type MainStackNavigatorParamList = {
  MobileTabs: undefined,
  ProfileModal: undefined,
  CartModal: undefined,
  TradeModal: undefined,
}

export type MobileTabNavigatorParamList = {
  PortalsStack: undefined,
  HomeStack: undefined,
  BankStack: undefined,
  PublisherStack: undefined,
}

export type PortalsStackParamList = {
  Portals: undefined;
  PortalSelect: {
    title: string;
    data: Portal;
  };
  AddPortal: undefined;
};

export type HomeStackParamList = {
  Home: undefined,
}

export type BankStackParamList = {
  Bank: undefined,
}

export type PublisherStackParamList = {
  Publisher: undefined;
  ManagePortal: {
    data: Portal,
  };
  CreatePortal: undefined;
};

export type TradeModalStackParamList = {
  InitiateTrade: undefined,
  Trade: undefined,
}