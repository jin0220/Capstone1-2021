import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function MypageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Mypage Screen</Text>
        </SafeAreaView >
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MypageScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'center',
    },
});