import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker, TextInput } from 'react-native';
import { couperFil } from './allFils';

export default function Fil() {
  const [filNumbers, setFilNumbers] = useState([]);
  const [tableauWires, setTableauWires] = useState([]);
  const [dernierChiffreNumeroSerie, setDernierChiffreNumeroSerie] = useState("");

  const handleNumberOfPickersChange = (value) => {
    setFilNumbers(Array.from({ length: value }, (_, index) => (index + 1).toString()));
    setTableauWires(new Array(value).fill("yellow"));
  };

  const handlePickerValueChange = (index, value) => {
    setTableauWires((prevTableauWires) => {
      const updatedTableauWires = [...prevTableauWires];
      updatedTableauWires[index] = value;
      return updatedTableauWires;
    });
  };

  const onChangeNumber = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setDernierChiffreNumeroSerie(numericValue);
  };

  const pickerComponents = filNumbers.map((_, index) => (
    <Picker
      key={index.toString()}
      style={styles.dropdown}
      onValueChange={(itemValue) => handlePickerValueChange(index, itemValue)}
    >
      <Picker.Item label="jaune" value="yellow" />
      <Picker.Item label="rouge" value="red" />
      <Picker.Item label="bleu" value="blue" />
      <Picker.Item label="blanc" value="white" />
      <Picker.Item label="noir" value="black" />
    </Picker>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Combien de fils ?</Text>
        <Picker
          style={styles.dropdown}
          onValueChange={(value) => handleNumberOfPickersChange(parseInt(value, 10))}
        >
          {[0, 3, 4, 5, 6].map((value) => (
            <Picker.Item key={value.toString()} label={value} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>{pickerComponents}</View>

      {(tableauWires.length === 4 || tableauWires.length === 5 || tableauWires.length === 6) && (
        <View style={styles.title}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={dernierChiffreNumeroSerie}
            placeholder="Dernier chiffre du numéro de série"
            keyboardType="numeric"
          />
        </View>
      )}
      <Text>{couperFil(tableauWires, parseInt(dernierChiffreNumeroSerie, 10))}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginRight: 20,
  },
  pickerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    height: 50,
    width: 150,
  },
  title: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
