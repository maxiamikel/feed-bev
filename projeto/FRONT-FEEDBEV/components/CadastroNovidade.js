import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, Platform, ScrollView, ImageComponent } from 'react-native'
import axios from 'axios'
import { TextInput, Drawer, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const CadastroNovidade = () => {
    const [text, setText] = React.useState('');
    const [active, setActive] = React.useState('');

    const [image, setImage] = useState({                
                url: "",
                height: 0,
                with: 0
    })    
        
    const salvarArquivo = async () => {
       const result = await axios.post("http://localhost:8080/api/arquivo",image);      
              
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);   

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1         

        });
    
        console.log(result);
    
        if (!result.cancelled) {    
            
            const novaImagem = {
                url: result.uri,
                height: result.height,
                width: result.width 
            }
            setImage(novaImagem)         
       
        }     
    };  
    return (                             
        <View>                  
            <View>              
                <View style={styles.tituloNovidade}>
                    <View style={styles.linha}></View>
                    <Text style={styles.titulo}>Cadastrar Novidade</Text>
                    <View style={styles.linha}></View>
                </View>
                <View>
                    <Image source={{uri: image.url ? image.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjWusJn8XDoU0w-5iKva9FTiW7GybI81F1A&usqp=CAU" }}
                        style={styles.avatar}
                    />
                </View>
                <View>
                    <View style={styles.campoImagem}>                     
                        
                            <Button style={{marginRight: 10}} color="#FFD561" mode="contained" onPress={pickImage}>
                                <Text style={styles.btnText}>Escolher Imagem</Text>
                            </Button>                  
                            <Button color="#898989"  mode="contained" onPress={salvarArquivo}>
                                <Text style={styles.btnText}>Salvar Imagem</Text>
                            </Button>            
                        
                     </View>
                     <View style={styles.formNovidade}>
                        <TextInput style={styles.campoNovidade}
                            label="descrição"
                            mode="outlined"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                        <TextInput style={styles.campoNovidade}
                            label="Nome do produto"
                            mode="outlined"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                            <Drawer.Section title="Tipo Embalagem">
                            <Drawer.Item
                                label="LATA"
                                active={active === 'LATA'}                        
                                onPress={() => setActive('LATA')}
                            />
                            <Drawer.Item
                                label="GARRAFA"
                                active={active === 'GARRAFA'}
                                onPress={() => setActive('GARRAFA')}
                            />
                            <Drawer.Item
                                label="PET"
                                active={active === 'PET'}
                                onPress={() => setActive('PET')}
                            />
                        </Drawer.Section>             
                        <TextInput style={styles.campoNovidade}
                            label="Descrição do produto"
                            mode="outlined"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                         <Button  mode="contained" color="#FFD561"  onPress={() => console.log('Pressed')}>
                            Cadastrar
                        </Button>
                     </View>
                </View>
            </View> 
            <View>
                <Image style= {styles.background} source={require('../imagens/bg.png')} />                      
            </View>           
        </View>                        
    )
}

const styles = StyleSheet.create({    
    titulo: {
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:-15
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
        marginTop: 20,
        justifyContent:'center'              
    },
    quadrado: {
        height: 110,
        width: 107,
        borderWidth: 1,
        marginLeft:'10px'           
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
        width: 400,
        alignSelf:'center',           
        opacity: 0.5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40            
        
    },
    avatar: {
        height: 220,
        width: 220,
        alignSelf:'center',
        marginTop: 20
       
           
    },
    btnArquivo: {
        flexDirection: 'row',
        justifyContent:'space-around'
    }
        
})

export default CadastroNovidade;