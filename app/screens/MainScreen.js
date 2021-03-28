import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput,Button, Appbar, BottomNavigation, Text } from 'react-native-paper';
export default function MainScreen({navigation}) {
    return (
      <View>
      <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="QR Scanner" subtitle="Order at desired Restaurant" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
        <View>
          <Button style={styles.btn} contentStyle={{height: 50}} mode="contained" onPress={() =>navigation.navigate('ScanScreen')}>
                Scan QR Code
          </Button>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  img:{
    alignSelf:'center'
  },
  submit:{
      flex: 1,
      padding: 30,

  },
  btn:{
       marginTop: "80%",
       alignContent: 'center',
       justifyContent: 'center',
       margin: 20
      //  flex: 4,
  }
})
