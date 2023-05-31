import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    barraDeMenu :{
        backgroundColor: "#FFD561",        
        height: 55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'       
    },
    titulo: {
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: -15
    },
    barraTitulo:{
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        alignItems:"center",
        padding:  10,
        height: 100

    },
    barraDireita:{
        width: 50,
        height: 3,
        left: 14,
        backgroundColor: "#FFD561"
    },
    BarraEzquerda:{
        width: 50,
        height: 3,
        right: 14,
        backgroundColor: "#FFD561"
    },
    menuEditar:{
        alignItems:'flex-end',
        backgroundColor:"#FFFFFF",
        alignContent:"space-between"
    },
    logoPublicacao:{
        width: 30,
        height: 30,
        left: 290

    },
    publicacaoConteudo:{
        backgroundColor: "#FFD561",
        borderRadius: 10,
        padding: 10,
        marginTop: 8,
        marginLeft: 22,
        marginRight: 22,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    barraVertical:{
        backgroundColor:"#000000",
        width: 3,
        height: 100,
        marginRight: 12

    },
    perfilPublicacao:{
        width: 45,
        flexDirection:"column",
        marginRight: 12
    },
    textoPublicacao:{
        width: 230,
        padding: 4,
        height:"auto",
        marginLeft: 2,
    

    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 20
    },
    data:{
        fontSize: 12,
        color:"#666",
        marginTop: 10
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color:"#ffffff"         
    },

     form: {
        alignItems:'center',
        margin: 40,
        
    }, 
    tituloForm: {
        fontSize: 35,
        fontWeight:'bold'
    },
    campoTexto: {
        width: 300,        
        marginTop: 30
    },
    campo: {
        marginBottom: 10, 
        height: 40   
    },
    campoDDD: {
        marginBottom: 10, 
        width: 70,
        height: 40,
        marginRight: 8     
    },
    botao: {
        borderWidth: 2,
        borderRadius: 8
    },
    telefone: {
        flexDirection:'row'
    },
    logo: {
        height:55,
        width: 55       
    },
    opcoes: {
        height:55,
        width: 55        
    },
    background: {
        height: 120,
        width: 500,
        position: 'absolute',
        bottom: -80,
        opacity: 0.5
    },
    tituloForm: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: -30,        
        marginBottom: 30                       
    },
     background: {             
        height: 100,
        width: 400,        
        opacity: 0.5,
        bottom: -10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 90        
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
    }           
    
})
