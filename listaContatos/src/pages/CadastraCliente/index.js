import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function NovoCliente(){
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celuar, setCelular] = useState();
    const [Telefone, setTelefone] = useState();

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
