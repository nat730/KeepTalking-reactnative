    import * as React from 'react';
    import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';

    export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Button')}>
            <Text>Bouton</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fil')}>
            <Text>Fils</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
        button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        },
        container: { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' }
    });