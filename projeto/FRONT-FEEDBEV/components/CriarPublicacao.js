
import React from 'react'
import { View, Text, Image } from 'react-native'
import MenuFeedBev from './MenuFeedBev'
import { TextInput, List, Button } from 'react-native-paper';
import CriarPublicacaoEstilos from '../css/CriarPublicacaoEstilos';


const CriarPublicacao = () => {
    const [text, setText] = React.useState('');
    const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
    return (
        <View>
            <MenuFeedBev/>
            <View> 
                <View style={CriarPublicacaoEstilos.tituloNovidade}>
                    <View style={CriarPublicacaoEstilos.linha}></View>
                    <Text style={CriarPublicacaoEstilos.titulo}>Criar Publicação</Text>
                    <View style={CriarPublicacaoEstilos.linha}></View>
                </View>
                <View>
                    <View style={CriarPublicacaoEstilos.campoImagem}>
                        <Text style={CriarPublicacaoEstilos.textImage}>Adicionar Imagem</Text>
                        <View  >
                            <Button style={CriarPublicacaoEstilos.btnArquivo} color="#FFD561" mode="contained" onPress={() => console.log('Pressed')}>
                                <Text style={CriarPublicacaoEstilos.btnText}>Escolher Arquivo</Text>
                            </Button>                  
                        </View>

                     </View>
                     <View style={CriarPublicacaoEstilos.formNovidade}>
                        <TextInput style={CriarPublicacaoEstilos.textAreaContainer}
                            multiline={true}
                            numberOfLines={2}
                            label="descrição"
                            mode="outlined"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                              
                        <TextInput style={CriarPublicacaoEstilos.textAreaContainer}
                             multiline={true}
                             numberOfLines={10}
                            label="Conteúdo"
                            mode="outlined"
                            value={text}
                            onChangeText={text => setText(text)}
                            />
                         <Button  mode="contained" color="#FFD561"  onPress={() => console.log('Pressed')}>
                            Criar
                        </Button>
                     </View>
                </View>               
            </View>
        </View>
    )
}
export default CriarPublicacao;


