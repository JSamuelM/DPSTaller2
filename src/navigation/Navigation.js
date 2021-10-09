import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sum from '../screens/SumScreen';
import Subtraction from '../screens/SubtractionScreen';
import Multiplication from '../screens/MultiplicationScreen';
import Division from '../screens/DivisionScreen';
import Factorial from '../screens/FactorialScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Sum"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Sum') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Subtraction') {
            iconName = focused ? 'remove-circle' : 'remove-circle-outline';
          } else if (route.name === 'Multiplication') {
            iconName = focused ? 'close-circle' : 'close-circle-outline';
          } else if (route.name === 'Division') {
            iconName = focused ? 'eye-off' : 'eye-off-outline';
          } else if (route.name === 'Factorial') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Sum" component={Sum} options={{title: 'Suma'}} />
      <Tab.Screen
        name="Subtraction"
        component={Subtraction}
        options={{title: 'Resta'}}
      />
      <Tab.Screen
        name="Multiplication"
        component={Multiplication}
        options={{title: 'Multiplicación'}}
      />
      <Tab.Screen
        name="Division"
        component={Division}
        options={{title: 'División'}}
      />
      <Tab.Screen
        name="Factorial"
        component={Factorial}
        options={{title: 'Factorial'}}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
