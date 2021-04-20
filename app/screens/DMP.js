import React from 'react';
import { View, Image } from 'react-native';
import { Button, Appbar} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker' 
//Firebase Initializations
import firebase from 'firebase';

db = firebase.storage();

function DMP({navigation}) {
    const [response, setResponse] = React.useState(null);
    const pickImage = () => {
        //
        launchCamera({
          mediaType: 'photo',
          includeBase64: false,
        },
        (response) => {
          setResponse(response);
        },
        )
      }
      const uploadImage = async(uri) =>{
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/"+Math.random());
        await ref.put(blob);
        const url = await ref.getDownloadURL().then(console.log("Got the URL")).catch((error)=>console.log(error)); 
        console.log(url);
        return url;
      }
    return (
    <View>
    <Appbar.Header>
      <Appbar.BackAction onPress={()=>navigation.navigate('ScanScreen')}/>
      <Appbar.Content title="Disect my Plate" subtitle="A way to find what you are eating" />
    </Appbar.Header>
      <View style={{margin: "15%"}}>
          <Button 
            mode="contained"
            onPress={()=>{
                pickImage()
            }}
          >
              Click an Image to Identify
          </Button>
          {response && (
          <View style={{marginVertical: 24,
            alignItems: 'center',}}>
            <Image
              style={{width: "100%", height: "75%"}}
              source={{uri: response.uri}}
            />
            <Button mode="contained" onPress={()=>{
                    uploadImage(response.uri)
                }}
                style={{margin:"10%"}}
            >
                Submit  
            </Button>
          </View>

          
        )}

      </View>
      </View>
    );
}

export default DMP;

