import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraContato from './src/pages/CadastraContato';
import BuscarContato from  './src/pages/BuscarContatos'
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
       {/* <Stack.Screen name="TodosClientes" component={TodosClientes} /> */}
        <Stack.Screen name="BuscarContatos" component={BuscarContato} /> 
        <Stack.Screen name="CadastraContato" component={CadastraContato} />
        {/* <Stack.Screen name="Creditos" component={Creditos} /> */}
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
