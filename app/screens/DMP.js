import React from 'react';
import { View, Image } from 'react-native';
import { Button, Appbar, ActivityIndicator, Colors } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
//Firebase Initializations
import firebase from 'firebase';

db = firebase.firestore();

function DMP({ navigation }) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  const pickImage = () => {
    //
    launchCamera({
      mediaType: 'photo',
      includeBase64: false,
    },
      (response) => {
        setResponse(response);

        if (response.uri !== undefined) {
          setShowButton(true)
        }

      },
    )
  }
  const getDishData = async (name) => {
    await db.collection("recipes").doc(name).get().then((doc) => {
      console.log(doc.data());
    })
  }
  const uploadImage = async (uri) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("image", {
      uri: uri,
      type: "image/jpg",
      name: "image.jpg"
    }, "[PROXY]");
    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };
    fetch("https://pure-taiga-36828.herokuapp.com/classify", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        var answer = JSON.parse(result);
        console.log(answer["result"]);
        //get data
        getDishData(answer["result"]);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  }
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('ScanScreen')} />
        <Appbar.Content title="Disect my Plate" subtitle="A way to find what you are eating" />
      </Appbar.Header>
      <View style={{ margin: "15%" }}>
        <Button
          mode="contained"
          onPress={() => {
            pickImage()
          }}
        >
          Click an Image to Identify
          </Button>
        {showButton && (
          <View style={{
            marginVertical: 24,
            alignItems: 'center',
          }}>
            <Image
              style={{ width: "100%", height: "75%" }}
              source={{ uri: response.uri }}
            />
            <Button loading={loading} mode="contained" onPress={() => {
              uploadImage(response.uri)
            }}
              style={{ margin: "10%" }}
            >
              Submit

            </Button>
            {/* <ActivityIndicator animating={true} style={{ zIndex: 2 }} color={Colors.yellow900} /> */}
            {/* <ActivityIndicator animating={true} color={Colors.yellow900} /> */}
          </View>


        )}

      </View>
    </View>
  );
}

export default DMP;

