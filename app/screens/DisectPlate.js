import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
//Firebase Works
import firebase from 'firebase';
import firebaseConfig from '../firebaseconfig/firebaseConfig';
firebase.initializeApp(firebaseConfig);
db = firebase.storage();

export default class DisectPlate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  uploadImage = async(uri) =>{
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("images/"+Math.random());
    await ref.put(blob);
    const url = await ref.getDownloadURL().then(console.log("Got the URL")).catch((error)=>console.log(error)); 
    this.setState({url:url})
    console.log(url);
    return url;
  }
  
  
  fucktion = async (uri) => {
    console.log("Called")
    var formdata = new FormData();
    formdata.append('my_photo', {
      image: uri, // your file path string
    })
    try{
      const data = fetch('https://pure-taiga-36828.herokuapp.com/classify', {
        method: "POST",
        body: formdata,
        headers: { 
          'Content-Type': 'multipart/form-data',
        }
      }).then((response) => console.log(response))
      .catch(err=>console.log(err))
    }
    catch(err){
      console.log(err);
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            // console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      const x = this.uploadImage(data.uri);
      console.log(x);
      console.log("State: ", this.state.url);
      var final_uri = data.uri.substr(0,7) + data.uri.substr(8)
      console.log(final_uri);
      this.fucktion(final_uri)
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});