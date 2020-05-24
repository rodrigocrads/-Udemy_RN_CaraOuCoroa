import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';

const ImagePathCara = require('../../imgs/moeda_cara.png');
const ImagePathCoroa = require('../../imgs/moeda_coroa.png');

const CARA = 'CARA';
const COROA = 'COROA';

export default class TelaResultado extends Component {
	constructor(props) {
		super(props);
		this.state = { resultado : '' };
	}

	componentWillMount() {
		const numAleatorio = Math.floor(Math.random() * 2);
		let resultado = numAleatorio === 0 ? CARA : COROA;

		this.setState({ resultado });
	}

	caraOuCoroa() {
		if (this.state.resultado === CARA) return <Image source={ ImagePathCara } />;
		if (this.state.resultado === COROA) return <Image source={ ImagePathCoroa } />;
	}

	render() {
		return (
			<View style={ styles.container }>
				{ this.caraOuCoroa() }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#61BD8C',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
