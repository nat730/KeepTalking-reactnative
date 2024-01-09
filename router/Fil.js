import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { CheckBox } from 'react-native-web';

export default function Fil() {
    const [redIsChecked, setRedIsChecked] = useState(true);
    const [blueIsChecked, setBlueIsChecked] = useState(true);
    const [filNumber, setFilNumber] = useState();

    const handleCheckboxRedChange = () => {
        setRedIsChecked(!redIsChecked);
    };

    const handleCheckboxBlueChange = () => {
        setBlueIsChecked(!blueIsChecked);
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={filNumber}
                style={styles.dropdown}
                onValueChange={(label) => setFilNumber(label)}
            >
                <Picker.Item label="Combien de fil ?" value="NumberFil" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>

            {filNumber === '3' && (
                <View style={styles.title}>
                    <Text>y a t-il un fil rouge ? </Text>
                    <CheckBox value={redIsChecked} onValueChange={handleCheckboxRedChange} />
                </View>
            )}

            {!redIsChecked && (
                <View style={styles.title}>
                    <Text>couper le 2nd fil </Text>
                </View>
            )}

            {filNumber === '3' && redIsChecked && (
                <View style={styles.title}>
                    <Text>y a t-il PLUSIEURS fils bleu ? </Text>
                    <CheckBox value={blueIsChecked} onValueChange={handleCheckboxBlueChange} />
                </View>
            )}

            {filNumber === '3' && redIsChecked && blueIsChecked && (
                <View style={styles.title}>
                    <Text>couper le dernier fil bleu </Text>
                </View>
            )}

            {filNumber === '3' && redIsChecked && !blueIsChecked && (
                <View style={styles.title}>
                    <Text>couper le dernier fil </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dropdown: {
        height: 40,
        width: 200,
        marginBottom: 10,
    },
});
