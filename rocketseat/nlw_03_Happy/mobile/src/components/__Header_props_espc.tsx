import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HeaderProps {
    title: string;
    noNeed?: number; // o ponto de interrogação indica propriedades não obrigatórias!
}

export default function Header({ title }: HeaderProps) { // para utilizar props é necessário especificar como paremtro na função; esse estilo especifica direto o atributo da props
    return (
        <View style={styles.container}>
            {/* exemplo utilizando a props diretamente */}
            <Text style={styles.title}>{title}</Text> 
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