import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemsListScreen from './ItemsListScreen';
import ItemDetailScreen from './ItemDetailScreen';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

function CategoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: '과자 / 간식', name: 'popcorn' },
                    { key: '유제품', name: 'cheese' },
                    { key: '음료 / 커피 / 차', name: 'coffee' },
                    { key: '주류', name: 'glass-mug-variant' },
                    { key: '냉장 / 냉동 / 반찬', name: 'bowl-mix-outline'},
                    { key: '통조림 / 간편식', name: 'clock-fast' },
                    { key: '소스 / 오일 / 분말', name: 'bottle-wine-outline' },
                    { key: '건강식품', name: 'arm-flex-outline' },
                    { key: '유아식품', name: 'baby-face-outline'},
                    { key: '친환경 전문점', name: 'leaf' },
                    { key: '프랜차이즈', name: 'food' },
                    { key: '편의점', name: 'store-24-hour'},
                    { key: '펫푸드', name: 'dog'},
                ]}
                renderItem={({ item }) =>
                    <View style={styles.categoryListBox}>
                        <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Items', { title: item.key })}>
                            <View style={styles.box}>
                                <View style={styles.categoryicon}>
                                    <MaterialCommunityIcons name={item.name} size={30} color='#D9B650'/>
                                </View>
                                <Text style={styles.categoryName}>{item.key}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="#888" />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    function a() {
        setIsChecked(!isChecked);
        // navigation.navigate('Detail');
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#D9B650'
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white',
                // headerBackImage: () => {
                //     const style = {
                //         marginRight: 5,
                //         marginLeft: Platform.OS === 'ios' ? 11 : 0,
                //     };
                //     return (
                //         <AntDesign name="left" size={20} color="white" style={style} />
                //     );
                // },
            }}
        >
            <Stack.Screen name="카테고리" component={CategoryScreen} />
            <Stack.Screen
                name="Items"
                component={ItemsListScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerTitleAlign: 'center'
                })}
            />
            <Stack.Screen
                name="Detail"
                component={ItemDetailScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => a()}>
                            {isChecked ? (
                                <AntDesign name="heart" size={24} color="white" style={{ marginRight: 5 }} />
                            ) : (
                                <AntDesign name="hearto" size={24} color="white" style={{ marginRight: 5 }} />
                            )}
                        </TouchableOpacity>
                    ),
                }} />
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
    },
    categoryName: {
        fontSize: 17,
    },
});