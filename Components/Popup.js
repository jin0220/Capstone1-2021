import React from "react";
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from "react-native";

export default function Popup(props) {
    return (
        <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
            <View style={styles.modalBackground}>
                <View style={styles.modal}>
                    <Text>This is Popup!</Text>
                    <TouchableHighlight onPress={() => setModalVisible(!props.modalVisible)}>
                        <Text>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    modal: {
        width: "80%",
        height: "20%"
    }
});