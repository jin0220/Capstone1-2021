import React, { useRef, useEffect, createRef } from "react";
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    useWindowDimensions
} from "react-native";


export default function Popup(props) {
    const modalEl = useRef();

    const handleClickOutside = ({ target }) => {
        if (props.visible && !modalEl.current.contains(target)) props.setModalVisible(false);
    };

    // window.addEventListener = jest.fn();
    // window.removeEventListener = jest.fn();
    // const window = useWindowDimensions();

    // if (window.onclick()) {
    //     console.log("클릭");
    // }


    // useEffect(() => {
    //     console.log("클릭");
    //     document.addEventListener('click', handleClickOutside, true);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, []);

    return (
        props.visible &&
        <Modal animationType="slide" transparent={true} visible={props.visible}>
            {/* <View style={styles.modalBackground} onTouchEnd={handleClickOutside} > */}
            <View style={styles.modalBackground}>
                <View style={styles.modal} ref={modalEl}>
                    <Text>This is Popup!</Text>
                    <TouchableHighlight onPress={props.setModalVisible(!props.visible)}>
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
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    modal: {

        width: "80%",
        height: "50%",
        backgroundColor: '#fff'
    }
});