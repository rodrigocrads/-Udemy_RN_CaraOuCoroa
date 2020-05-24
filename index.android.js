/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';

import Roteamento from './src/Roteamento';

export default class app6 extends Component {
	render() {
		return <Roteamento />;
	}
}

AppRegistry.registerComponent('app6', () => app6);
