import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Creditos() {
  return (

    <View style={styles.container}>
      <View style={{ width: "90%", height: "20%", display: 'flex', flexDirection: 'row', backgroundColor: "#fdfdf9", alignItems: 'center' }}>


        <View style={styles.containerImage}><Image
          style={styles.image}
          source={require("../../assets/image.jpg")}
        ></Image></View>

        <View style={{ position: 'absolute', top: 0, left: 200 }}><Text>João Wasconcelos</Text></View>
        <View><Text>O Murilo foi responsavel de criar </Text></View>
      </View>



      <View style={styles.container}>
        <View style={{ width: "90%", height: "30%", display: 'flex', flexDirection: 'row', backgroundColor: "#fdfdf9", alignItems: 'center' }}>


          <View style={styles.containerImage}><Image
            style={styles.image}
            source={require("../../assets/murilo.jpg")}
          ></Image></View>

          <View style={{ position: 'absolute', top: 0, left: 200 }}><Text>Murilo Aguiar</Text></View>
          <View style={{ width: "60%", height: "40%", display: 'flex', flexDirection: 'row', backgroundColor: "#fdfdf9", alignItems: 'center' }}><Text>O Murilo foi responsavel de criar a tela de cadastro e buscar contato </Text></View>
        </View>

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
    gap:70,
    width:"100%"
   

  },

  containerImage: {
    width: "40%",
    height: "100%",
 


  },

  image: {
    width: "90%",
    height: "100%",
    backgroundColor: "blue",
    borderRadius: 40,
  }

});
