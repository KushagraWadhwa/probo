/* eslint-disable react/react-in-jsx-scope */
import {Stack} from '../../../core-navigations/root.navigation';
import {Event, ProductCategories} from '../screens';

export default function DashboardStack() {
  const dashboardRoutes = [
    {
      name: 'productCategories',
      component: ProductCategories,
      screenID: 'PROD-CAT',
    },
    {
      name: 'event',
      component: Event,
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
