import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import Constants from 'expo-constants';

const { width } = Dimensions.get('window')

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    setScanned(false);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getRawmt(data);
  };

  if (hasPermission === null) {
    return <Text>카메라 접근 권한을 허용해주세요</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라에 접근할 수가 없습니다</Text>;
  }



  const getRawmt = async (reportnum) => {

    const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
    queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent('201704760012'); /**/
    queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent('돈까스'); /**/
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
      }
    };

    xhr.send('');

    console.log(this.responseText.totalCount);
    // const response = await fetch(
    //   'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?' +
    //   key +
    //   '/C002/json/1/5/PRDLST_REPORT_NO=' +
    //   reportnum,
    //   {
    //     method: 'GET',
    //   },
    // );

    // if (response.status === 200) {
    //   const responseJson = await response.json();
    //   console.log('==원재료 정보==');
    //   console.log(responseJson.C002.row[0].RAWMTRL_NM);
    //   return responseJson.C002.row[0].RAWMTRL_NM;
    // } else {
    //   return 0;
    //   // throw new Error('unable to get');
    // }
  };

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
    backgroundColor: 'black'
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