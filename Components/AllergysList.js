import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image
} from "react-native";


export default function AllergysList(props) {
    const allergys = [
        { name: "우유", img: require('../Img/milk.png') },
        { name: "밀", img: require('../Img/grain.png') },
        { name: "알류", img: require('../Img/egg.jpg') },
        { name: "메밀", img: require('../Img/buckwheat.jpg') },
        { name: "땅콩", img: require('../Img/peanut.png') },
        { name: "대두", img: require('../Img/bean.jpg') },
        { name: "잣", img: require('../Img/nuts.png') },
        { name: "호두", img: require('../Img/walnut.jpg') },
        { name: "게", img: require('../Img/crab.png') },
        { name: "새우", img: require('../Img/shrimp.png') },
        { name: "오징어", img: require('../Img/squid.jpg') },
        { name: "고등어", img: require('../Img/mackerel.png') },
        { name: "조개류", img: require('../Img/clam.jpg') },
        { name: "복숭아", img: require('../Img/peach.png') },
        { name: "토마토", img: require('../Img/tomato.jpg') },
        { name: "닭고기", img: require('../Img/chicken.jpg') },
        { name: "돼지고기", img: require('../Img/pork_belly.jpg') },
        { name: "쇠고기", img: require('../Img/beef.jpg') },
        { name: "아황산류", img: require('../Img/wine.jpg') },
    ]

    /**
     * 검색 조건에 따른 배열 필터링(쿼리)
     */

    const data = props.data; //다른 페이지에서 넘어온 알레르기 리스트

    function filterByID(item) {
        for (var i = 0; i < data.length; i++) {
            if (item.name == data[i]) {
                return true;
            }
        }
        return false;
    }

    var arrByID = allergys.filter(filterByID);

    const allergysList = arrByID.map(item =>
        <View style={styles.allergyBox} key={item.name}>
            <View style={styles.allergyImage} >
                <Image style={{ width: 35, height: 35, borderRadius: 15 }} source={item.img} />
            </View>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.allergyListBox}>
            {allergysList}
        </View>
    );
};


const styles = StyleSheet.create({
    allergyListBox: {
        flexDirection: 'row',
        flexWrap: 'wrap', //공간이 없으면 줄바꿈을 해줌
        paddingLeft: 10
    },
    allergyBox: {
        width: 70,
        padding: 10,
        // margin: 5,
        alignItems: 'center',
    },
    allergyImage: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#ddd',
        // backgroundColor: '#ddd',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});