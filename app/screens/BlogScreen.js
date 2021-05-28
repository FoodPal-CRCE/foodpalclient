  
import React, {useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View, Text, Image} from 'react-native';

import colors from '../config/colors';
import BlogCard from '../components/blog/BlogCard';
import { FAB,Button,TextInput, Provider, Portal, Appbar, Modal, Menu, Divider, ProgressBar, Colors} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker' 
//Firebase Initializations
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import {getBlogs, uploadDoc} from '../reducers/blogSlice'
import { mdiSleep } from '@mdi/js';
import { useEffect } from 'react';
const db = firebase.firestore();

function BlogScreen({navigation}) {
  //Blogs from state
  const posts = useSelector((state) => state.blog.blogs)
  console.log(posts);
  //Redux Initializations
  const dispatch = useDispatch();
  //FAB Initializations
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  //Modal Initializations
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  
  //Form Initializations
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dish, setDish] = useState('');
  //Form Menu
  const [visibleMenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);
  //Image Picker
  const [response, setResponse] = React.useState(null);
  const pickImage = () => {
    launchCamera({
      mediaType: 'photo',
      includeBase64: false,
    },
    (response) => {
      setResponse(response);
    },
    )
  }
  //Progrss Bar variables
  const [progressBarVisible, setProgressBarVisible] = useState(false);
  const [num, setNum] = useState(0);
  //On Form Submission
  const handleSubmit = async () => {
    setProgressBarVisible(true);
    setNum(0.3);
    setNum(0.5);
    await uploadImage(response.uri);
  }
  //Firebase upload Image
  const uploadImage = async(uri) =>{
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("images/"+Math.random());
    await ref.put(blob);
    const url = await ref.getDownloadURL().then(console.log("Got the URL")); 
    console.log("URL: ",url);
    setImageUrl(url);
    const values = {
      title: title,
      description: description,
      url: url,
      dish:dish
    }
    dispatch(uploadDoc(values));
    setNum(0.8);
    setProgressBarVisible(false);
    setVisible(false);
    setTitle('');
    setDescription('');
    setDish('');
  }
  //Get blogs
  const caller = () => {
    dispatch(getBlogs());
  }
  useEffect(() => {
    caller();
  }, [])
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={()=>navigation.navigate('ScanScreen')}/>
        <Appbar.Content title="Blogs" subtitle="Showcase your Talent" />
      </Appbar.Header>
      <FlatList
        style={{margin: "5%"}}
        data={posts}
        keyExtractor={(posts) => posts.url}
        renderItem={({item}) => (
          <BlogCard
            title={item.title}
            location={item.description}
            image={{uri: item.url}}
            navigation={navigation}
          />
        )}
      />
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon='plus'
            actions={[
              {
                icon: 'pencil-outline',
                label: 'Create a Blog',
                onPress: () => showModal(),
              },
              
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
    </Provider>    
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
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

            <TextInput
                label="Title"
                style={{marginBottom: "10%"}}
                value={title}
                onChangeText = {text=>setTitle(text)}
                mode="flat"
            />

            <TextInput
                label="Description"
                multiline 
                numberOfLines={3}
                style={{marginBottom: "10%"}}
                value={description}
                onChangeText = {text=>setDescription(text)}
                mode="flat"
            />
            
              <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => handleSubmit()}>
                  Submit
              </Button>
            </View>
            <ProgressBar 
              visible={progressBarVisible}
              progress={num}
              color={Colors.theme}
            />
            </ScrollView>
        </Modal>
      </Portal>
    </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    // padding: 20
  },
    fab: {
    position: 'absolute',
    margin: 50,
    right: 0,
    bottom: 0,
  },
});

export default BlogScreen;