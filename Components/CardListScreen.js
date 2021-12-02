import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import CardItemDetails from './CardItem1';

const Card = ({ navigation }) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('CardItemDetails')}>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{ uri: "https://source.unsplash.com/collection/190727/1024x768" }}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test</Text>
                        <Text style={styles.cardDetails}>test</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CardItemDetails')}>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{ uri: "https://source.unsplash.com/collection/190727/1024x768" }}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test</Text>
                        <Text style={styles.cardDetails}>test</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.0,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 9,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444'
    },
});