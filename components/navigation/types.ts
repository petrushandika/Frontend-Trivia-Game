import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  AvatarModal: undefined;
  DiamondShop: undefined;
  // Tambahkan screen lain di sini jika ada
};

export type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "AvatarModal"
>;
