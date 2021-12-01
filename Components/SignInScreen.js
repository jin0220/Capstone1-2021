import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getDatabase, ref, set } from "firebase/database"; //9버전

const SignInScreen = () => {

    const [data, setData] = React.useState({
        name: '',
        id: '',
        password: '',

        check_textInputChange1: false, //이름
        check_textInputChange2: false, //아이디
        secureTextEntry: true,
    });

    const textInputChange1 = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                name: val,
                check_textInputChange1: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange1: false
            });
        }
    }

    const textInputChange2 = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                id: val,
                check_textInputChange2: true
            });

        } else {
            setData({
                ...data,
                id: val,
                check_textInputChange2: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    function signIn() {
        //9버전
        const db = getDatabase();
        set(ref(db, 'users/' + data.id), {
            id: data.id,
            name: data.name,
            password: data.password
        }).then(
            console.log("전송 성공")
        ).catch(
            console.log("전송 실패")
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>환영합니다!</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <Text style={styles.text_footer}>이름</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#D9B650"
                            size={20}
                        />
                        <TextInput
                            placeholder="이름을 입력해주세요"
                            style={styles.textInput}
                            value={data.name}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange1(val)}
                        />
                        {data.check_textInputChange1 ?
                            <Feather
                                name="check-circle"
                                color="gray"
                                size={20}
                            />
                            : null
                        }
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 30 }]}>아이디</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#D9B650"
                            size={20}
                        />
                        <TextInput
                            placeholder="아이디를 입력해주세요"
                            style={styles.textInput}
                            value={data.id}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange2(val)}
                        />
                        {data.check_textInputChange2 ?
                            <Feather
                                name="check-circle"
                                color="gray"
                                size={20}
                            />
                            : null}
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 30 }]}>비밀번호</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#D9B650"
                            size={20}
                        />
                        <TextInput
                            placeholder="비밀번호를 입력해주세요"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput} value={data.password} autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="#D9B650"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => signIn()}>
                        <View style={styles.button}>
                            <Text style={styles.textSign}>가입하기</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9B650',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: 'gray',
        fontSize: 17
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#D9B650',
        width: 330,
        height: 40,
        borderRadius: 50,

    },
    signIn: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        paddingTop: 10,
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
});