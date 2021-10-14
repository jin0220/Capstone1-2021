import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemsListScreen from './ItemsListScreen';
import ItemDetailScreen from './ItemDetailScreen';
import { AntDesign } from '@expo/vector-icons';

function CategoryScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/*상태바 아래에 간격이 생기는 이유 - SafeAreaView 때문*/}
            <FlatList
                data={[
                    { key: '리스트1' },
                    { key: '리스트2' },
                    { key: '리스트3' },
                    { key: '리스트4' },
                    { key: '리스트5' },
                    { key: '리스트6' },
                    { key: '리스트7' },
                    { key: '리스트8' },
                    { key: '리스트9' },
                    { key: '리스트10' },
                ]}
                renderItem={({ item }) =>
                    <View style={styles.categoryListBox}>
                        <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Items')}>
                            <View style={styles.box}>
                                <View style={styles.categoryicon} />
                                <Text style={styles.categoryName}>{item.key}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="#888" />
                        </TouchableOpacity>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="mm" 
                component={CategoryScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#f4511e',
                        
                    }
                }} />
            <Stack.Screen name="Main" component={CategoryScreen} />
            <Stack.Screen name="Items" component={ItemsListScreen} />
            <Stack.Screen name="Detail" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryListBox: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        // borderBottomColor: '#ddd',
        // borderBottomWidth: 1,
        justifyContent: 'center',
        height: 55,
        backgroundColor: '#fff',
    },
    categoryList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', //요소들 사이에 동일한 간격을 둔다.
        width: '100%',
        height: 50,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryicon: {
        width: 30,
        height: 30,
        marginRight: 10,
        backgroundColor: '#ddd'
    },
    categoryName: {
        fontSize: 17,
    },
});