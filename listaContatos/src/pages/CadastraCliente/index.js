import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function CadastraCliente(){
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celuar, setCelular] = useState();
    const [Telefone, setTelefone] = useState();
    const [showAlert, setShowAlert] = useState(false);


    const SalvarCliente = async () => {
        try {
            if (Nome == '' || Nome == null) {
                setAlertMessage('Preencha corretamente o campo nome!')
                handleShowAlert();
                return;
            }
            if (txtIdade == '' || txtIdade == null) {
                setAlertMessage('Preencha corretamente o campo idade')
                handleShowAlert();
                return;
            }
            if (isNaN(Number(txtIdade))) {
                setAlertMessage("A idade deve ser um número!");
                handleShowAlert()
                return;
            }
    
            const response = await api.post(`/clientes`, { nome: txtNome.trim(), idade: Number(txtIdade) })
                .catch(function (error) {
                    if (error.response) {
                        // A requisição foi feita e o servidor respondeu com um código de status
                        // que sai do alcance de 2xx
                        console.error(error.response.data);
                        console.error(error.response.status);
                        console.error(error.response.headers);
                    } else if (error.request) {
                        // A requisição foi feita mas nenhuma resposta foi recebida
                        // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
                        // http.ClientRequest no node.js
                        // console.error(error.request);
                        if ((error.request._response).includes('Failed')) {
                            console.error("Erro ao conectar com a API");
                        }
    
                    } else {
                        // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
                        console.error('Error:', error.message);
                    }
    
    
                    console.error(error.config);
                });
            console.log((response));
            if (response != undefined) {
                if (response.data[0].affectedRows == 1) {
                    setAlertMessage('Registro inserido com sucesso!')
                    setTxtNome('');
                    setTxtIdade('');
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
                    <TextInput></TextInput>
                </View>
                <View>
                    <Text>Telefone do Cliente:</Text>
                    <TextInput></TextInput>
                </View>
                <View>
                    <Text>Celular do Cliente:</Text>
                    <TextInput></TextInput>
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
