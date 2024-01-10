import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';

export default function Fil() {
  const [filNumbers, setFilNumbers] = useState([]);
  const [numberOfPickers, setNumberOfPickers] = useState(0);
  const notRed = filNumbers.filter(color => color == "red");

  const handleNumberOfPickersChange = (value) => {
    setNumberOfPickers(value);
    setFilNumbers(Array.from({ length: value }, (_, index) => (index + 1).toString()));
  };

  const handlePickerValueChange = (index, value) => {
    const updatedFilNumbers = [...filNumbers];
    updatedFilNumbers[index] = value;
    setFilNumbers(updatedFilNumbers);
  };

  const pickerComponents = filNumbers.map((value, index) => (
    <Picker
      key={index.toString()}
      selectedValue={value}
      style={styles.dropdown}
      onValueChange={(itemValue) => handlePickerValueChange(index, itemValue)}
    >
      <Picker.Item label="quel est la couleur du fil ?" value="0" />
      <Picker.Item label="rouge" value="red" />
      <Picker.Item label="bleu" value="blue" />
      <Picker.Item label="jaune" value="yellow" />
      <Picker.Item label="blanc" value="white" />
      <Picker.Item label="noir" value="black" />
    </Picker>
  ));

  return (
    <View style={styles.container}>
      {console.log(filNumbers)}
      {console.log(notRed,"pas rouge")}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Combien de fils ?</Text>
        <Picker
          selectedValue={numberOfPickers.toString()}
          style={styles.dropdown}
          onValueChange={(value) => handleNumberOfPickersChange(parseInt(value, 10))}
        >
          {[0, 3, 4, 5].map((value) => (
            <Picker.Item key={value.toString()} label={value.toString()} value={value.toString()} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>{pickerComponents}</View>

      {numberOfPickers === 3 && notRed.length == 0 && (
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
});
