import React, {useState, useEffect}  from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';



const Upload = () => {  
    const [image, setImage] = useState(null)    
        

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
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setImage(result.uri);
        }     
    };  
      
    return(
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={styles.avatar} />}       
                      
            <TouchableOpacity style={styles.button}
            onPress={pickImage}>                  
              
           
                <Text style={styles.buttonText}>Escolher Imagem</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor:'#7159c1',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
    },
    buttonText: {
        color:'#fff'
    },
    avatar: {
        width: 100,
        height: 100        
    }
})

export default Upload;