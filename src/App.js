import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Main from './components/Main';

function App(){
    return (
        <View style={styles.container}>
            <Title/>
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    innerText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default App;

