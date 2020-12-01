import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HeaderProps {
    title: string;
    noNeed?: number; // o ponto de interrogação indica propriedades não obrigatórias!
}

export default function Header(props: HeaderProps) { // quando for trabalhar com props é importante passar como parametro para função do react
    return (
        <View style={styles.container}>
            {/* // para utilizar a props utilizar o nome da props mais o atributo desejado */}
            <Text style={styles.title}>{props.title}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    },
})