/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import TelaPrincipal from './components/TelaPrincipal';
import TelaOutrosJogos from './components/TelaOutrosJogos';
import TelaSobre from './components/TelaSobre';
import TelaResultado from './components/TelaResultado';

const Roteamento = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key="principal" component={TelaPrincipal} initial title="Cara ou Coroa" />
        <Scene key="outrosjogos" component={TelaOutrosJogos} title="Outros Jogos" />
        <Scene key="sobre" component={TelaSobre} title="Sobre o Jogo" />
        <Scene key="resultado" component={TelaResultado} title="Resultado" />
    </Router>
);

export default Roteamento;
