/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardStack from '../modules/dashboard/navigation/dashboard.navigation';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LocalSvg} from 'react-native-svg/css';

export const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Product">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LocalSvg asset={require('../../assets/orders.svg')} />
          ),
        }}
        name="Home"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LocalSvg asset={require('../../assets/orders.svg')} />
          ),
        }}
        name="Search"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LocalSvg asset={require('../../assets/inventory.svg')} />
          ),
        }}
        name="Sports"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LocalSvg asset={require('../../assets/currencyRupee.svg')} />
          ),
        }}
        name="Portfolio"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LocalSvg asset={require('../../assets/person.svg')} />
          ),
        }}
        name="Wallet"
        component={DashboardStack}
      />
    </Tab.Navigator>
  );
};

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'dashboardStack'}>
        <Stack.Screen
          name={'MyTabs'}
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
