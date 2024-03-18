import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function NovoCliente(){
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celuar, setCelular] = useState();
    const [Telefone, setTelefone] = useState();

}


export default function CadastraCliente() {
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
