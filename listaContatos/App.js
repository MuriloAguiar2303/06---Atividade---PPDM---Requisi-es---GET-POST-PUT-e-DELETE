import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

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
