import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer, saveme } from '../reducers/signinSlice';
import { useState } from 'react';

function OnboardingUI({navigation}) {
  return (
   
    <Onboarding
        onDone={()=> navigation.replace('SplashScreen')}
        onSkip={()=> navigation.replace('SplashScreen')}
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

export default OnboardingUI;
