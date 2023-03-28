import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "./pages/Feed";
import Logo from './assets/instagram.png';

const Routes = createAppContainer(
  createStackNavigator({
    Feed,
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTitle: () => <Image source={Logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5',
      }
    }
  })
);

export default Routes;
