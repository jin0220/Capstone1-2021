import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';

const LogInScreen = () => {

    const [data, setData] = React.useState({
        id: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });


    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                id: val,
                check_textInputChange: true
            });
        } else{
            setData({
                ...data,
                id: val,
                check_textInputChange: false
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

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>환영합니다!</Text>
            </View>
            <View style={styles.footer}>

                <Text style={styles.text_footer}>아이디</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#D9B650"
                        size={20}
                    />
                    <TextInput
                        placeholder="아이디를 입력해주세요"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>비밀번호</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#D9B650"
                        size={20}
                    />
                    <TextInput
                        placeholder="비밀번호를 입력해주세요"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput} 
                        autoCapitalize="none"
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
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.textSign}>로그인하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LogInScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D9B650',
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer:{
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    text_header:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer:{
        color: 'gray',
        fontSize: 17
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    button:{
        alignItems:'center',
        marginTop: 20,
        backgroundColor: '#D9B650',
        width: 330,
        height: 40,
        borderRadius: 50,
        
    },
    signIn:{
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign:{
        paddingTop: 10,
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
});