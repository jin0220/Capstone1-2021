import React, { useRef } from "react";
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import group from '../Data/group.json';

export default function Popup(props) {
    const modalEl = useRef();

    function isEmptyObj(obj) {
        if (obj.constructor === Object
            && Object.keys(obj).length === 0) {
            return true;
        }

        return false;
    }

    var name = props.item.name;
    var groupName = props.item.group;

    return (
        <Modal transparent={true} visible={props.visible}>
            {/* <View style={styles.modalBackground} onTouchEnd={handleClickOutside} > */}
            <View style={styles.modalBackground}>
                <View style={styles.modal} ref={modalEl}>
                    <Text style={styles.itemName}>{name}</Text>

                    <View style={styles.box}>
                        <Text style={styles.title}>주용도</Text>

                        <Text style={styles.subTitle}>{groupName}</Text>
                        <Text>{isEmptyObj(props.item) ? "" : group[props.item.group].description}</Text>
                    </View>
                    <View style={styles.divide} />

                    <View style={styles.box}>
                        <Text style={styles.title}>EWG 등급</Text>
                        <Text style={styles.subTitle}>낮은 위험도</Text>
                        <Text>건강에 부정적인 영향을 미칠 가능성이 없는 성분입니다.</Text>
                    </View>

                    <TouchableOpacity style={styles.close} onPress={props.setModalVisible(!props.visible)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    modal: {
        alignItems: 'center',
        width: "80%",
        height: "60%",
        backgroundColor: '#fff',
        padding: 20,
    },
    itemName: {
        fontSize: 17,
        marginBottom: 20,
    },
    box: {
        padding: 20,
    },
    divide: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subTitle: {
        marginBottom: 5,
    },
    close: {
        marginTop: 100,
    },
});