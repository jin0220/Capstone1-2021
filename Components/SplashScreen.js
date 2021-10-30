import React from "react";
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>header</Text>
            </View>
            <View style={styles.footer}>
                <Text>footer</Text>
            </View>
        </View>
    );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f4511e',   
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
        marginTop: 30,
    },
    signIn:{
        width: 150,
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