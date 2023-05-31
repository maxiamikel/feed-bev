import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'


const MenuFeedBev = () => {
    return(
        <View>
            <View style={styles.barraDeMenu}>
                <TouchableOpacity>
                    <Image style={styles.opcoes} source={require('../imagens/opcoes.png')} />
                </TouchableOpacity>
                    <Text style={styles.titulo}>FeedBev</Text>                    
                    <Image style={styles.logo} source={require('../imagens/logo-feedBev.png')} />                  
                </View>
        </View>
    )
}

const styles= StyleSheet.create({
    barraDeMenu :{
        backgroundColor: "#FFD561",        
        height: 45,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'       
    },
    logo: {
        height:40,
        width:40,
       
    },
    opcoes: {
        height: 40,
        width: 40,        
    },
    titulo: {
        fontSize: 25,
        fontWeight:'bold',
        color:'#ffffff'     
        
    },
})

export default MenuFeedBev;