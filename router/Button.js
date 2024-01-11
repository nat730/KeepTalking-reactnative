import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { CheckBox } from 'react-native-web';

export default function Button() {
  const [isChecked, setIsChecked] = useState(false);
  const [batteryNumber, setBatteryNumber] = useState();
  const [color, setColor] = useState();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const showButton = isChecked || (!isChecked && (batteryNumber === '1+' || batteryNumber === '2+'));
  const showColorStrip = !isChecked && (batteryNumber === '0' || batteryNumber === 'other');
  const showColorPicker = showColorStrip && color === undefined;

  return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text>Le bouton est-il rouge avec écrit "Maintenir"</Text>
          <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
          <Text>si non : </Text>
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
              <Picker.Item label="autre" value="other" />
            </Picker>
          )}

          {showButton && (
            <View style={styles.title}>
              <Text>Cliquer sur le bouton</Text>
            </View>
          )}

          {showColorStrip && (
            <View style={styles.title}>
              <Text>Rester appuyer sur le bouton et relâcher lorsque le compte à rebours affiche un : </Text>
            </View>
          )}

          {showColorPicker && (
            <Picker
              selectedValue={color}
              style={styles.dropdown}
              onValueChange={(label) => setColor(label)}
            >
              <Picker.Item label="De quelle couleur est la bande ?" value="whatsColor" />
              <Picker.Item label="Bleu" value="blue" />
              <Picker.Item label="Jaune" value="yellow" />
              <Picker.Item label="Autre" value="other" />
            </Picker>
          )}

          {color === 'blue' && (
            <View style={styles.title}>
              <Text>4 à n'importe quelle position.</Text>
            </View>
          )}

          {color === 'yellow' && (
            <View style={styles.title}>
              <Text>5 à n'importe quelle position.</Text>
            </View>
          )}

          {color === 'other' && (
            <View style={styles.title}>
              <Text>1 à n'importe quelle position.</Text>
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
  dropdown: {
    height: 40,
    width: 200,
    marginBottom: 10,
  },
});
