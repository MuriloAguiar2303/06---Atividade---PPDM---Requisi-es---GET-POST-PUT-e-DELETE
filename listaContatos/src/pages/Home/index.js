import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const navegaHome = () => {
    navigation.navigate('CadastraContato')
  }

  const navegaBuscaContato = () => {
    navigation.navigate('BuscarContato')
  }

  const navegaCreditos = () => {
    navigation.navigate('Creditos')
  }

  const navegaTodosContatos = () => {
    navigation.navigate('TodosContatos')
  }

  return (
    <View style={styles.container}>
      <View  style={{display:'flex', flexDirection:'row',justifyContent:"space-between",width:'100%', height:"24%",padding:10}}>
          
            <TouchableOpacity style={{width:"45%",height:"100%",  backgroundColor:"blue", display:'flex', justifyContent:"center",alignItems:"center"}} title='Cadastrar Contato' onPress={navegaHome} ><Text style={{color:"white"}}>Cadastrar Cliente</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"45%", height:"100%", backgroundColor:"blue",display:'flex', justifyContent:"center",alignItems:"center"}} title='BuscarContato' onPress={navegaBuscaContato} ><Text style={{color:"white"}}>Buscar Contato</Text></TouchableOpacity>
           
      </View>
      <View  style={{display:'flex', flexDirection:'row',justifyContent:"space-between",width:'100%', height:"24%",padding:10}}>
          
            <TouchableOpacity style={{width:"45%",height:"100%",  backgroundColor:"blue", display:'flex', justifyContent:"center",alignItems:"center"}} title='Cadastrar Contato' onPress={navegaTodosContatos} ><Text style={{color:"white"}}>Todos Contatos</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"45%", height:"100%", backgroundColor:"blue",display:'flex', justifyContent:"center",alignItems:"center"}} title='BuscarContato' onPress={navegaCreditos} ><Text style={{color:"white"}}>Creditos</Text></TouchableOpacity>
           
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