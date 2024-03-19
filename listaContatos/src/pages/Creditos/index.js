import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View><Text>Murilo Aguiar</Text></View>
          <View><Image></Image></View>
          <View>O Murilo foi responsavel de criar </View>
        </View>

        <View>
          <View><Text>Lucas Manrick</Text></View>
          <View><Image
          style={styles.image} 
          source={require("../../../assets/teste.jpg")}
          ></Image></View>
          <View></View>
        </View>

        <View>
          <View><Text>Murilo Aguiar</Text></View>
          <View></View>
          <View>O Murilo foi responsavel de criar </View>
        </View>


        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
