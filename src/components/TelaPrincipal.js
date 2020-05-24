import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../../imgs/logo.png');
const btnJogar = require('../../imgs/botao_jogar.png');
const btnSobreJogo = require('../../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../../imgs/outros_jogos.png');

export default class TelaPrincipal extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.areaLogo }>
					<Image source={ logo } />
				</View>

				<View style={ styles.areaBtnJogar }>
					<TouchableHighlight
						onPress={() => Actions.resultado() }
					>
						<Image source={ btnJogar } />
					</TouchableHighlight>
				</View>

				<View style={ styles.rodape }>
					<TouchableHighlight
						onPress={() => Actions.sobre() }
					>
						<Image source={ btnSobreJogo } />
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => Actions.outrosjogos() }
					>
						<Image source={ btnOutrosJogos } />
					</TouchableHighlight>
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
	areaLogo: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	areaBtnJogar: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 40,
	},
	rodape: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
