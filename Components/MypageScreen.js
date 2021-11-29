import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Dimensions, CheckBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FavoritesScreen from './FavoritesScreen';
import ItemDetailScreen from './ItemDetailScreen';
import SettingScreen from './SettingScreen';
import AllergysList from './AllergysList';
import AccountScreen from './AccountScreen';

import userData from './LogInScreen';

import { getDatabase, ref, set, child, get } from "firebase/database"; //9버전
<<<<<<< HEAD
import { render } from 'react-dom';
=======
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
>>>>>>> main

var myAllergys = [];

function MypageScreen({ navigation }) {
    useEffect(() => {
        dataLoad();
    }, []);

    function dataLoad() { // 파이어베이스에 저장된 알레르기 데이터 가져오기
        const userId = 'me';
        const dbRef = ref(getDatabase());
        get(child(dbRef, `allergys/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                myAllergys = snapshot.val().myAllergys;
                load(myAllergys);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const [checkedInputs, setCheckedInputs] = useState([]);

    function load(data) { //저장된 알레르기로 초기화
        setCheckedInputs(data);
    }

    const changeHandler = (checked, id) => {
        if (checked) {
            setCheckedInputs([...checkedInputs, id]);
        } else {
            // 체크 해제
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
        }
    };

    const store = () => {
        setModalVisible(!modalVisible);
        myAllergys = checkedInputs; //저장되면 저장된 값으로 변경
        allergyCreate();
    }

    function allergyCreate() { //사용자에 대한 알레르기 추가
        //9버전
        const db = getDatabase();
        set(ref(db, 'allergys/' + 'me'), { //임시 아이디
            myAllergys: myAllergys
        }).then(
            console.log("전송 성공")
        ).catch((error) => {
            console.log("전송 실패")
        });
    }

    const cancel = () => {
        setModalVisible(!modalVisible);
        setCheckedInputs(myAllergys); //취소하면 이전에 저장된 값이 들어감
    }

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

<<<<<<< HEAD
    // function LoginState(props){
    //     id=props.name;
    //     console.log(id);
    // }

    // console.log(userData);

    // if(userData[0][id] !== null){
        var id = userData[0]['id'];
    // }
    // else{
        // var id = "로그인 해주세요";
    // }
    // var id = userData[0]['id'];

    return (

        <View style={styles.container}>
            <View style={styles.profileBox}>
                <View style={{ width: 70, height: 70, backgroundColor: '#eee', borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="person" size={50} color="#ccc" />
                </View>
                <View style={{ marginLeft: 20 }}>
                    {/* userData[0]['id']?.id */}
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{id}</Text>
{/* <Text style={{ color: '#888' }}>20대</Text> */}
                    <Text style={{ color: '#888' }}>
                        알레르기 <Text style={{ color: '#83580B' }}>{checkedInputs.length}</Text>개 선택
                    </Text>
                </View>
            </View>

            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Account')}>
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
                                    <TouchableOpacity style={styles.cancel} onPress={() => cancel()}>
                                        <Text style={{ color: '#D9B650' }}>취소</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.store} onPress={() => store()}>
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
                    <AllergysList data={checkedInputs} />
                </View>

            </View>

        </View >
    );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#D9B650'
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
                    // headerRight: () => (
                    //     <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                    //         {isChecked ? (
                    //             <AntDesign name="heart" size={24} color="white" style={{ marginRight: 5 }} />
                    //         ) : (
                    //             <AntDesign name="hearto" size={24} color="white" style={{ marginRight: 5 }} />
                    //         )}
                    //     </TouchableOpacity>
                    // ),
                    headerShown: false
                }} />
            <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: '내 정보 수정',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: 17, color: 'white', marginRight: 10 }}>저장</Text>
                        </TouchableOpacity>
                    ),
                }} />
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
        borderColor: '#D9B650',
        borderWidth: 1
    },
    store: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9B650',
    }
});