import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';

import api from '../../services/api/api'


export default function TodosContatos() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState();
    const [Telefone, setTelefone] = useState();
    // const [showAlert, setShowAlert] = useState(false);


    const PegarClientes = async () => {
        try {


            const response = await api.get(`/contatos`)
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
                if (response.data.length >= 1) {
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
           
              
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texto: {
        fontSize: 20,
        marginBottom: 5
    },
    Input: {
        borderWidth: 1,
        width: '120%'
    },
    Botao: {
        width: 120,
        height: 50,
        borderWidth: 1,
        borderColor: "#7D7D7D",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,

    }
});
