import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CategoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/*상태바 아래에 간격이 생기는 이유 - SafeAreaView 때문*/}
            <FlatList
                data={[
                    { key: 'FAQ', icon: 'message-circle' },
                    { key: '이용약관', icon: 'file-text' },
                    { key: '탈퇴하기', icon: 'log-out' },
                    { key: '로그아웃', icon: 'unlock' },
                ]}
                renderItem={({ item }) =>
                    <View style={styles.categoryListBox}>
                        <TouchableOpacity style={styles.categoryList}>
                            <View style={styles.box}>
                                {/* <View style={styles.categoryicon} /> */}
                                {/* <Entypo name="log-out" size={24} color="black" style={styles.categoryicon} /> */}
                                <Feather name={item.icon} size={24} color="#555" style={styles.categoryicon} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    categoryListBox: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 60,
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
        // width: 30,
        // height: 30,
        marginRight: 10,
        // backgroundColor: '#ddd'
    },
    categoryName: {
        fontSize: 17,
    },
});