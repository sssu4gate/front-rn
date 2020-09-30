import React from "react";
import "react-native-gesture-handler";
import { View, Text , Button} from 'react-native';

export default function Topbar(){
    return <View style = {styles.container}>
        <Text style={styles.text}>Loco</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#606060",
        fontSize: 30
    }
}) 