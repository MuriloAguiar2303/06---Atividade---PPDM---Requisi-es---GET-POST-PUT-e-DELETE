import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";


import api from '../../services/api/api';

export default function BuscarContato() {
    const [contato, setContato] = useState([]);
    const [nomePesq, setNomePesq] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    function handleButtonClick() {

        inputNome.current.focus();
      }
          const handleShowAlert = () => {
        setShowAlert(true);
      };
    

      const hideAlert = () => {
        setShowAlert(false);
      };
    

      useEffect(() => {
        if (showAlert) {
          Alert.alert(
            'Atenção!',
            alertMessage,
            [
              {
                text: 'OK',
                onPress: () => {
                  hideAlert();
                }
              }
            ],
            { cancelable: false }
          );
        }
      }, [showAlert]);
    

    const getContato = async () => {
        try {
            setNomePesq(nomePesq.trim());
            // console.log((nomePesq.length));
            if (nomePesq != null && nomePesq.length > 0) {
              const response = await api.get(`/contatos/${nomePesq}`)
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
              if (response != undefined) {
                if (response.data.length === 0) {
      
                  setAlertMessage('Registro não localizado na base de dados, verifique e tente novamente!')
                  handleShowAlert();
                }
                else {
                  console.log(response.data)
                  setContato(response.data);
                }
              }
          
            }
            else if (nomePesq == null || nomePesq == '') {
              setContato([]);
              setAlertMessage('Inform um valor válido para o campo!');
              handleShowAlert();
            }
          } catch (error) {
            console.log(error)
          }
      
        }


return (
    <SafeAreaView style={styles.container}>


        <Text style={{fontSize:17, fontWeight:'bold'}}>Informe o nome do contato que deseja Pesquisar</Text>
      <TextInput
      
        mode='outlined'
        label='Nome'
        onChangeText={setNomePesq}
        placeholder='Nome do cliente'
        style={styles.inputText}
      />

        <TouchableOpacity
            onPress={() => { getContato(); handleButtonClick }}

            style={[styles.alignVH, { width: '80%', height: 40,borderWidth:1, borderColor: 'black', backgroundColor: 'darkred', borderRadius: 4 }]}>
            <Text style={{ color: 'white' }}>Pressione para Pesquisar</Text>
        </TouchableOpacity>

        {contato[0] &&
            <View style={{ width: '80%', gap:5,marginTop:10 }}>
                <Text>ID:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} readOnly>{contato[0]?.id}</TextInput>
                <Text>Nome:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={contato[0]?.nome} readOnly></TextInput>
                <Text>Email:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={contato[0]?.email} readOnly></TextInput>
                <Text>Celular:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={contato[0]?.tel_cel.toString()} readOnly></TextInput>
                <Text>Fixo:</Text>
                <TextInput style={[styles.inputText, { width: '100%' }]} value={contato[0]?.tel_fixo.toString()} readOnly></TextInput>
            </View>
        }

        <StatusBar style="auto" />
    </SafeAreaView>

)
}

const styles = StyleSheet.create({
    inputFocus: {
        borderWidth: 2,
        backgroundColor: "#FFF",
    },
    container: {
        flex: 1,
        backgroundColor: '#fdfdf9',
        alignItems: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'auto',
        paddingLeft: 45
    }
});