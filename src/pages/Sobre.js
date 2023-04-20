import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Sobre mim</Text>
            </View>

            <View style={estilo.textoContainer}>
                <Text style={estilo.texto}>
                Meu nome é Arthur, tenho 17 anos, gosto de animais, 
                de anime e mitologia grega/nórdica.
                </Text>

                <Text style={estilo.texto}>
                    Eu não tenho medo de me aventurar em novas tecnologias e estou sempre
                    disposto a aprender coisas novas.
                </Text>
            </View>

            <View style={estilo.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Formacao')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Formação</Text>
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
        color: "#00a",
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
        backgroundColor: "#00a",
        borderRadius: 3,
        gap: 3,
    },
});

export default Sobre;
