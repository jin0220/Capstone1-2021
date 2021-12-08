import React, { useRef } from "react";
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
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
                    <ScrollView>
                    <Text style={[styles.itemName]}>{name}</Text>

                    <View style={styles.box}>
                        <Text style={styles.title}>분류</Text>

                        <Text style={styles.subTitle}>{groupName}</Text>
                        <Text>{isEmptyObj(props.item) ? "" : group[props.item.group].description}</Text>
                    </View>
                    <View style={styles.divide} />

                    <View style={styles.box}>
                        <Text style={styles.question}>{groupName}의 일일 허용치 기준은?</Text>
                        {/* <Text style={styles.subTitle}>낮은 위험도</Text> */}
                        <Text>{isEmptyObj(props.item) ? "" : group[props.item.group].answer}</Text>
                    </View>
                    </ScrollView>
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
        fontWeight: 'bold',
        alignItems: 'center',
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
    question: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    close: {
        marginTop: 50,
        width: "80%",      
    },
});