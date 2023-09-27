import React from "react";
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';

const Hello = () => {
    return(
        <View style={styles.container}>
        <Text>Hello World</Text>
        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center"
    }
})    

export default Hello;