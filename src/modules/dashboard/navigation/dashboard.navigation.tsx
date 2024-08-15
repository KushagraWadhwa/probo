/* eslint-disable react/react-in-jsx-scope */
import {Stack} from '../../../core-navigations/root.navigation';
import {Search, ProductCategories} from '../screens';

export default function DashboardStack() {
  const dashboardRoutes = [
    {
      name: 'productCategories',
      component: ProductCategories,
      screenID: 'PROD-CAT',
    },
    {
      name: 'search',
      component: Search,
      screenID: 'SRCH',
    },
  ];
  return (
    <Stack.Navigator initialRouteName={'productCategories'}>
      {dashboardRoutes?.map(route => {
        return (
          <Stack.Screen
            key={route?.screenID}
            name={route?.name}
            initialParams={{eventId: route?.screenID}}
            component={route?.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
