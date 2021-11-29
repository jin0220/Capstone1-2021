import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { getDatabase, ref, onValue } from "firebase/database";

export default function ItemsListScreen({ navigation }) {
    var dbKey = [];
    (() => {
        const userId = 'me';
        const dbRef = ref(getDatabase(), `favorites/${userId}`);
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                dbKey.push(childKey);
            });
        });
    })();

    const [dataInput, setDataInput] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (dbKey.length > page)
            getRawmt(dbKey[page]);
    }, [page]);

    const getRawmt = async (num) => {
        console.log('num');
        console.log(num);
        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(num); /**/
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
            setDataInput([...dataInput, ...responseJson.list]);
        } else {
            return 0;
            // throw new Error('unable to get');
        }
        setPage(page + 1);
        return true;
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={dataInput}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) =>
                    <View style={styles.ItemsListBox}>
                        <TouchableOpacity
                            style={styles.ItemsList}
                            onPress={() => navigation.navigate('ItemDetail', { prdlstReportNo: item.prdlstReportNo, favorite: true })}
                        >
                            <View style={styles.imageBox}>
                                <Image style={{ width: 40, height: 40 }} source={{ uri: item.imgurl1 }} />
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.itemManufacturing}>{item.manufacture}</Text>
                                <Text style={styles.itemName}>{item.prdlstNm}</Text>
                            </View>
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
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        backgroundColor: '#fff',
    },
    ItemsListBox: {
        paddingLeft: 20,
        paddingRight: 15,
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 80,

    },
    ItemsList: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageBox: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        marginLeft: 10,
    },
    itemManufacturing: {
        color: '#888'
    },
    itemName: {
        fontSize: 16
    },
});