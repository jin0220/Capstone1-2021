import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Search Screen</Text>
        </SafeAreaView >
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="mm" 
                component={SearchScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#f4511e',
                        
                    }
                }} />
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
