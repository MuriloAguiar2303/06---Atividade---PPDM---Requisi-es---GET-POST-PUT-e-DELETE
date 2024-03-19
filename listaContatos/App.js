import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraCliente from './src/pages/CadastraCliente';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View>

<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="TodosClientes" component={TodosClientes} />
      <Stack.Screen name="BuscarCliente" component={BuscarCliente} /> */}
      <Stack.Screen name="CadastraCliente" component={CadastraCliente} />
      {/* <Stack.Screen name="Creditos" component={Creditos} /> */}
  </Stack.Navigator>
  </NavigationContainer>
  </View>
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
