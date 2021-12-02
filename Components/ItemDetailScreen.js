import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, BackHandler, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Popup from './Popup';
import NutritionTable from './NutritionTable';
import AllergysList from './AllergysList';
import { getDatabase, ref, set } from "firebase/database"; //9버전
import { NavigationContainer } from '@react-navigation/native';
import additive from '../Data/additive.json';
import group from '../Data/group.json';

var items = [];

export default function ItemDetailScreen({ navigation, route }) {
    //api 연결  
    const prdlstReportNo = route.params.prdlstReportNo; //품목보고번호

    const [data, setData] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        let isComponentMounted = true
        if (isComponentMounted) {
            getRawmt();

            if (route.params.favorite) { //좋아요 아이콘 체크, 현재 즐겨찾기에서 들어갔을 때만 정상 실행
                setIsChecked(route.params.favorite);
            }
            AsyncStorage.getItem('id', (err, result) => {
                if (err) {
                    setId("정보없음");
                } else {
                    setId(result);
                }

            });
        }
        items = [];

        return () => {
            isComponentMounted = false
        }
    }, []);

    var listData = [];
    const [nutrient, setNutrient] = useState();

    const getRawmt = async () => {
        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(prdlstReportNo); /**/
        queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/

        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
            },
        );

        if (response.status === 200) {
            const responseJson = await response.json();
            setData(responseJson.list[0]);

            //원재료 데이터
            const raw_mt = responseJson.list[0]['rawmtrl'];
            var mt = raw_mt.split(/[\,\(\)\%]/);

            var mta = [{}];

            for (var i = 0; i < mt.length; i++) {

                for (var j = 0; j < additive.length; j++) {
                    if (mt[i] === additive[j].name) {
                        items.push(
                            additive[j]);
                    }
                }

            }
            // mta = mta.filter(item => item);
            console.log(items);



            // getFoodAdtvInfoList(mta);

            //영양성분표 데이터
            const list = ['나트륨', '탄수화물', '당류', '지방', '트랜스지방', '포화지방', '콜레스테롤', '단백질', '열량']; //, '1회 제공량' '열량',

            if (responseJson.list[0]['nutrient']) {
                // const nut_ri = responseJson.list[0]['nutrient'];
                const nut_ri = responseJson.list[0]['nutrient'].replace(/(\s*)/g, "");

                // console.log(nut_ri);

                for (var i = 0; i < list.length; i++) {
                    var target = list[i];
                    var target_num = nut_ri.indexOf(target);
                    var result;
                    if (list[i] == '트랜스지방') {
                        result = nut_ri.substring(target_num, (nut_ri.substring(target_num).indexOf("g") + target_num));
                    }
                    else if (list[i] == '당류' || list[i] == '열량') {
                        result = nut_ri.substring(target_num, (nut_ri.substring(target_num).indexOf(",") + target_num));
                        if (list[i] == '당류' && result.substring(target).indexOf("%") > 0) {
                            result = nut_ri.substring(target_num, (nut_ri.substring(target_num).indexOf("%") + target_num + 1));
                        }
                    }
                    else {
                        result = nut_ri.substring(target_num, (nut_ri.substring(target_num).indexOf("%") + target_num + 1));
                    }

                    // console.log(result);

                    var v;
                    var p;

                    if (list[i] == '당류' || list[i] == '지방') {
                        v = result.substring(2, (nut_ri.substring(target_num).indexOf("g") + 1));
                    }
                    else if (list[i] == '열량') {
                        if (nut_ri.substring(target_num).indexOf("열량") > -1)
                            v = result.substring(2, (nut_ri.substring(target_num).indexOf("l") + 1));
                        else
                            continue;
                    }
                    else if (list[i] == '나트륨' || list[i] == '단백질') {
                        v = result.substring(3, (nut_ri.substring(target_num).indexOf("g") + 1));
                    }
                    else if (list[i] == '탄수화물' || list[i] == '포화지방') {
                        v = result.substring(4, (nut_ri.substring(target_num).indexOf("g") + 1));
                    }
                    else {
                        v = result.substring(5, (nut_ri.substring(target_num).indexOf("g") + 1));
                    }

                    if (result.substring(target).indexOf("(") > -1)
                        p = result.substring(nut_ri.substring(target_num).indexOf("(") + 1, (nut_ri.substring(target_num).indexOf("(") + nut_ri.substring(target_num).indexOf("%")));
                    else
                        p = result.substring(nut_ri.substring(target_num).indexOf("g") + 1, (nut_ri.substring(target_num).indexOf("g") + 1 + nut_ri.substring(target_num).indexOf("%")));

                    if (p == "") {
                        p = '0%';
                    }

                    listData.push({
                        name: list[i],
                        volume: v,
                        percent: p
                    });
                }
                setNutrient(listData);
                // console.log(listData);
            } else {
                console.log("없음");
            }
        } else {
            return 0;
            // throw new Error('unable to get');
        }
        return true;
    };

    // var temp = [];
    // const [items, setItems] = useState([]);

    // const getFoodAdtvInfoList = async (mta) => {
    //     for (var i = 0; i < mta.length; i++) {
    //         const response = await fetch(
    //             'http://openapi.foodsafetykorea.go.kr/api/' + '3e9c040903bd4eec95e1' + '/I2838/json/1/5/WORD=' + mta[i],
    //             {
    //                 method: 'GET',
    //             },
    //         );

    //         if (response.status === 200) {
    //             const responseJson = await response.json();
    //             if (responseJson.I2838.total_count != 0) {
    //                 // console.log(mta[i]);
    //                 // console.log(responseJson.I2838.total_count);
    //                 temp.push(mta[i]);
    //                 // for (var j = 0; j < responseJson.I2838.total_count; j++) {
    //                 //     if (responseJson.I2838.row[j].WORD == mta[i]) {
    //                 //         console.log(responseJson.I2838.row[j].WORD);
    //                 //     }
    //                 // }

    //                 // console.log(mta[i]);

    //             }
    //         } else {
    //             return 0;
    //             // throw new Error('unable to get');
    //         }
    //     }
    //     // console.log(temp);
    //     setItems(temp);
    //     return true;
    // };


    const getIngredient = async () => {
        // const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        // var url = 'http://apis.data.go.kr/1471000/FoodAdtvInfoService01/getFoodAdtvInfoList01'; /*URL*/
        // var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        // // queryParams += '&' + encodeURIComponent('prdlst_cd') + '=' + encodeURIComponent(prdlstReportNo); /**/
        // queryParams += '&' + encodeURIComponent('pc_kor_nm') + '=' + encodeURIComponent(mta[i]); /**/
        // // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        // // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /**/
        // queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /**/
        // // console.log(data.prdlstNm);
        // // console.log(data.manufacture);

        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
            },
        );

        if (response.status === 200) {
            const responseJson = await response.json();
            // console.log(mta[i]);
            // console.log(responseJson.I2838.total_count);
            // if (responseJson.body.totalCount > 0) { // && responseJson.body.items[]['PC_KOR_NM']
            //     for (var j = 0; j < responseJson.body.items.length; j++) {
            //         // console.log(responseJson.body.items[j]['PC_KOR_NM']);
            //         if (responseJson.body.items[j]['PC_KOR_NM'] == mta[i]) {
            //             // console.log(responseJson.body.items[j]['PC_KOR_NM']);
            //         }
            //     }
            //     console.log(responseJson);
            // }
        } else {
            return 0;
            // throw new Error('unable to get');
        }
    };

    //모달창
    const [modalVisible, setModalVisible] = useState(false); //첫번째 원소 -> 현재 상태, 두번째 원소 -> setter 함수
    const [item, setItem] = useState({});
    const [item2, setItem2] = useState("");

    function fuc(item) {
        setModalVisible(true);
        setItem(item); //모달창에 아이템 전달
        // setItem2();
    }

    // const items = ["식품첨가물1", "식품첨가물2", "식품첨가물3", "식품첨가물4", "식품첨가물5", "식품첨가물6"];
    const itemsList = items.map((item, index) =>
        // <View style={styles.listItem} key={item}>
        <TouchableOpacity style={styles.listItem} key={index} onPress={() => fuc(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.rate} />
                <Text>{item.name}</Text>
            </View>
            <AntDesign name="right" size={18} color="#888" />
        </TouchableOpacity>
        // </View>
    );

    const allergys = [data.allergy]; //알레르기 리스트

    const [isChecked, setIsChecked] = useState(false);

    const db = getDatabase();

    function favorite() {
        setIsChecked(!isChecked);

        if (!isChecked) {
            set(ref(db, `favorites/${id}/` + prdlstReportNo), {
                itemNum: prdlstReportNo
            }).then(
                console.log("전송 성공")
            ).catch((error) => {
                console.log("전송 실패")
            });
        } else {
            set(ref(db, `favorites/${id}/` + prdlstReportNo), {
                itemNum: null
            }).then(
                console.log("전송 성공")
            ).catch((error) => {
                console.log("전송 실패")
            });
        }

    }

    // const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    // function handleBackPress() {
    //     console.log("TQW1E");
    //     return false;
    // }

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <AntDesign name="arrowleft" size={23} color="white" />
                </TouchableOpacity>
                {/* <Text style={{ color: 'white', fontSize: 22 }}>제목</Text> */}
                <TouchableOpacity
                    style={{}}
                    onPress={() => id == '정보없음' ? null : favorite()}>
                    {isChecked ? (
                        <AntDesign name="heart" size={24} color="white" style={{ marginRight: 5 }} />
                    ) : (
                        <AntDesign name="hearto" size={24} color="white" style={{ marginRight: 5 }} />
                    )}
                </TouchableOpacity>
            </View>


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
                                {/* {nutrient[9] ? nutrient[9].percent : '0g'} */}
                                <Text style={{ width: '20%' }}>{nutrient && nutrient.length == 9 ? nutrient[8].volume : '0kcal'}</Text>
                                {/*  */}
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: '#eee' }} />
                            <View style={styles.total}>
                                <Text style={{ width: '30%' }}>1회 제공량</Text>
                                <Text style={{ width: '50%' }}>0g</Text>
                                <Text style={{ width: '20%' }}>{nutrient && nutrient.length == 9 ? nutrient[8].volume : '0kcal'}</Text>
                            </View>
                            {nutrient &&
                                <NutritionTable nutrient={nutrient} />
                            }
                        </View>
                    </View>
                    <View style={styles.divide} />


                    <View style={styles.box2}>
                        <Text style={styles.title}>알레르기</Text>
                        <AllergysList data={allergys} />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row', //가로배치
        justifyContent: 'flex-start', //flexDirection의 수평한 정렬
        alignItems: 'center', //flexDirection의 수직한 정렬
        backgroundColor: '#D9B650',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 35
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: '20%'
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