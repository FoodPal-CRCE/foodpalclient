import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';

import colors from '../config/colors';
import BlogCard from '../components/blog/BlogCard';

const posts = [
  {
    _id: 1,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
  {
    _id: 2,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
  {
    _id: 3,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
  {
    _id: 4,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
  {
    _id: 5,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
  {
    _id: 6,
    title: 'My New Dish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in fermentum et. Non curabitur gravida arcu ac tortor dignissim. Ut sem viverra aliquet eget sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Tellus rutrum tellus pellentesque eu tincidunt. Et malesuada fames ac turpis. Suscipit adipiscing bibendum est ultricies integer. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Fermentum leo vel orci porta non pulvinar. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    username: 'Darween Barbutza',
    location: 'Mumbai',
  },
];

function BlogScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(posts) => posts._id.toString()}
        renderItem={({item}) => (
          <BlogCard
            title={item.title}
            location={item.location}
            username={item.username}
            image={{uri: item.uri}}
            onPress={() => navigation.navigate('BlogDetailsScreen', item)}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default BlogScreen;
