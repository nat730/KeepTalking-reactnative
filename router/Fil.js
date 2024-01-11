import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import couperFil from './fils/allFils';

export default function Fil() {
  const [filNumbers, setFilNumbers] = useState([]);
  const [tableauWires, setTableauWires] = useState([]);
  const numberOfPickers = useMemo(() => tableauWires.length, [tableauWires]);

  const handleNumberOfPickersChange = (value) => {
    setFilNumbers(Array.from({ length: value }, (_, index) => (index + 1).toString()));
    setTableauWires(new Array(value).fill("yellow"));
  };

  useEffect(() => {
    console.log(tableauWires, "ouhgvsln");
  }, [tableauWires]);

  const handlePickerValueChange = (index, value) => {
    setTableauWires((prevTableauWires) => {
      const updatedTableauWires = [...prevTableauWires];
      updatedTableauWires[index] = value;
      return updatedTableauWires;
    });
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

      <View style={styles.title}>
        <Text>{couperFil(numberOfPickers)}</Text>
      </View>
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
})