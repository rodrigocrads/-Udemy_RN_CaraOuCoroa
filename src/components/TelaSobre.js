import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

export default class TelaSobre extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View>
					<Text>Este jogo tem como intuido ajudar aos participante a tomar a decisão pela sorte.</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#61BD8C',
	},
});
