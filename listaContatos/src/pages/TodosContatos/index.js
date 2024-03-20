import React,{useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, Text, TextInput ,TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';
import {useRoute, useFocusEffect } from '@react-navigation/native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import api from '../../services/api/api'


export default function TodosContatos() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState();
    const [Telefone, setTelefone] = useState();
    let armazenaData = [];
    
    // const route = useRoute();
    let [flatListItems, setFlatListItems] = useState([]);
    // const [refresh, setRefresh] = useState(route.params?.setRefresh ? route.params.setRefresh : false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

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

                    for(let i = 0; i < response.data.length; i++) {
                        armazenaData.push(response.data[i])
                    }

                    setFlatListItems(armazenaData)
                    console.log(armazenaData)
                    armazenaData = [];
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
    const excluirCliente = async (id) => {
        try {
            const response = await api.delete(`/clientes/${id}`).catch(function (error) {
                if (error.response) {
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.headers);
                    return;
                } else if (error.request) {
                    if ((error.request._response).includes('Failed')) {
                        console.error(error.request._response);
                        return;
                    }

                } else {
                    console.error('Error:', error.message);
                    return;
                }

            });

            if (response != undefined) {

                if (response.data.length >= 1) {

                    setRefresh(prevState => !prevState);
                    setAlertMessage('Registro excluído com sucesso!');
                }
                else {
                    setAlertMessage('Registro não localizado');
                }
                handleShowAlert();
            }
            // console.log(cliente);
        } catch (error) {
            // console.log(error)
            return;
        }

        let listItemView = (item) => {
            return (
    
                <View
                    key={item.id}
                    style={{height:300,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column', padding: 15, borderRadius: 10, shadowColor: 'black', elevation: 8 }}>
                    <Text style={{fontSize:14}}>ID</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.id}</Text>
    
                    <Text style={{fontSize:14}}>Nome</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.nome}</Text>
    
                    <Text style={{fontSize:14}}>Celular</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.tel_cel}</Text>

                    <Text style={{fontSize:14}}>Telefone fixo</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.tel_fixo}</Text>

                    <Text style={{fontSize:14}}>E-mail</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.email}</Text>
    
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(
                                    'Atenção!',
                                    'Deseja realmente excluir esse cliente?',
                                    [
                                        {
                                            text: 'OK',
                                            onPress: () => {
                                                excluirCliente(item.id);
                                                // setShowAlert(false)
                                            }
                                        },
                                        {
                                            text: 'Cancelar',
                                            onPress: () => {
                                                return;
                                            }
    
                                        }
                                    ],
                                    //Permite clicar fora da áre do alert para fechá-lo;
                                    { cancelable: true }
                                )
                            }}
                            style={[styles.alignVH, { paddingRight: 30 }]}
                        >
    
                            <FontAwesome5 name="trash-alt" color='red' size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navegaEditarCliente(item.id, item.nome, item.idade);    
                            }}>
                            <FontAwesome5 name="edit" color='blue' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
    
            );
        };


    useFocusEffect(
        useCallback(() => {
            PegarClientes();
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
           
           <View style={{ flex: 1, marginBottom: 10, width:'100%' }}>
                <FlatList
                    style={{ marginTop: 1 }}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    data={flatListItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => listItemView(item)}
                />
            </View>
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}}


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
