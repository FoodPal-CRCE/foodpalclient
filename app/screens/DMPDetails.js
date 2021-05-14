import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { List } from 'react-native-paper';

const {width} = Dimensions.get('screen');



const DMPDetails = ({navigation, route}) => {
    const dish = route.params;
    console.log(dish.ingredients)
    const listComponent = dish.ingredients.map((ingredient) => {
        return(
            <List.Item title={ingredient} key={ingredient}/>
        );
    })
    return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={style.backgroundImageContainer}>
            <ImageBackground style={style.backgroundImage} source={{uri: dish.image}}>
            <View style={style.header}>
                <View style={style.headerBtn}>
                <Icon
                    name="arrow-back-ios"
                    size={20}
                    onPress={navigation.goBack}
                />
                </View>
                <View style={style.headerBtn}>
                <Icon name="favorite" size={20} />
                </View>
            </View>
            </ImageBackground>
            {/* Virtual Tag View */}
            
        </View>
        <View style={style.detailsContainer}>
            {/* Name and rating view container */}
            <View style={{justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: "5%"}}>
            Dish:  {dish.Name}
            
            </Text>

            </View>

            <Text style={{fontSize: 20, fontWeight: 'bold', margin: "5%"}}>
            Origin:  {dish.origin}
            </Text>
            <List.Accordion title="View Ingredients">
                {listComponent}
            </List.Accordion>

        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5},
});

export default DMPDetails;