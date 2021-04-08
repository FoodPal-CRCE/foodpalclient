import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { useDispatch } from 'react-redux';
import { saveRest } from '../reducers/scanSlice';



export default function ScanScreen({navigation}){
  const dispatch = useDispatch();
  const onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    console.log(e.data);
    var data= JSON.parse(e.data);
    console.log(data);
    var doc = {
      id: data.id,
      tablenumber: data.tableNumber
    }
    dispatch(saveRest(doc))
    navigation.navigate('MenuScreen');
    //Redux --> DB --> then --> Navigate to Restraunt Menu 
  };

 
    return (
        <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Scan the QR Code
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }


const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });