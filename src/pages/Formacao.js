import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Formacao = ({ navigation }) => {
    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Sobre mim</Text>
            </View>

            <View style={estilo.textoContainer}>
                <Text style={estilo.texto}>
                Testando as Formações
                </Text>

                <Text style={estilo.texto}>
                    A
                </Text>
            </View>

            <View style={estilo.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Habilidades')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Habilidades</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        fontFamily: "Trebuchet MS",
    },
    titulo: {
        fontSize: '2em',
        marginBottom: 10,
        color: "#00a",
        fontWeight: "bold",
        fontFamily: 'inherit',
    },
    textoContainer: {
        display: "flex",
        flexGrow: 2,
    },
    botao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 1,
        width: "48%",
    },
    textoBotao: {
        fontSize: "1.3em",
        fontFamily: 'inherit',
        fontWeight: 'bold',
        color: "#567ebb",
    },
    texto: {
        fontSize: "1.3em",
        marginBottom: 15,
        fontFamily: 'inherit',
    },
    botoes: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#009ddd",
        borderRadius: 3,
        gap: 3,
    },
});

export default Formacao;
