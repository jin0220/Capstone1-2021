import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Platform, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const AccountScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    width: 150, height: 150, backgroundColor: '#eee', borderRadius: 75,
                    alignItems: 'center', justifyContent: 'center', marginVertical: 30
                }}>
                    <Ionicons name="person" size={120} color="#ccc" />
                </View>

                <View style={styles.footer}>
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
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={styles.text_footer}>아이디</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#D9B650"
                            size={20}
                        />
                        <Text style={[styles.textInput, { paddingTop: 10, color: '#777' }]}>
                            {"아이디"}
                        </Text>
                    </View>
                    <Text style={{ color: 'red', fontSize: 12, marginLeft: 25 }}>※아이디는 변경하실 수 없습니다.</Text>

                    <Text style={styles.text_footer}>비밀번호</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#D9B650"
                            size={20}
                        />
                        <TextInput
                            placeholder="비밀번호를 입력해주세요"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={styles.text_footer}>비밀번호 확인</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#D9B650"
                            size={20}
                        />
                        <TextInput
                            placeholder="비밀번호 확인을 입력해주세요"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>
                </View>{/*footer*/}
            </View>{/*header*/}
        </ScrollView>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5DD7B',
    },
    footer: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: 50,
    },
    text_footer: {
        color: 'gray',
        fontSize: 17,
        marginTop: 30
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
});