import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import CadastroNovidade from './components/CadastroNovidade';
import CadastroPessoa from './components/CadastroPessoa';
import MenuFeedBev from './components/MenuFeedBev';

import Novidade from './components/Novidade';
import Publicacao from './components/Publicacao';
import TipoNovidade from './components/TipoNovidade';
import Upload from './components/Upload';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <MenuFeedBev/>
        <ScrollView>
          <View >
            <CadastroNovidade/> 
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
});
