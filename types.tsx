export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
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
  // Root: { title: string },
  Portals: undefined,
  Stuff: undefined,
  Discover: undefined,
  Settings: undefined,
  NotFound: undefined,
}

export type PortalsStackParamList = {
  Portals: undefined,
  Select: { title: string },
}

export type StuffStackParamList = {
  Stuff: undefined,
}

export type DiscoverStackParamList = {
  Discover: undefined,
}

export type SettingsStackParamList = {
  Settings: undefined,
}

export type AuthStackParamList = {
  Login: undefined,
}
