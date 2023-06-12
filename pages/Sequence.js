import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import t from 'tcomb-form-native';
import useNavigation from '@react-navigation/native'

let Form = t.form.Form;
 
const Sequence = () => {
    const navigation = useNavigation();
 
    const [form, setForm] = useState(null)

    const handleSubmit = () => {
        let value = form.getValue();
        if (value) { 
        console.log(value); 
        }
        navigation.navigate('sequence')
    }

    let Trimestre = t.enums({
        1: '1.Trimestre',
        2: '2.Trimestre',
        3: '3.Trimestre'
    });

    let NumSeq = t.enums({
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
    });

    let sequence = t.struct({
    title: t.String,        
    trimestre: Trimestre, 
    sequence: NumSeq  
    });
 
    const options = {
        fields: {
            titre: {
                label: 'Entrer un titre a la sequence',
                error: 'Veuillez entrer un titre a la sequence',
                placeholder: ''
            },
            trimestre: {
                label: 'Selectionnez un trimestre',
                error: 'Veuillez selectionner un trimestre'
            },
            sequence: {
                label: 'Selectionnez une sequence',
                error: 'Veuillez selectionner une sequence'
            }
        }
    };

    return (
      <View style={styles.container}>
        <Form
          ref={(formValue) => setForm(formValue)}
          type={sequence}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={handleSubmit} underlayColor='#4FC031'>
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableHighlight>
      </View>
    )
};
 
let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 16,
    backgroundColor: '#4FC031',
    borderColor: '#4FC031',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Sequence;