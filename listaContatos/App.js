import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraCliente from './src/pages/CadastraCliente';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="TodosClientes" component={TodosClientes} />
      <Stack.Screen name="BuscarCliente" component={BuscarCliente} /> */}
      <Stack.Screen name="CadastraContato" component={CadastraCliente} />
      {/* <Stack.Screen name="Creditos" component={Creditos} /> */}
  </Stack.Navigator>
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
