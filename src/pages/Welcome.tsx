import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const statusBarHeight = Constants.statusBarHeight

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>Gerencie {'\n'} suas plantas de{'\n'} forma fácil</Text>

                <Image
                    style={style.wateringImg}
                    source={wateringImage}
                    resizeMode="contain"
                />

                <Text style={style.subtitle}>
                    Não esqueça mais de regar suas plantas.Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleStart}>

                <Text>
                    <Feather name="chevron-right" style={style.buttonIcon} />
                </Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: statusBarHeight + 20
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20

    },
    wateringImg: {
        height: Dimensions.get('window').width * 0.7
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text

    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    },



})