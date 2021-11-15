import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import Constants from 'expo-constants';

const { width } = Dimensions.get('window')

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  var PrdlstNum;
  var PrdlsName;

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
    getRepotNo(data);
    // getRawmt(data);
  };

  if (hasPermission === null) {
    return <Text>카메라 접근 권한을 허용해주세요</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라에 접근할 수가 없습니다</Text>;
  }

  const getRepotNo = async (data) => {
    // console.log(data);
    const response = await fetch(
      'http://openapi.foodsafetykorea.go.kr/api/' + '3e9c040903bd4eec95e1' + '/C005/json/1/5/BAR_CD='
        +
      data,
      {
        method: 'GET',
      },
    );
    if(response.status === 200){
      const responseJson = await response.json();
      PrdlstNum = responseJson.C005.row[0]['PRDLST_REPORT_NO'];
      PrdlsName = responseJson.C005.row[0]['PRDLST_NM'];
      getRawmt(PrdlsName);
        return responseJson.C005.row[0];
        //console.log(responseJson.C005.row[0]['PRDLST_REPORT_NO']);
        
    } else {
      return 0;
    }
  };

  const getRawmt = async (reportnum) => {
    const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

    var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; //URL
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; //Service Key
    //queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(PrdlstNum); 
    queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent(PrdlsName); 
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); 
    // queryParams += '&' + encodeURIComponent('pageNo'); 
    // queryParams += '&' + encodeURIComponent('numOfRows'); 
      console.log(PrdlsName);
    // console.log(PrdlstNum);
    const response = await fetch(
      url + queryParams,
      {
        method: 'GET',
      },
    );

    if (response.status === 200) {
      const responseJson = await response.json();
      console.log('==check==');
      console.log(responseJson);
      // return responseJson.C002.row[0].RAWMTRL_NM;
    } else {
      return 0;
      // throw new Error('unable to get');
    }
    
    
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