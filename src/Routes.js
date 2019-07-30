import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import {Router, Stack, Scene } from 'react-native-router-flux';

import App from '../App';
import Inicio from './componenents/Inicio';
import Camara from './componenents/Camara';

const MenuIcon = () => {
	return (
		<Icon name="menu" size={30} color="black" />
	)
}


export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar = {true}>
                  <Scene type="reset" key="inicio" component={Inicio}  title="inicio"  initial={true}  />
                  <Scene key="camara" component={Camara} title="camara" hideNavBar={false}   />
                </Scene>
            </Router>
        )
    }
}

