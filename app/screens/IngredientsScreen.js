import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, ScrollView } from "react-native"
import ReactChipsInput from "react-native-chips";
import { FlatList } from 'react-native-gesture-handler';
import { Appbar, Button, Divider, Card, Paragraph, Title, DataTable, ActivityIndicator, Colors } from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../reducers/orderSlice';


export default function IngredientsScreen({ navigation }) {
    const [ingredients, setIngredients] = useState(['salt', 'pepper'])
    // const [recipes, setRecipes] = useState([])
    const recipes = useSelector(state => state.order.recipes);
    const loading = useSelector(state => state.order.loading);
    const dispatch = useDispatch();
    console.log(recipes);

    // if (recipes) {
    //     var values = [];
    //     recipes.forEach((recipe) => {
    //         values.push(recipes.)
    //     })
    //     const data = {
    //         labels: ["Calories", "Fat"],
    //         datasets: [
    //             {
    //                 data: 
    //             }
    //         ]
    //     }
    // }

    return (
        <View style={{ height: "100%" }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                    navigation.navigate('ProfileScreen');
                }} />
                <Appbar.Content title="Search Recipes" />
            </Appbar.Header>
            <ScrollView style={{ height: "100%" }}>
                <ReactChipsInput

                    label="Enter Ingredients" initialChips={ingredients}
                    onChangeChips={(chips) => setIngredients(chips)}
                    alertRequired={false}
                    chipStyle={{ borderColor: 'blue' }}
                    inputStyle={{ fontSize: 18, padding: 0 }}
                    labelStyle={{ color: 'blue', fontSize: 18 }}
                    labelOnBlur={{ color: '#666' }} />
                <Button icon="magnify" mode="contained" onPress={() => { dispatch(getRecipes(ingredients)) }} compact={true} style={{ width: 100, alignSelf: "center", marginTop: 20 }} disabled={ingredients.length == 0}>Search</Button>
                <Divider style={{ marginTop: 20 }} />
                <ActivityIndicator animating={loading} color={Colors.red800} style={{ marginTop: 20 }} />
                <FlatList
                    data={recipes}
                    keyExtractor={(recipe) => recipe.title.toString()}
                    renderItem={({ item }) => (
                        // show card here
                        // <Text>{item.title}</Text>
                        <Card style={{ padding: 10, margin: 10 }}>
                            <Card.Cover source={{ uri: item.picture_link }} />
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph>Tag : {item.tag}</Paragraph>
                                <Paragraph>Ingredients: [{item.new_ings.toString()}]</Paragraph>
                                {
                                    item.instructions.map((step, index) => (
                                        <Text key={index}>{step}</Text>

                                    ))
                                }
                                <DataTable>
                                    <DataTable.Header>
                                        <DataTable.Title >Calories</DataTable.Title>
                                        <DataTable.Title >Fat</DataTable.Title>
                                        <DataTable.Title >Sodium</DataTable.Title>
                                        <DataTable.Title >Choles..</DataTable.Title>
                                        <DataTable.Title >Proteins</DataTable.Title>
                                        <DataTable.Title >Carbs</DataTable.Title>
                                    </DataTable.Header>

                                    <DataTable.Row>
                                        <DataTable.Cell >{item.calories}</DataTable.Cell>
                                        <DataTable.Cell >{item.fat_g}</DataTable.Cell>
                                        <DataTable.Cell >{item.sodium_mg}</DataTable.Cell>
                                        <DataTable.Cell >{item.cholestrol_g}</DataTable.Cell>
                                        <DataTable.Cell >{item.protiens_g}</DataTable.Cell>
                                        <DataTable.Cell >{item.carbohydrtes_g}</DataTable.Cell>
                                    </DataTable.Row>
                                </DataTable>



                            </Card.Content>

                        </Card>
                    )}
                />

            </ScrollView>
        </View>
    )
}
