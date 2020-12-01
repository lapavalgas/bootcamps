import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import mapMarker from '../assets/mapmarker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // o useFocusEffect é uma ação disparada sempre que a tela receber FOCO do usuário | e pode ser utilizado para subistituir o useEffect()
import api from '../services/api';

interface Orphanage {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
}


export default function OrphanagesMap() {
    // const [orphanages, setOrphanages] = useState([]); // essa é a forma padrão de representar um estado
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);  // essa é a forma de utilizar um dado tipado, observar que é uma lista e por isso useState recebe uma lista vazia para inicializar

    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    })

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate('OrphanagesDetails', { id }); // após a virgula são os parametros. O primeiro parametro é uma string com o endereço/página a ser acessado
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition');
    }


    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map} initialRegion={{
                    latitude: -27.6004387,
                    longitude: -48.6153034,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapMarker}
                            // No calloutAnchor os números representam o tamanho do objeto e não pixels!
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8,
                            }}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                        >
                            {/* utilizar o 'tooltip={true}' auxilia a iniciar uma estilização do zerp sem pegar estilização reactnative 
                ... E sempre que passar apenas uma propriedade e for TRUE então não precisa passar o valor
                ... Portanto basta passar a propriedade 'tooltip' ... OK*/}
                            {/* Sempre que for passar um parametro para atributos é necessário utilizar uma arrow function */}
                            <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)} >
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{orphanage.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}



            </MapView >

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {orphanages.length} casa lar encontradas
          </Text>

                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color='#FFF' />
                </RectButton>

            </View>

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    calloutContainer: {
        width: 165,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    calloutText: {
        fontFamily: 'Nunito_700Bold',
        color: '#0089a5',
        fontSize: 14,

    },
    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,

    },
    footerText: {
        fontFamily: 'Nunito_700Bold',
        color: '#8FA7B3',

    },
    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15C3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',

    },
});


