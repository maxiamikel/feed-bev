import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import MenuFeedBev from './MenuFeedBev'
import TipoNovidade from './TipoNovidade'

const novidadesItens = [
    {
        nomeProduto: 'SKOL',
        descrição: 'dsjkdfshjkfgfgffgdffsdsasdasdsdasaddsasfsdfdsfgfggffggfgfdfsdfsdfsfddfsfsddfsdfsjhdfsjkhjkdf',
        data:'22/08/2021',
        arquivo: 'opcoes.png',
        tipo:'LATA'        
    },

    {
        nomeProduto: 'Amikel',
        descrição: 'FJKHFDSJKFDJSKHJFKDSH',
        data:'23/08/2021',
        arquivo: 'opcoes.png',
        tipo:'GARRAFA'        
    },
    {
        nomeProduto: 'KAISER',
        descrição: 'FJKHFDSJKFDJSKHJFKDSH',
        data:'23/08/2021',
        arquivo: 'opcoes.png',
        tipo:'GARRAFA'        
    },
    {
        nomeProduto: 'KAISER',
        descrição: 'FJKHFDSJKFDJSKHJFKDSH',
        data:'23/08/2021',
        arquivo: 'opcoes.png',
        tipo:'GARRAFA'        
    },
    {
        nomeProduto: 'KAISER',
        descrição: 'FJKHFDSJKFDJSKHJFKDSH',
        data:'23/08/2021',
        arquivo: 'opcoes.png',
        tipo:'GARRAFA'        
    },    
    
]          
           

const listaNovidade = novidadesItens.map((e, index) => {
    return (
        <TipoNovidade 
            nomeProduto={e.nomeProduto}
            descrição={e.descrição}
            data={e.data} 
            file={e.arquivo}   
            tipo={e.tipo}        
            key={index}/> 
    )
})


const Novidade = () => {    
    return(
        <View>         
                
            <View>                        
                <View style={styles.tituloNovidade}>
                    <View style={styles.linha}></View>
                    <Text style={styles.tituloForm}>Novidades</Text>
                    <View style={styles.linha}></View>
                </View>
                {listaNovidade}   
            </View>
            <View>
                <Image style= {styles.background} source={require('../imagens/bg.png')} />                      
            </View>
        </View>
                        
                
                                      
            
    )
}

const styles = StyleSheet.create({     
    tituloForm: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 30,        
        marginBottom: 30                        
    },
     background: {             
        height: 100,
        width: 360,        
        opacity: 0.5,
        bottom: -10,
        borderTopLeftRadius: 40,
        borderTopRightRadius:90        
    },
    tituloNovidade: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 40
    },  
    linha: {
        backgroundColor:'#FFD561',
        opacity: 0.8,
        width:60,
        height: 2,
        marginLeft: 10,
        marginRight:10,
        shadowOffset:{height: 1, width:4},
        shadowColor:'black'        
    }           
        
           
        
})


export default Novidade;