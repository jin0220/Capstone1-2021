import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FavoritesScreen from './FavoritesScreen';
import ItemDetailScreen from './ItemDetailScreen';
import SettingScreen from './SettingScreen';

function MypageScreen({ navigation }) {
    const allergys = ["우유", "밀", "우유1", "밀2", "우유3", "밀4"];
    const allergysList = allergys.map(item =>
        <View style={styles.allergyBox} key={item}>
            <View style={styles.allergyImage} />
            <Text>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <View style={{ width: 70, height: 70, backgroundColor: '#eee', borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="person" size={50} color="#ccc" />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>아이디</Text>
                    <Text style={{ color: '#888' }}>20대</Text>
                    <Text style={{ color: '#888' }}>
                        알레르기 <Text style={{ color: '#f4511e' }}>0</Text>개 선택
                    </Text>
                </View>
            </View>

            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn}>
                    <Text>내 정보 수정</Text>
                </TouchableOpacity>

                <View style={styles.divide2} />

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Favorites')}>
                    <AntDesign name="hearto" size={17} color="black" style={{ marginRight: 5 }} />
                    <Text>즐겨찾기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divide} />

            <View>
                <View style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>알레르기</Text>
                </View>

                <View style={styles.allergyListBox}>
                    {allergysList}
                </View>
            </View>

        </View >
    );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTintColor: 'white',
        }}>
            <Stack.Screen
                name="마이페이지"
                component={MypageScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                            <Ionicons name="settings-sharp" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                }} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: '즐겨찾기' }} />
            <Stack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}>
                            <AntDesign name="hearto" size={24} color="white" style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                    ),
                }} />
            <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileBox: {
        flexDirection: 'row',
        padding: 20
    },
    btnBox: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginHorizontal: 20,
        height: 40,
        alignItems: 'center'
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divide: {
        width: '100%',
        height: 8,
        backgroundColor: '#eee'
    },
    divide2: {
        width: 1,
        height: '100%',
        backgroundColor: '#eee'
    },
    allergyListBox: {
        flexDirection: 'row',
        flexWrap: 'wrap', //공간이 없으면 줄바꿈을 해줌
        paddingHorizontal: 25
    },
    allergyBox: {
        width: 60,
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    allergyImage: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#ddd',
        backgroundColor: '#ddd',
        marginBottom: 10,
    },
});