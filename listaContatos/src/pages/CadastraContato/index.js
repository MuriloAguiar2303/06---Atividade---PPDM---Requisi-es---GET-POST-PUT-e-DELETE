import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView,Alert } from 'react-native';

import api from '../../services/api/api'


export default function CadastraContato() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState();
    const [Telefone, setTelefone] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


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
                if (response.data.message ) {
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
            <View style={styles.miniContainer}>
                <View>
                    <Text style={styles.Texto}>Nome do Cliente:</Text>
                    <TextInput value={Nome} onChangeText={setNome} style={styles.Input}></TextInput>
                </View>
                <View>
                    <Text style={styles.Texto}>Email do Cliente:</Text>
                    <TextInput value={Email} onChangeText={setEmail} style={styles.Input}></TextInput>
                </View>
                <View>
                    <Text style={styles.Texto}>Telefone do Cliente:</Text>
                    <TextInput value={Telefone} onChangeText={setTelefone} style={styles.Input}></TextInput>
                </View>
                <View>
                    <Text style={styles.Texto}>Celular do Cliente:</Text>
                    <TextInput value={Celular} onChangeText={setCelular} style={styles.Input}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.Botao}
                        onPress={() => {
                            SalvarCliente()
                        }}
                    >

                        <Text>Cadastrar contato</Text>
                    </TouchableOpacity >
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texto: {
        fontSize: 20,
        marginBottom: 5
    },
    Input: {
        borderWidth: 1,
        backgroundColor: '#fdfdf9',
        borderRadius:15,
        textAlign:'center'
    },
    Botao: {
        borderWidth: 1,
        borderColor: "#7D7D7D",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width:"60%",
        left:60,
        backgroundColor: '#fdfdf9',
    },
    miniContainer: {
        width: "80%",
        gap: 30,
    }
});
