import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import colors from '../config/colors';
import Text from '../components/Text';
// import {Icon} from '@mdi/react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function BlogDetailsScreen({route}) {
  const listing = route.params;

  // const listing = {
  //   _id: 6,
  //   title: 'My New Dish',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
  //   uri:
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
  //   username: 'Darween Barbutza',
  //   location: 'Mumbai',
  // };

  return (
    <View>
      <Image style={styles.image} source={listing.uri} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.location}>
        <Icon name="credit-card" color="#6617f5" size={25}/>
            {listing.location}
        </Text>
        <Text style={styles.details}>
          
          <Icon name="account-check-outline" color="#6617f5" size={25}/> {listing.username}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    marginTop: 20,
    marginBottom: 10,
  },
  details: {
    marginTop: 5,
    marginBottom: 15,
  },
  icon: {
    marginRight: '10',
  },
});

export default BlogDetailsScreen;
