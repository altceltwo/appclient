import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'
import {PanelNavigations} from './StackNavigation'
import {RecargaNavigations} from './StackNavigation'
import {profileNavigations} from './StackNavigation'
import {EstadoCuentaNavigations} from './StackNavigation'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Panel') {
                iconName = focused ? 'home' : 'home';

              } else if (route.name === 'EstadoCuenta') {
                iconName = focused ? 'file-text' : 'file-text';
              }else if (route.name === 'Recargas') {
                iconName = focused ? 'money' : 'money';
              }else if (route.name === 'profile') {
                iconName = focused ? 'user' : 'user';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#4923F5',
            headerShown: false
          })}>
            <Tab.Screen name="Panel" component={PanelNavigations} options={{title:'Inicio'}}/>
            <Tab.Screen name="Recargas" component={RecargaNavigations} options={{title:'Recargas'}}/>
            <Tab.Screen name="EstadoCuenta" component={EstadoCuentaNavigations} options={{title:'Estado de Cuenta'}}/>
            <Tab.Screen name="profile" component={profileNavigations} options={{title:'Perfil'}}/>
        </Tab.Navigator>
    );
}
 
export default BottomTab;