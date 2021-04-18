import React, { useState } from 'react';
import {StyleSheet, FlatList, View, Image, ScrollView} from 'react-native';

import colors from '../config/colors';
import BlogCard from '../components/blog/BlogCard';
import {FAB, Portal, Provider, Modal, Text, TextInput, Button, Appbar} from 'react-native-paper'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker' 
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
  }
];

function BlogScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'black', padding: 20};
  const [state, setState] = React.useState({ open: false });
  const handleAdd = () => {
    console.log("This Screen will have a form");
    showModal();
  }
  const onStateChange = ({ open }) => setState({ open });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { open } = state;
  const handleSubmit = () => {
    console.log(title);
  }
  const pickImage = () => {
    //
    launchCamera({
      mediaType: 'photo',
      includeBase64: false,
    },
    (response) => {
      setResponse(response);
    },
    )
  }
  return (
    <View style={{height: "100%"}}>
      <FAB.Group
          style={{top:-15}}
          open={open}
          icon='plus'
          actions={[
            { icon: 'pencil-outline', label: 'Create a Blog', onPress: () => {handleAdd()} },
            
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
             <Appbar.Header>
     <Appbar.BackAction onPress={()=>navigation.navigate('ScanScreen')}/>
      <Appbar.Content title="Blogs" subtitle="Show What You Eating" />
     </Appbar.Header>
   <View style={{margin:20}}>

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
      
        
    
        <Modal visible={visible} onDismiss={hideModal} style={{height: "100%", width: "100%"}} contentContainerStyle={containerStyle}>
          {/**
           * We will make a form blogs here and upload blog
           */}
           <ScrollView>
           <View style={{padding: "10%"}}>
             <Text style={{fontSize: 24, alignSelf: "center", margin: "10%"}}>
               Create a Blog
             </Text>
             <Button mode="contained" style={{margin: 20}} onPress={()=>{
               pickImage()
             }}>
               Add a Blog Image
             </Button>
             {response && (
          <View style={{marginVertical: 24,
            alignItems: 'center',}}>
            <Image
              style={{width: 200, height: 200}}
              source={{uri: response.uri}}
            />
          </View>
        )}
           {/* <TextInput 
              label = "Title"
              value={title}
              onChangeText = {text => setTitle(text)}
              style={{marginBottom: "10%"}}
              mode="outlined"
           /> */}
           <TextInput
              label="Title"

              style={{marginBottom: "10%"}}
              value={title}
              onChangeText = {text=>setTitle(text)}
              mode="outlined"
           />

           <TextInput
              label="Description"
              multiline 
              numberOfLines={3}
              style={{marginBottom: "10%"}}
              value={description}
              onChangeText = {text=>setDescription(text)}
              mode="outlined"
           />

            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => handleSubmit()}>
                Submit
            </Button>
           </View>
           </ScrollView>
        </Modal>
      
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
  },
  submit:{
    marginTop: 10,
},
});

export default BlogScreen;
