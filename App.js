import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';//
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './components/Header';
import Sequence from './pages/Sequence';
import Matiere from './pages/Matiere';

/*function Sequence({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Save sequence</Text>
      <Button
        title="Continuer"
        onPress={() => navigation.navigate('Matiere')}
      />
    </View>
  );
}

function Matiere({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Save Matiere</Text>
      <Button
        title="Enregistrer"
        onPress={() => navigation.navigate('Sequence')}
      />
    </View>
  );
}*/

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Sequence"
          component={Sequence}
          options={{
            headerTitle: () => <Header name="Sequence" />,
            headerRight: () => {
              <View>
                <TouchableOpacity style={{marginLeft: 15}}>
                  <MaterialCommunityIcons name='dots-vertical' size={28} color='#f2f2f2' />
                </TouchableOpacity>
              </View>
            },
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#4FC031',
              shadowColor: '#000',
              elevation: 25
            }
          }} />
        <Stack.Screen 
          name="Matiere"
          component={Matiere}
          options={{
            headerTitle: () => <Header name="Matiere" />,
            headerRight: () => {
              <View>
                <TouchableOpacity style={{marginLeft: 15}}>
                  <MaterialCommunityIcons name='dots-vertical' size={28} color='#f2f2f2' />
                </TouchableOpacity>
              </View>
            },
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#4FC031',
              shadowColor: '#000',
              elevation: 25
            }
          }} />
      </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
};