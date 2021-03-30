import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Text from '../Text';
import colors from '../../config/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function EventCard({title, location, username, image}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.location} numberOfLines={1}>
            {location}
          </Text>
          <Text style={styles.username} numberOfLines={1}>
            {username}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  location: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
  username: {
    color: colors.blue,
  },
});

export default EventCard;
