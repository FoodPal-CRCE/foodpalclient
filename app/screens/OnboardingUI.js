import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export default class OnboardingUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
<Onboarding
    onDone={()=> this.props.navigation.replace('SplashScreen')}
    onSkip={()=> this.props.navigation.replace('SplashScreen')}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/qr.jpg')} />,
      title: 'Scan and Order',
      subtitle: 'Your Safety is Our Responsibility.',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/chef1.jpg')} />,
        title: 'Order in Few Minutes',
        subtitle: 'Order Delicious Food in Blink of an Eye',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/third.png')} />,
        title: 'Explore and Improvise',
        subtitle: 'With our Blogging System you can be a chef yourself.',
    },

  ]}
/>
    );
  }
}
