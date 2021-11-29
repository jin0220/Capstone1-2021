import React from "react";
import {View, Text, StyleSheet, Button, Dimensions, Image, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MatterialIcons from "react-native-vector-icons/MaterialIcons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import userData from './LogInScreen';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../Img/ingredients.png')}
                style={styles.logo}
                resizeMode='stretch'
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>footer</Text>
                <Text style={styles.text}>footer</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>

                        <View style={styles.signIn}>
                            <Text style={styles.textSign}>시작하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.button} marginTop={20}>
                    <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')} >
                        <View style={styles.signIn}>
                            <Text style={styles.textSign}>로그인하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D9B650',   
    },
    header:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    logo:{
        width: height_logo,
        height: height_logo,
    },
    title:{
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text:{
        color: 'gray',
        marginTop: 5,
    },
    button:{
        alignItems:'flex-end',
        marginTop: 50,
        backgroundColor: '#D9B650',
        width: 300,
        height: 40,
        borderRadius: 50,
    },
    signIn:{
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign:{
        color: 'white',
        fontWeight: 'bold',
    }
});