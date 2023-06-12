import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import useNavigation from '@react-navigation/native'

const Matiere  = () => {
    const navigation = useNavigation();
 
    const [form, setForm] = useState(null)

    const handleSubmit = () => {
        let value = form.getValue();
        if (value) { 
        console.log(value); 
        }
    }

    let Form = t.form.Form;

    let matiere = t.struct({
        categorie: t.String,        
        title: t.String, 
        competence: t.String,
        nameProf: t.String,
        noteOrale: t.number,
        noteEcrit: t.number,
        notePratique: t.number,
        noteSavoirEtre: t.maybe(t.number),
        day: t.date,
        hourInit: t.time,
        hourEnd: t.time
    });
 
    const options = {
        fields: {
            categorie: {
                label: 'Selectionner une categorie',
                error: 'Veuillez selectionner une catageorie'
            },
            title: {
                label: 'Entrer le nom de la matiere',
                error: 'Veuillez entrer le nom de la matiere'
            }
        }
    };

    return (
      <View style={styles.container}>
        <Form
          ref={(formValue) => setForm(formValue)}
          type={matiere}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={handleSubmit} underlayColor='#4FC031'>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableHighlight>
      </View>
    )
}

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

export default Matiere;