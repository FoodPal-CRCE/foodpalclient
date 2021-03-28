import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import Counter from "react-native-counters"
//styles
const styles = StyleSheet.create({
    root: {
        margin: 10,
        flexDirection: 'row',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3
    },
    cover: {
        width: 150,
        height: 150,
        flex: 1

    },
    content: {
        flex: 2,
        padding: 10
    },
    actions: {
        marginTop: "auto",
        marginLeft: "auto",
        flexDirection: "row"
    }

})

export default class MenuCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: false,
        }
        this.clickHandle = this.clickHandle.bind(this);
    }
    
    clickHandle = (value) => {
        this.setState({
            clicked: !value
        })
    } 
    render() {
        return (
            <View style={styles.root}>
                <Image style={styles.cover} source={{ uri: "https://www.btklsby.go.id/images/placeholder/food.png" }} />
                <View style={styles.content}>
                    <Title>{this.props.title}</Title>
                    <Paragraph>₹ {this.props.price.toString()}</Paragraph>
                    <View style={styles.actions}>
                        {!this.state.clicked && <Button icon="plus" onPress={() => {
                            this.clickHandle(this.state.clicked);
                            this.props.addCartHandler({_id: this.props.id.toString(), name: this.props.title, price: this.props.price})
                            }}>Add</Button>}
                        {this.state.clicked && <Counter start={1} onChange={this.props.onChange.bind(this, this.props.title, this.props.price, this.props.id.toString())} />}
                    </View>
                </View>
            </View>
        )
    }
}
