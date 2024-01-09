import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { CheckBox } from 'react-native-web';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);  
  const handleCheckboxChange = () => {setIsChecked(!isChecked);};
  const [batteryNumber, setBatteryNumber] = useState('exploser');

  
  return (
      <View style={styles.container}>
      <View style={styles.column}>
<Text>le bouton est il rouge avec ecrit maintenir</Text>
<CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
      {isChecked && (
        <View style={styles.title}>
<Text>cliquer sur le bouton</Text>
      </View>
      )   
      }
      {!isChecked && (
        <Picker
        selectedValue={batteryNumber}
        style={styles.dropdown}
        onValueChange={(itemValue) => setBatteryNumber(itemValue)}
      >
        <Picker.Item label="Combien de piles ?" value="NumberBattery" />
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1+" value="1 ou +" />
        <Picker.Item label="2+" value="2 ou +" />
      </Picker>
      )
}
{batteryNumber == 0 && (
  fezrder
)
}
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
