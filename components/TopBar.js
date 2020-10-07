import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Home from "../screens/Home";

class TopBar extends React.Component {
    onPress = () => {
        console.log("go Home");
        navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require("../assets/menu(black).png")}
                        style={{
                            width: 30,
                            height: 30,
                        }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Image
                        source={require("../assets/LoCo(pink).png")}
                        style={{
                            width: 91,
                            height: 30,
                        }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                        }} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default TopBar;