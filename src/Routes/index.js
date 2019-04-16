import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingComponent from '../Components/LandingComponent';
import RegisterComponent from '../Components/RegisterComponent';
import LoginComponent from '../Components/LoginComponent';



const Route = createStackNavigator(
    {

        RegisterComponent: RegisterComponent,
        LoginComponent: LoginComponent,
        LandingComponent: LandingComponent,


    },
    {
        initialRouteName: "LandingComponent"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;