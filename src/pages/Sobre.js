
import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text>Sobre mim</Text>
            <Text>
                Meu nome é Arthur, tenho 17 anos, gosto de animais, 
                de anime e mitologia grega/nórdica.
            </Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;