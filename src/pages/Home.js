import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Página Inicial</Text>

            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
                />

            <Button
                title="Formação"
                onPress={ () => navigation.navigate('Formacao') }
                />
            
        </View>
    );
}

export default Home;