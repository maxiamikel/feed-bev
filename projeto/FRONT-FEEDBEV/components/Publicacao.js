import React from 'react';
import { Menu } from 'react-native-paper';
import { Image,View,Text } from 'react-native';
import PublicacaoEstilos from  '../css/PublicacaoEstilos';

export default function Publicacao () {

    return(

        <View style={{flex:1}}>
            <View>
            <View style={PublicacaoEstilos.barraDeMenu}>
            <Image style={PublicacaoEstilos.opcoes} source={require('../imagens/opcoes.png')} />
                <Text style={PublicacaoEstilos.titulo}>FeedBev</Text>                    
                <Image style={PublicacaoEstilos.logo} source={require('../imagens/logo-feedBev.png')} />                  
            </View>
            </View>

            <View style={PublicacaoEstilos.barraTitulo}>
                <View style={PublicacaoEstilos.barraDireita}></View>
                <Text style={PublicacaoEstilos.tituloForm}>Publicações</Text>
                <View style={PublicacaoEstilos.BarraEzquerda}></View>
            </View>
            <View style={PublicacaoEstilos.menuEditar}>
                <Image style={PublicacaoEstilos.logoPublicacao} source={require('../imagens/write-message.png')} />
            </View>

        
            <View style={PublicacaoEstilos.publicacaoConteudo}>
                <View style={PublicacaoEstilos.perfilPublicacao}>
                    <View>
                        <Image style={PublicacaoEstilos.fotoPerfil} source={require('../imagens/user.png')} />
                    </View>
                    <View>
                        <Text >Ambev</Text>
                    </View>
                </View>

                <View style={PublicacaoEstilos.barraVertical}></View>

                <View style={PublicacaoEstilos.textoPublicacao}>
                    <Text>
                    This is done in an optimized way that is faster than calling setState and re-rendering.
                     Because the entire configuration is declarative, we will be able to implement further.
                    </Text>
                    <Text style={PublicacaoEstilos.data}>2021/08/28</Text>
                </View>
            </View>

            <View style={PublicacaoEstilos.publicacaoConteudo}>
                <View style={PublicacaoEstilos.perfilPublicacao}>
                    <View>
                        <Image style={PublicacaoEstilos.fotoPerfil} source={require('../imagens/user.png')} />
                    </View>
                    <View>
                        <Text >Ambev</Text>
                    </View>
                </View>

                <View style={PublicacaoEstilos.barraVertical}></View>

                <View style={PublicacaoEstilos.textoPublicacao}>
                    <Text>
                    This is done in an optimized way that is faster than calling setState and re-rendering.
                     Because the entire configuration is declarative, we will be able to implement further.
                    </Text>
                    <Text style={PublicacaoEstilos.data}>2021/08/28</Text>
                </View>
            </View>
            <View style={PublicacaoEstilos.publicacaoConteudo}>
                <View style={PublicacaoEstilos.perfilPublicacao}>
                    <View>
                        <Image style={PublicacaoEstilos.fotoPerfil} source={require('../imagens/user.png')} />
                    </View>
                    <View>
                        <Text >Ambev</Text>
                    </View>
                </View>

                <View style={PublicacaoEstilos.barraVertical}></View>

                <View style={PublicacaoEstilos.textoPublicacao}>
                    <Text>
                    This is done in an optimized way that is faster than calling setState and re-rendering.
                     Because the entire configuration is declarative, we will be able to implement further.
                    </Text>
                    <Text style={PublicacaoEstilos.data}>2021/08/28</Text>
                </View>
            </View>
            <View style={PublicacaoEstilos.publicacaoConteudo}>
                <View style={PublicacaoEstilos.perfilPublicacao}>
                    <View>
                        <Image style={PublicacaoEstilos.fotoPerfil} source={require('../imagens/user.png')} />
                    </View>
                    <View>
                        <Text >Ambev</Text>
                    </View>
                </View>

                <View style={PublicacaoEstilos.barraVertical}></View>

                <View style={PublicacaoEstilos.textoPublicacao}>
                    <Text>
                    This is done in an optimized way that is faster than calling setState and re-rendering.
                     Because the entire configuration is declarative, we will be able to implement further.
                    </Text>
                    <Text style={PublicacaoEstilos.data}>2021/08/28</Text>
                </View>
            </View>                     
            
        </View>
    )

}
