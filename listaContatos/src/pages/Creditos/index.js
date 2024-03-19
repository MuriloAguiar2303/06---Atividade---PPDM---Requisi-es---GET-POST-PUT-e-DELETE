import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Creditos() {
  return (
    <View style={styles.container}>
      <View style={{width:"100%",height:15,display:"flex", alignItems:"center", flexDirection:"row"}}>
            <View>Home</View>
      </View>
      <View>
        <Button onPress={() => {navigation.navigate('CadastraCliente')}}>
            <Text>Cadastra Cliente</Text>
        </Button>
      </View>
      <StatusBar style="auto" />
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
