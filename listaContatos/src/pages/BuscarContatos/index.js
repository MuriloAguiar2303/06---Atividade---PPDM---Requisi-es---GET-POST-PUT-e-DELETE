import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";


import api from '../../services/api/api';

export default function BuscarContato() {

  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Celular, setCelular] = useState();
  const [Telefone, setTelefone] = useState();




  const getCliente = async () => {
    try {
        if (Nome == '' || Nome == null) {
            setAlertMessage('Preencha corretamente o campo nome!')
            handleShowAlert();
            return;
        }
        if (Email == '' || Email == null) {
            setAlertMessage('Preencha corretamente o campo Email')
            handleShowAlert();
            return;
        }
        if (Celular == '' || Celular == null) {
            setAlertMessage('Preencha corretamente o campo Celular')
            handleShowAlert();
            return;
        }
        if (Telefone == '' || Telefone == null) {
            setAlertMessage('Preencha corretamente o campo Telefone')
            handleShowAlert();
            return;
        }
       

        const response = await api.get(`/contatos`, { nome: Nome.trim(), tel_cel: Celular.trim(), tel_fixo: Telefone.trim(), email: Email.trim() })
            .catch(function (error) {
                if (error.response) {
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.headers);
                } else if (error.request) {
                    if ((error.request._response).includes('Failed')) {
                        console.error("Erro ao conectar com a API");
                    }

                } else {
                    console.error('Error:', error.message);
                }
                console.error(error.config);
            });
        console.log((response));
        if (response != undefined) {
            if (response.data.length === 0) {
                setAlertMessage('Registro inserido com sucesso!')
                setNome('');
                setEmail('');
                setCelular();
                setTelefone();
                handleShowAlert();
            }
            else {
                setAlertMessage('Ocorreu um erro ao inserir o registro');
                handleShowAlert();
            }
        }
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <SafeAreaView style={styles.container}>


      <Text>Informe o nome do cliente e clique em Pesquisar</Text>
      <TextInput
        ref={inputNome}
        mode='outlined'
        label='Nome'
        onChangeText={setNomePesq}
        placeholder='Nome do cliente'
        style={styles.inputText}
      />

      <TouchableOpacity
        onPress={() => { getCliente(); handleButtonClick }}

        style={[styles.alignVH, { width: '80%', height: 40, borderColor: 'black', backgroundColor: 'blue', borderRadius: 4 }]}>
        <Text style={{ color: 'white' }}>Pressione para Pesquisar</Text>
      </TouchableOpacity>

      {cliente[0] &&
        <View style={{ width: '80%' }}>
          <Text >ID do cliente:</Text>
          {/* <TextInput style={[styles.inputText, { width: '20%' }]} >{cliente[0]?.id}</TextInput> */}
          <TextInput style={[styles.inputText, { width: '20%' }]} value={cliente[0]?.id.toString()} readOnly></TextInput>
          <Text>Nome do cliente:</Text>
          <TextInput style={[styles.inputText, { width: '100%' }]} value={cliente[0]?.nome} readOnly></TextInput>


          <Text>Idade do cliente:</Text>
          <TextInput style={[styles.inputText, { width: '20%' }]} value={cliente[0]?.idade.toString()} readOnly></TextInput>
        </View>
      }

      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  inputFocus: {
    borderWidth: 2,
    borderColor: '#576CE7',
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 10
  },
  alignVH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    borderRadius: 5,
    padding: 5
  },
  alignLeft: {

    // flexDirection:'row',
    // justifyContent:'flex-start',

    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'auto',
    paddingLeft: 45
  }
});