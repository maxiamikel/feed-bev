
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        titulo: {
            fontSize: 20,
            fontWeight:'bold',
            textAlign:'center',
            marginTop: -15
        },
        tipo: {
            height: 50,
            width: 250,
            right: 20,
            padding: 0
            
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
            marginRight: 10,
            shadowOffset:{height: 1, width:4},
            shadowColor:'black'        
        },
        campoImagem: {
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop: 40
        },
        quadrado: {
            height: 110,
            width: 107,
            borderWidth: 1,
            marginLeft: 10           
        },
        formNovidade: {
            marginTop: 20,
            width:340,
            alignSelf:'center',
            backgroundColor:'#ECEAEA',        
            padding: 30,
            borderBottomEndRadius: 25,
            borderRadius: 15,
            shadowOffset:{width: 5, height: 5},
            shadowColor:'black',
            shadowOpacity: 0.4
           
        } ,
        campoNovidade: {      
            marginBottom: 10, 
            height: 40           
        },    
        btnText:{
            fontSize: 12,
            textTransform:'capitalize',
            fontWeight:'bold'
        },
        textImage: {
            fontSize: 15,
            fontWeight:'bold'
        },
        background: {             
            height: 120,
            width:  500,
            position: 'absolute',
            bottom: -110,
            opacity: 0.5,
            borderTopLeftRadius: 40,
            borderTopRightRadius:90            
        },
        textAreaContainer: {
            padding: 5
          }           
   
})



