import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommentMessage = () => {

    const [data, setData] = React.useState({
        id: '',
        name: '',
        manufacture: '',
        comment: '',
        check_textInputId: false,
        check_textInputName: false,
        check_textInputManufacture: false,
        check_textInputChange: false, //기타의견

    });


    const textInputId = (val) => { //아이디
        if(val.length != 0){
            setData({
                ...data,
                id: val,
                check_textInputId: true
            });
        } else{
            setData({
                ...data,
                id: val,
                check_textInputId: false
            });
        }
    }

    const textInputName = (val) => { //제품명
        if(val.length != 0){
            setData({
                ...data,
                id: val,
                check_textInputName: true
            });
        } else{
            setData({
                ...data,
                id: val,
                check_textInputName: false
            });
        }
    }

    const textInputManufacture = (val) => { //제조사
        if(val.length != 0){
            setData({
                ...data,
                id: val,
                check_textInputManufacture: true
            });
        } else{
            setData({
                ...data,
                id: val,
                check_textInputManufacture: false
            });
        }
    }

    const textInputChange = (val) => { //기타의견
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



    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>귀중한 시간을 내주셔서 감사합니다!</Text>
            </View>
            
            <View style={styles.footer}>
            <ScrollView>
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
                        onChangeText={(val) => textInputId(val)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>제품명</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#D9B650"
                        size={20}
                    />
                    <TextInput
                        placeholder="제품명을 입력해주세요"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputName(val)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>제조사</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#D9B650"
                        size={20}
                    />
                    <TextInput
                        placeholder="제조사를 입력해주세요"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputManufacture(val)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color="gray"
                        size={20}
                    />
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>기타의견</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#D9B650"
                        size={20}
                    />
                    <TextInput
                        placeholder="기타의견이 있으시면 입력해주세요"
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

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.textSign}>개발자에게 의견 보내기</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default CommentMessage;

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
        fontSize: 24,
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