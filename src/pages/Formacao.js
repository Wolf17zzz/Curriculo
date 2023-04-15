import React from 'react';
import { View, Text, Button } from 'react-native';

const Formacao = ({ navigation }) => {
    return (
        <View>
            <Text> Testando a formação</Text>
            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Formacao;