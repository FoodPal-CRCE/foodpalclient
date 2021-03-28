import React, { Component } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { LogBox } from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    Animated.useNativeDriver= false;
    this.state = {
      logoAnime: new Animated.Value(0),
      btnAnime: new Animated.Value(0),
    };
  }
  componentDidMount(){
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    const { logoAnime, btnAnime } = this.state;
    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 100,
        friction: 2,
        duration: 10000,
      }).start(),
      Animated.timing(btnAnime, {
        toValue: 1,
        duration: 120000,
        useNativeDriver: false,
      }),
    ]).start(()=>{})
  }

  render() {
    return (
      <View style={styles.submit}>
        <Animated.View style={{
          opacity: this.state.logoAnime,
          top: this.state.logoAnime.interpolate({
            inputRange: [0,1],
            outputRange: [80, 0]
          })
        }}>
          <Image source={require('../assets/logo.png')} style={styles.img} />
          <Button style={styles.btn} contentStyle={{height: 50}} mode="contained" onPress={() => this.props.navigation.navigate('LoginScreen')}>
                Login
            </Button>
            <Button style={styles.btn}contentStyle={{height: 50}} mode="contained" onPress={() => this.props.navigation.navigate('SignupScreen')}>
                Sign Up
            </Button>
        </Animated.View>
          
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
    img:{
      alignSelf:'center'
    },
    submit:{
        flex: 1,
        padding: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
    btn:{
         marginTop: 20,
        // // flex: -1,
        // alignContent: 'center',
        // justifyContent: 'center'

    }
})