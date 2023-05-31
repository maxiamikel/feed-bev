import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'


const TipoNovidade = ({nomeProduto, descrição, file, data, tipo}) => {   
    
    return (
        <View>            
            <View style={styles.campoTexto}>
                <View style={styles.quadrado}>
                    <Image style={styles.imagemProduto} source={require('../imagens/amstel.jpg')} />
                </View>
                    <View style={styles.quadradoTexto}>
                        <View>
                            <Text style={styles.textoProduto}>{nomeProduto}</Text>
                        </View>
                        <View>                           
                            <Text style={styles.tituloDescricao}>Tipo: {tipo}</Text>
                            <Text style={styles.tituloDescricao}>Descrição:</Text>
                            <Text style={styles.textoDescricao}>{descrição} </Text>                            
                        </View>                        
                    </View>
            </View>
                <View>
                    <Text style={styles.data}>{data}</Text>
                </View>                             
        </View>
                   
            
    )
}

const styles = StyleSheet.create({
    quadrado: {
        height: 110,
        width: 107,
        borderWidth: 1,
        marginLeft: 10           
        
    },
    imagemProduto: {        
        flex:1      
        
    },  
    campoTexto: {
        backgroundColor: '#FFD561',
        height: 75,               
        flexDirection:'row',                   
        borderRadius: 10,     
        alignItems:'center',
        margin: 20,       
        marginBottom: 50   
                            
    },    
    textoDescricao: {
        padding: 4,
        fontWeight: 'bold',
        fontSize: 10    
        
    },
    data: {
        fontSize: 11,
        fontWeight: 'bold',
        display:'flex',
        justifyContent:'flex-end',
        marginTop: -35,
        marginRight: 10       
             
    },
    textoProduto: {
        fontSize: 15,
        marginRight: 10,
        fontWeight: '700',
        color:'black',       
        textAlign:'right'      
                
    },
    quadradoTexto: {        
        height: 100, 
        width: 190,
        left: 120, 
        padding: 5,    
        backgroundColor:'#F5F7A4',      
        borderBottomRightRadius: 50,          
        margin: 10,
        shadowOffset:{width: 5, height:5},
        shadowColor:'black',
        shadowOpacity: 0.5 ,
        position:'absolute'
    },
    tituloDescricao: {
        fontWeight: '700',
        marginLeft: 5,
        fontSize: 10
    }
        
})

export default TipoNovidade;