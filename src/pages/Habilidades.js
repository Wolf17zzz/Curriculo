import React from 'react';
import { View, Text, Button } from 'react-native';

const Habilidades = ({ navigation }) => {
    return (
        <View>
            <Text> Testando as Habilidades</Text>
            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Habilidades;