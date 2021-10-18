import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Popup from './Popup';
import NutritionTable from './NutritionTable';

export default function ItemDetailScreen() {
    const [modalVisible, setModalVisible] = useState(false); //첫번째 원소 -> 현재 상태, 두번째 원소 -> setter 함수
    const [item, setItem] = useState("");

    function fuc(item) {
        setModalVisible(true);
        setItem(item); //모달창에 아이템 전달
    }

    const items = ["식품첨가물1", "식품첨가물2", "식품첨가물3", "식품첨가물4", "식품첨가물5", "식품첨가물6"];
    const itemsList = items.map(item =>
        // <View style={styles.listItem} key={item}>
        <TouchableOpacity style={styles.listItem} key={item} onPress={() => fuc(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.rate} />
                <Text>{item}</Text>
            </View>
            <AntDesign name="right" size={18} color="#888" />
        </TouchableOpacity>
        // </View>
    );

    const allergys = ["우유", "밀"];
    const allergysList = allergys.map(item =>
        <View style={styles.allergyBox} key={item}>
            <View style={styles.allergyImage} />
            <Text>{item}</Text>
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <View style={styles.image} />
                    <Text style={styles.itemManufacturing}>제조업체</Text>
                    <Text style={styles.itemName}>제품명</Text>
                    <Text style={styles.itemPrice}>0원</Text>
                </View>
                <View style={styles.divide} />


                <View style={styles.box2}>
                    <Text style={styles.title}>식품첨가물</Text>

                    <Popup visible={modalVisible} setModalVisible={() => setModalVisible} item={item}></Popup>

                    <View style={styles.listBox}>
                        {itemsList}
                    </View>
                    <Text style={{ fontSize: 13, color: '#888', marginTop: 10 }}>
                        ※ 상품에 표시된 순서대로 기재되어 있습니다. {"\n"}
                        ※ 각 상품마다 함량과 배합방식에 따라 다르게 적용될 수 있습니다.
                    </Text>
                </View>
                <View style={styles.divide} />


                <View style={styles.box2}>
                    <Text style={styles.title}>원재료</Text>
                    <Text style={styles.materials}>
                        정제수, 기타과당, 설탕, 이상화탄소, 혼합제제A(카라멜색소, 정제수, 합성향로(콜라향)),
                        혼합제제B(인산,정제수,카페인(향미증진제))
                    </Text>
                </View>
                <View style={styles.divide} />


                <View style={styles.box2}>
                    <Text style={styles.title}>영양정보</Text>

                    <View style={styles.nutritionBox}>
                        <View style={styles.total}>
                            <Text style={{ width: '30%' }}>총 내용량</Text>
                            <Text style={{ width: '50%' }}>0g</Text>
                            <Text style={{ width: '20%' }}>0kcal</Text>
                        </View>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#eee' }} />
                        <View style={styles.total}>
                            <Text style={{ width: '30%' }}>1회 제공량</Text>
                            <Text style={{ width: '50%' }}>0g</Text>
                            <Text style={{ width: '20%' }}>0kcal</Text>
                        </View>

                        <NutritionTable />
                    </View>
                </View>
                <View style={styles.divide} />


                <View style={styles.box2}>
                    <Text style={styles.title}>알레르기</Text>
                    <View style={styles.allergyListBox}>
                        {allergysList}
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    divide: {
        width: '100%',
        height: 8,
        backgroundColor: '#eee'
    },
    box1: {
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    image: {
        width: 150,
        height: 150,
        backgroundColor: '#ddd',
        margin: 20,
    },
    itemManufacturing: {
        color: '#888',
        marginBottom: 5,
    },
    itemName: {
        fontSize: 16,
        marginBottom: 10,
    },
    itemPrice: {
        color: '#555'
    },
    box2: {
        margin: 15,
    },
    title: {
        fontSize: 17,
    },
    //식품첨가물
    listBox: {
        marginTop: 15,
    },
    listItem: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rate: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        backgroundColor: '#ddd'
    },
    //원재료
    materials: {
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    //영양정보
    nutritionBox: {
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    total: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    //알레르기
    allergyListBox: {
        flexDirection: 'row',
        flexWrap: 'wrap', //공간이 없으면 줄바꿈을 해줌
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