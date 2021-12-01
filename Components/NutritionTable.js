import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal } from 'react-native';

export default function nutritionTable(props) {
    const data = props.nutrient;
    function graph(percent) {
        return {
            backgroundColor: '#f5dd7b',
            width: percent,
            height: 17,
            borderRadius: 7
        }
    }
    return (
        <View style={styles.nutritionTable}>
            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>나트륨</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data[0].volume}</Text>
                </View>
                <View style={styles.col3}>
                    <View style={graph(data[0].percent)} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>{data[0].percent}</Text>
                </View>
            </View>


            <View style={styles.nutritionRows2}>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1}>
                        <Text style={{}}>탄수화물</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data[1].volume}</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={graph(data[1].percent)} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>{data[1].percent}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>당류</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data[2].volume}</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={graph(data[2].percent)} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>{data[2].percent == '0%' ? '' : data[2].percent}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.nutritionRows2}>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1}>
                        <Text style={{}}>지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data[3].volume}</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={graph(data[3].percent)} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>{data[3].percent}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#e9e9e9', borderBottomWidth: 1 }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>트랜스지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data[4].volume}g</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.col1_1}>
                        <Text style={{}}>포화지방</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={{}}>{data[5].volume}</Text>
                    </View>
                    <View style={styles.col3}>
                        <View style={graph(data[5].percent)} />
                    </View>
                    <View style={styles.col4}>
                        <Text style={{}}>{data[5].percent}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>콜레스테롤</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data[6].volume}</Text>
                </View>
                <View style={styles.col3}>
                    <View style={graph(data[6].percent)} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>{data[6].percent}</Text>
                </View>
            </View>

            <View style={styles.nutritionRows}>
                <View style={styles.col1}>
                    <Text style={{}}>단백질</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={{}}>{data[7].volume}</Text>
                </View>
                <View style={styles.col3}>
                    <View style={graph(data[7].percent)} />
                </View>
                <View style={styles.col4}>
                    <Text style={{}}>{data[7].percent}</Text>
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
        width: '27%'
    },
    col1_1: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 10,
        paddingVertical: 5,
        backgroundColor: '#eee',
        width: '27%'
    },
    col2: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 5,
        paddingVertical: 5,
        width: '19%',
        //width: '50%'
    },
    col3: { //그래프
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: '39%',
        alignItems: 'center',
    },
    col4: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: '15%',
        //width: '20%
    },
});