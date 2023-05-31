import React, {useState} from 'react'
import { View, StyleSheet, Text, Image, Alert } from 'react-native'
import { TextInput, Button, Drawer, HelperText } from 'react-native-paper';
import axios from 'axios';
import MenuFeedBev from './MenuFeedBev';

const CadastroPessoa = () => {

    const salvarCadastro = async () => {
        const response = await axios.post("http://localhost:8080/api/pessoa",pessoa);
    } 
    
    function validarCnpj(val) {
        if (val.length == 18) {
            var cnpj = val.trim();
    
            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', '');
            cnpj = cnpj.split('');
    
            var v1 = 0;
            var v2 = 0;
            var aux = false;
    
            for (var i = 1; cnpj.length > i; i++) {
                if (cnpj[i - 1] != cnpj[i]) {
                    aux = true;
                }
            }
    
            if (aux == false) {
                return false;
            }
    
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v1 += cnpj[i] * p1;
                } else {
                    v1 += cnpj[i] * p2;
                }
            }
    
            v1 = (v1 % 11);
    
            if (v1 < 2) {
                v1 = 0;
            } else {
                v1 = (11 - v1);
            }    
            if (v1 != cnpj[12]) {
                return false;
            }    
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v2 += cnpj[i] * p1;
                } else {
                    v2 += cnpj[i] * p2;
                }
            }
    
            v2 = (v2 % 11);
    
            if (v2 < 2) {
                v2 = 0;
            } else {
                v2 = (11 - v2);
            }
    
            if (v2 != cnpj[13]) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }  
    
    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
           
 
   const hasErrors = () => {
     return !validarEmail(pessoa.email);
        
   };
   const hasErrors1 = () => {
     return !validarCnpj(pessoa.cnpj);          
   };
                
    
    const [active, setActive] = React.useState('');
  
    const [pessoa, setPessoa] = useState({
        razaoSocial:'',
        tipo:'',
        cnpj:'',
        ddd: 0,
        numero:'',
        email:'',
        senha: ''
    });    
    

    const handleInputChange = (value, target) => {
        const novaPessoa = {
            ...pessoa,
            [target] : value
        } 
        console.log(novaPessoa);       
        setPessoa(novaPessoa);
    } 
            
    return (
        <View>                
                                
            <View>                 
                 <Image style= {styles.background} source={require('../imagens/bg.png')} />                          
                                       
                <View style={styles.form}>
                     <View style={styles.tituloCadastro}>
                         <View style={styles.linha}></View>
                        <Text style={styles.tituloForm}>Cadastro</Text>
                         <View style={styles.linha}></View>
                     </View>
                    <View style={styles.campoTexto}>                    
                    <Drawer.Section title="Tipo Pessoa Jurídica">
                    <Drawer.Item
                        label="AMBEV"
                        active={active === 'AMBEV' ? pessoa.tipo = "AMBEV": false}                        
                        onPress={() => setActive('AMBEV')}
                    />
                    <Drawer.Item
                        label="CLIENTE"
                        active={active === 'CLIENTE' ? pessoa.tipo = "CLIENTE": false}
                        onPress={() => setActive('CLIENTE')}
                    />
                    </Drawer.Section>
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Razão Social"
                            value={pessoa.razaoSocial}
                            onChangeText={value => handleInputChange(value,"razaoSocial")}
                            />
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Razão Social"
                            value={pessoa.razaoSocial}
                            onChangeText={value => handleInputChange(value,"razaoSocial")}
                            />
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Razão Social"
                            value={pessoa.razaoSocial}
                            onChangeText={value => handleInputChange(value,"razaoSocial")}
                            />
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Cnpj"  
                            error= {hasErrors1()}          
                            value={pessoa.cnpj}
                            onChangeText={value => handleInputChange(value, "cnpj")}
                            />
                             <HelperText type="error" visible={hasErrors1()}>
                            CNPJ invalido!!
                             </HelperText>
                            <View style={styles.telefone}>
                                <TextInput style={styles.campoDDD}
                                mode= "outlined"
                                label="DDD"
                                value={pessoa.ddd}
                                onChangeText={value => handleInputChange(value, "ddd")}
                                />
                                <TextInput style={styles.campo}
                                mode= "outlined"
                                label="Numero"
                                value={pessoa.numero}
                                onChangeText={value => handleInputChange(value, "numero")}
                                />
                            </View>
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Email"
                            value={pessoa.email}
                            error= {hasErrors()}   
                            onChangeText={value => handleInputChange(value, "email")}
                            />
                        <HelperText type="error" visible={hasErrors()}>
                            Email invalido!!
                        </HelperText>
                        <TextInput style={styles.campo}
                            mode= "outlined"
                            label="Senha"
                            secureTextEntry
                            right={<TextInput.Icon name="eye" />}
                            />                      
                        
                            <View style={styles.botao}>
                                <Button mode="contained" color= "#FFD561" onPress={salvarCadastro}>
                                    Concluir cadastro
                                </Button>
                            </View>
                    </View>                    
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    
     form: {
        alignItems:'center',
        margin: 40,
        
    }, 
    tituloForm: {
        fontSize: 25,
        fontWeight:'bold',
        marginTop: -20
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
   
    background: {             
        height: 120,
        width: 360,
        position: 'absolute',
        bottom: -50,
        opacity: 0.5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 90            
    },
    tituloCadastro: {
        flexDirection:'row',
        justifyContent:'space-between'        
    },  
    linha: {
        backgroundColor:'#FFD561',
        opacity: 0.8,
        width:80,
        height: 2,
        marginLeft:10,
        marginRight:10,
        shadowOffset:{height: 1, width:4},
        shadowColor:'black'        
    },
    tipo: {
        height: 50,
        width: 280,        
        padding: 0
        
    },             
})

export default CadastroPessoa;