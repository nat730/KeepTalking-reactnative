    import * as React from 'react';
    import { StyleSheet,View, Text, Pressable } from 'react-native';

    export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Button')}>
            <Text>Bouton</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Fil')}>
            <Text>Fils</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Clavier')}>
            <Text>Clavier</Text>
        </Pressable>
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