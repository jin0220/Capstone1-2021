import React, { useRef, useEffect } from "react";
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    useWindowDimensions
} from "react-native";


export default function Popup(props) {
    const modalEl = useRef();
    // useOutsideAlerter(modalEl);
    // const handleClickOutside = ({ target }) => {
    //     if (props.visible) {
    //         console.log(target);
    //         props.setModalVisible(false);
    //     }
    // };
    // function useOutsideAlerter(ref) {
    //     useEffect(() => {
    //         function handleClickOutside(e) {
    //             if (props.visible && !modalEl.current.contains(e.target)) {
    //                 props.setModalVisible(false);
    //             }
    //         }
    //         document.addEventListener('mousedown', handleClickOutside);
    //         return () => {
    //             document.removeEventListener('mousedown', handleClickOutside);
    //         };
    //     }, []);
    // }

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
        <Modal /*animationType="slide"*/ transparent={true} visible={props.visible}>
            <View style={styles.modalBackground} onTouchEnd={handleClickOutside} >
                {/* <View style={styles.modalBackground}> */}
                <View style={styles.modal} ref={modalEl}>
                    <Text style={styles.itemName}>{props.item}</Text>

                    <View style={styles.box}>
                        <Text style={styles.title}>주용도</Text>
                        <Text style={styles.subTitle}>젤형성체</Text>
                        <Text>젤을 형성하여 식품에 물성을 부여하는 식품첨가물입니다.</Text>
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
        // backgroundColor: '#ddd',
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