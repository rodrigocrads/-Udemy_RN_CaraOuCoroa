import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

export default class TelaOutrosJogos extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text>- OutroJogo1</Text>
				<Text>- OutroJogo2</Text>
				<Text>- OutroJogo3</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#61BD8C',
	}
});
