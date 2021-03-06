import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
   Home: { screen: Main, },
   Product: { screen: Product, },
});

export default createAppContainer(AppNavigator);