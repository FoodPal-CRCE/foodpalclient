import React, { useEffect } from 'react'
import { useState } from 'react';
import { View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import MenuSection from './MenuSection';
export default function MenuList() {
    const menu = useSelector((state) => state.restaurant.menu)
    // console.log(menu);
    const [order, setOrder] = useState({});
    
    const renderItem = ({ item }) => (
        <MenuSection item={item}/>
    );
    return (

        <FlatList
            data={menu}
            keyExtractor={item => item.name}
            renderItem={renderItem}
        />
    )
}
