import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal } from 'react-native';

export default function nutritionTable(props) {
    const data = props.nutrient;
    console.log('data');
    console.log(data);
    return (
        <View style={styles.nutritionTable}>
            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>나트륨</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data.NUTR_CONT6}mg</Text>
                </View>
                <View style={styles.col3}>
                    <View style={{ backgroundColor: '#ddd', width: '15%', height: 17, borderRadius: 7 }} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>0%</Text>
                </View>
            </View>


            <View style={styles.nutritionRows2}>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1}>
                        <Text style={{}}>탄수화물</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data.NUTR_CONT2}g</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={{ backgroundColor: '#ddd', width: '100%', height: 17, borderRadius: 7 }} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>0%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>당류</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data.NUTR_CONT5}g</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={{ backgroundColor: '#ddd', width: '70%', height: 17, borderRadius: 7 }} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>0%</Text>
                    </View>
                </View>
            </View>


            <View style={styles.nutritionRows2}>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1}>
                        <Text style={{}}>지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data.NUTR_CONT4}g</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={{ backgroundColor: '#ddd', width: '30%', height: 17, borderRadius: 7 }} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>0%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>트랜스지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data.NUTR_CONT9}g</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>포화지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data.NUTR_CONT8}g</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={{ backgroundColor: '#ddd', width: '10%', height: 17, borderRadius: 7 }} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>0%</Text>
                    </View>
                </View>
            </View>

            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>콜레스테롤</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data.NUTR_CONT7}mg</Text>
                </View>
                <View style={styles.col3}>
                    <View style={{ backgroundColor: '#ddd', width: '20%', height: 17, borderRadius: 7 }} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>0%</Text>
                </View>
            </View>

            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>단백질</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data.NUTR_CONT3}g</Text>
                </View>
                <View style={styles.col3}>
                    <View style={{ backgroundColor: '#ddd', width: '50%', height: 17, borderRadius: 7 }} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>0%</Text>
                </View>
            </View>

            <Text style={{ fontSize: 13, color: '#888', marginTop: 10 }}>
                ※ 1일 영양성분 기준치에 대한 비율(%)은 2,000kcal기준이므로 개인의 필요열량에 따라 다를 수 있습니다.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nutritionTable: {
        marginTop: 20
    },
    nutritionRows: {
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    nutritionRows2: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    col1: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#eee',
        width: '30%'
    },
    col1_1: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 10,
        paddingVertical: 5,
        backgroundColor: '#eee',
        width: '30%'
    },
    col2: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '15%'
        //width: '50%'
    },
    col3: { //그래프
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '40%',
        alignItems: 'center'
    },
    col4: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '15%'
        //width: '20%
    },
});