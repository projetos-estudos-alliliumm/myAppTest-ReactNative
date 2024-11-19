import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Title(){
    return(
        <View>
            <Text style={styles.innerText}>ONEBITHEALTH</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'red',
        fontWeight: 'bold',
    },
});