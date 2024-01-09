import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { CheckBox } from 'react-native-web';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [batteryNumber, setBatteryNumber] = useState('exploser');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text>Le bouton est-il rouge avec écrit "Maintenir"</Text>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />

        {!isChecked && (
          <Picker
            selectedValue={batteryNumber}
            style={styles.dropdown}
            onValueChange={(label) => setBatteryNumber(label)}
          >
            <Picker.Item label="Combien de piles ?" value="NumberBattery" />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1 pile ou + et bouton marquer explosé" value="1+" />
            <Picker.Item label="2 ou + et indicateur allumé avec les lettres FRK" value="2+" />
            <Picker.Item label="other" value="autre" />
          </Picker>
        )}

        {(isChecked || (!isChecked && batteryNumber === '1+') || (!isChecked && batteryNumber === '2+')) && (
          <View style={styles.title}>
            <Text>Cliquer sur le bouton</Text>
          </View>
        )}

        {(!isChecked && batteryNumber === '0') || (!isChecked && batteryNumber === 'autre') && (
          <View style={styles.title}>
            <Text>Test</Text>
          </View>
        )}
      </View>
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
  column: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  dropdown: {
    height: 40,
    width: 200,
    marginBottom: 10,
  },
});
