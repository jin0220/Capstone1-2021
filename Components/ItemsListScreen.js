import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ItemsListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: '리스트1' },
                    { key: '리스트2' },
                    { key: '리스트3' },
                    { key: '리스트4' },
                    { key: '리스트5' },
                    { key: '리스트6' },
                    { key: '리스트7' },
                    { key: '리스트8' },
                    { key: '리스트9' },
                    { key: '리스트10' },
                ]}
                renderItem={({ item }) =>
                    <View style={styles.ItemsListBox}>
                        <TouchableOpacity style={styles.ItemsList} onPress={() => navigation.navigate('Detail')}>
                            {/* <View style={styles.categoryicon}/> */}
                            <View style={styles.imageBox}>
                                {/* <Image style={styles.item}/> */}
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.itemManufacturing}>제조업체</Text>
                                <Text style={styles.itemName}>{item.key}</Text>
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