import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Dimensions, FlatList, CheckBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FavoritesScreen from './FavoritesScreen';
import ItemDetailScreen from './ItemDetailScreen';
import SettingScreen from './SettingScreen';
import AllergysList from './AllergysList';

function MypageScreen({ navigation }) {
    var myAllergys = ["우유", "복숭아", "잣"];

    const [checkedInputs, setCheckedInputs] = useState([]);

    const changeHandler = (checked, id) => {
        if (checked) {
            setCheckedInputs([...checkedInputs, id]);
        } else {
            // 체크 해제
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
        }
    };

    //즉시 실행 함수
    (() => {
        for (var i = 0; i < myAllergys.length; i++) {
            if (!checkedInputs.includes(myAllergys[i])) {
                changeHandler(true, myAllergys[i]);
                // console.log(myAllergys[i]);
            }
        }
    })()

    const [count, setCount] = useState(0); //알레르기 개수

    const [modalVisible, setModalVisible] = useState(false);

    const modalEl = useRef();

    // function handleClickOutside() {
    //     if (modalVisible && !modalEl.current.contains(target)) {
    //         setModalVisible(false);
    //     }
    // }

    const data = [
        { key: "우유", check: false },
        { key: "밀", check: false },
        { key: "알류", check: false },
        { key: "메밀", check: false },
        { key: "땅콩", check: false },
        { key: "대두", check: false },
        { key: "잣", check: false },
        { key: "호두", check: false },
        { key: "게", check: false },
        { key: "새우", check: false },
        { key: "오징어", check: false },
        { key: "고등어", check: false },
        { key: "조개류", check: false },
        { key: "복숭아", check: false },
        { key: "토마토", check: false },
        { key: "닭고기", check: false },
        { key: "돼지고기", check: false },
        { key: "쇠고기", check: false },
        { key: "아황산류", check: false },
    ];


    function all() {
        myAllergys = checkedInputs;
        console.log(myAllergys);
    }

    const dataList = data.map(item =>
        <TouchableOpacity style={styles.ItemsListBox} key={item.key}
            onPress={(e) => changeHandler(checkedInputs.includes(item.key) ? false : true, item.key)}
        >
            <Text>{item.key}</Text>
            <CheckBox
                value={checkedInputs.includes(item.key) ? true : false}
                onChange={(e) => changeHandler(checkedInputs.includes(item.key) ? false : true, item.key)}
            />
        </TouchableOpacity>
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
                        알레르기 <Text style={{ color: '#f4511e' }}>{checkedInputs.length}</Text>개 선택
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
                <View style={styles.title}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>알레르기</Text>

                    <Modal transparent={true} visible={modalVisible}>
                        <View style={styles.modalBackground}>
                            <View style={styles.modal} ref={modalEl}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10 }}>알레르기를 선택해주세요.</Text>

                                <ScrollView style={{ width: '100%' }}>
                                    {dataList}
                                </ScrollView>

                                <View style={{
                                    width: '100%', flexDirection: 'row', height: 50, marginTop: 10
                                }}>
                                    <TouchableOpacity style={styles.cancel} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={{ color: 'tomato' }}>취소</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.store} onPress={() => all()}>
                                        <Text style={{ color: 'white' }}>저장</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Ionicons name="add" size={24} color="#888" />
                    </TouchableOpacity>

                </View>
                <View style={{ paddingLeft: 15 }}>
                    <AllergysList data={myAllergys} getCount={setCount} />
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
    title: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    //모달창
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    modal: {
        alignItems: 'center',
        width: "80%",
        height: "60%",
        backgroundColor: '#fff',
        padding: 20,
    },
    ItemsListBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cancel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'tomato',
        borderWidth: 1
    },
    store: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
    }
});