import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Panel from "../views/pages/Panel";
import Login from '../views/pages/Login';
import Profile from '../views/pages/Profile';
import Recargas from '../views/pages/Recargas';
import Register from '../views/pages/Register';
import EstadoCuenta from '../views/pages/EstadoCuenta';
import { Image } from "react-native";

const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 130, height: 50 }}
        source={require('../assets/img/logo.png')}
      />
    );
  }

const PanelNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Panel" component={Panel} options={{headerTitle: LogoTitle}}/>
        </Stack.Navigator>
    );
}
const RecargaNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Recargas" component={Recargas} options={{headerTitle: LogoTitle}}/>
        </Stack.Navigator>
    );
}
const LoginNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}
const profileNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerTitle: LogoTitle}}/>
        </Stack.Navigator>
    );
}
const RegisterNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}
const EstadoCuentaNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EstadoCuenta" component={EstadoCuenta} options={{headerTitle: LogoTitle}}/>
        </Stack.Navigator>
    );
}
 
export {PanelNavigations, RecargaNavigations, RegisterNavigations, LoginNavigations, profileNavigations, EstadoCuentaNavigations};