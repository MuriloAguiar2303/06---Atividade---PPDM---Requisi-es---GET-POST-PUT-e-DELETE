import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraContato from './src/pages/CadastraContato';
import Home from './src/pages/Home';
import BuscarContato from './src/pages/BuscarContatos';
import Creditos from './src/pages/Creditos';
import { NavigationContainer } from '@react-navigation/native'
import TodosContatos from './src/pages/TodosContatos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="TodosContatos" component={TodosContatos} />
        <Stack.Screen name="BuscarContato" component={BuscarContato} /> 
        <Stack.Screen name="CadastraContato" component={CadastraContato} />
        <Stack.Screen name="Creditos" component={Creditos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
