import { compare } from 'compare-versions';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { SearchBar } from 'react-native-screens';

export default function ItemsListScreen({ navigation, route }) {
    const title = route.params.title;

    const [dataInput, setDataInput] = useState([]);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    //const [state, setValue] = useState([]);

    useEffect(() => {
        getRawmt();
    }, [page]);

    const getRawmt = async () => {

        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        // queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent('19790532001117'); /**/
        // queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent('초코에 몽'); /**/
        queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/

        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
            },
        );



        if (response.status === 200) {
            const responseJson = await response.json();
            setDataInput([...dataInput, ...responseJson.list]);

            return true;
        } else {
            return 0;
            // throw new Error('unable to get');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dataInput}
                keyExtractor={(item, index) => 'key' + index}
                onEndReached={() => setPage(page + 1)}
                renderItem={({ item }) =>
                    <View style={styles.ItemsListBox}>
                        <TouchableOpacity
                            style={styles.ItemsList}
                            onPress={() => navigation.navigate('Detail', { prdlstReportNo: item.prdlstReportNo })}
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