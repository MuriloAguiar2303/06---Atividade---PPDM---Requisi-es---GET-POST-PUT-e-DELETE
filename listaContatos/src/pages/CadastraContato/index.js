import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import api from '../../services/api/api'


export default function CadastraContato(){
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState();
    const [Telefone, setTelefone] = useState();
    const [showAlert, setShowAlert] = useState(false);


    const SalvarCliente = async () => {
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
           
    
            const response = await api.post(`/contatos`, { nome: Nome.trim(), tel_cel: Celular.trim(), tel_fixo: Telefone.trim(), email: Email.trim() })
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
                if (response.data[0].affectedRows == 1) {
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
            // console.log(cliente);
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text>Nome do Cliente:</Text>
                    <TextInput value={Nome} onChangeText={setNome} ></TextInput>
                </View>
                <View>
                    <Text>Email do Cliente:</Text>
                    <TextInput value={Email} onChangeText={setEmail}></TextInput>
                </View>
                <View>
                    <Text>Telefone do Cliente:</Text>
                    <TextInput value={Telefone} onChangeText={setTelefone}></TextInput>
                </View>
                <View>
                    <Text>Celular do Cliente:</Text>
                    <TextInput value={Celular} onChangeText={setCelular}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        SalvarCliente()
                    }}
                ></TouchableOpacity>
            </View>
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
});
