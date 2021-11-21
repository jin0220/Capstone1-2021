import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Popup from './Popup';
import NutritionTable from './NutritionTable';
import AllergysList from './AllergysList';

export default function ItemDetailScreen({ route }) {
    //api 연결
    const { prdlstReportNo } = route.params; //품목보고번호

    const [data, setData] = useState([]);

    useEffect(() => {
        let isComponentMounted = true
        if (isComponentMounted) {
            getRawmt();
        }
        return () => {
            isComponentMounted = false
        }
    }, []);

    const getRawmt = async () => {
        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(prdlstReportNo); /**/
        // queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent('초코에 몽'); /**/
        queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
        // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
        // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/

        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
            },
        );

        if (response.status === 200) {
            const responseJson = await response.json();
            setData(responseJson.list[0]);
            console.log('==check1==');
            console.log(responseJson.list[0]);
            getIngredient();
        } else {
            return 0;
            // throw new Error('unable to get');
        }


        return true;
    };

    const getIngredient = async () => {
        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /* Service Key*/
        queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(data.prdlstNm); /*식품이름*/
        // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
        // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* */
        // queryParams += '&' + encodeURIComponent('bgn_year') + '=' + encodeURIComponent('2017'); /* */
        // queryParams += '&' + encodeURIComponent('animal_plant') + '=' + encodeURIComponent(data.manufacture); /*가공업체*/
        queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */

        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
            },
        );

        if (response.status === 200) {
            const responseJson = await response.json();
            console.log('==check2==');
            console.log(responseJson.body);
            // return responseJson.C002.row[0].RAWMTRL_NM;
        } else {
            return 0;
            // throw new Error('unable to get');
        }
    };

    //모달창
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

    const allergys = [data.allergy]; //알레르기 리스트

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box1}>
                    {/* <View style={styles.image} /> */}
                    <Image style={styles.image} source={{ uri: data.imgurl1 }} />
                    <Text style={styles.itemManufacturing}>{data.manufacture}</Text>
                    <Text style={styles.itemName}>{data.prdlstNm}</Text>
                    {/* <Text style={styles.itemPrice}>0원</Text> */}
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
                        {data.rawmtrl}
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
                    <AllergysList data={allergys} />
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
        //성분 미표기
        borderColor: '#9A989B',
        backgroundColor: '#9A989B',
        //유의하세요
        // borderColor: '#65141B',
        // backgroundColor: '#65141B',
        // borderColor: '#AE041D',
        // backgroundColor: '#AE041D',
        // borderColor: '#F0A91A',
        // backgroundColor: '#F0A91A',
        //안전해요
        // borderColor: '#99CC63',
        // backgroundColor: '#99CC63',
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
});