import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window')

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>카메라 접근 권한을 허용해주세요</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라에 접근할 수가 없습니다</Text>;
  }

  return (
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}>
        
        {/* <Text style={ styles.text}>바코드를 스캔해주세요</Text> */}
        {/* <View style={styles.cancel}> */}
       
        <View style={styles.layerTop} />
        <Text style={styles.text}>바코드를 스캔해주세요</Text>
        <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
        {/* {scanned && <Button title={'다시 스캔하려면 누르세요'} onPress={() => setScanned(false)}/>} */}
        {/* </View> */}
        </View>
        {/* {scanned && <Button title={'다시 스캔하려면 누르세요'} onPress={() => setScanned(false)}/>} */}
        <View style={styles.layerBottom} />
        {scanned && <Button title={'다시 스캔하려면 누르세요'} onPress={() => setScanned(false)}/>}
    </BarCodeScanner>
  );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: opacity,
    fontSize: 20,
  },
  cancel:{
    backgroundColor: opacity,
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row',
    
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 5
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});