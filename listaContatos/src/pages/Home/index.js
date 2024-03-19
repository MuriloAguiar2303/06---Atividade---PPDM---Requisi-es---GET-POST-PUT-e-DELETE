import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
  const navigation = useNavigation();

  const navegaHome = () => {
    navigation.navigate('CadastraContato')
  }

  return (
    <View style={styles.container}>
      <View style={{display:'flex', flexDirection:'row', backgroundColor:"black",width:'100%', height:"24%",padding:10}}>
            <Button title='Cadastrar Contato' onPress={navegaHome} style={{height:"100%",width:"40%"}}></Button>
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