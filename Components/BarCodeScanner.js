import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const { width } = Dimensions.get('window')

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  var PrdlstNum;
  var PrdlstName;
  var Flag1;
  var Flag2;
  
// 바코드 스캔
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync(); // 사용자에게 카메라 액세스 권한을 부여하도록 요청
      setHasPermission(status === 'granted'); 
    })();
    setScanned(false);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getRepotNo(data); // 스켄힌 바코드 정보를 바코드 연계 API 요청인자로 전달
  };

  if (hasPermission === null) {
    return <Text>카메라 접근 권한을 허용해주세요</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라에 접근할 수가 없습니다</Text>;
  }

// 바코드 연계 API
  const getRepotNo = async (data) => { 
    const response = await fetch(
      'http://openapi.foodsafetykorea.go.kr/api/' + '3e9c040903bd4eec95e1' + '/C005/json/1/5/BAR_CD='
        +
      data,
      {
        method: 'GET',
      },
    );
    if(response.status === 200){ // API 연결 성공시
      const responseJson = await response.json();
      Flag1 = responseJson.C005['total_count']; // 
     
      if(Flag1 !== '0'){ // 스캔한 바코드가 바코드 연계 API에 데이터가 있으면
        PrdlstNum = responseJson.C005.row[0]['PRDLST_REPORT_NO']; 
        getRawmt(PrdlstNum); // HACCAP 제품이미지 및 포장지표기정보 API 요청인자로 품목보고번호를 넘겨줌
      } else{ // 스캔한 바코드가 바코드 연계 API에 데이터가 없으면
        navigation.navigate('NoSearch'); // 해당 제품을 찾을 수 없음 페이지로 이동
      } 
    } else { // API 연결 실패시
      return 0; // 종료
    }
  };

// HACCAP 제품이미지 및 포장지표기정보 API 
  const getRawmt = async (reportnum) => {
    const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

    var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; // URL
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; // Service Key

    queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(PrdlstNum); // 바코드 연계 API에서 받은 요청인자(품목보고번호)
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); 
   
    const response = await fetch(
      url + queryParams,
      {
        method: 'GET',
      },
    );

    if (response.status === 200) { // API 연결 성공시
      const responseJson = await response.json();
      Flag2 = responseJson['totalCount'];

      if(Flag2 === '0'){ // (바코드 연계 API로부터 받은) 제품품목보고번호가 HACCAP API에 없으면
        navigation.navigate('NoSearch'); // 해당 제품을 찾을 수 없음 페이지로 이동

      }else{ // (바코드 연계 API로부터 받은) 제품 품목보고번호가 HACCAP API에 있으면
      // 해당 제품 품목보고 번호를 제품 상세 페이지로 넘겨줌
      navigation.navigate('ItemDetailScreen', {prdlstReportNo: PrdlstNum, name: PrdlstName});
      
    }

    } else {
      return 0;
      // throw new Error('unable to get');
    }
  };
  
  return (
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} // 바코드 스캔이 성공했을 때 콜백되는 함수, 스캔 결과를 받아 실행
        style={[StyleSheet.absoluteFillObject, styles.container]}>
       
        <View style={styles.layerTop} />
          <Text style={styles.text}>바코드를 스캔해주세요</Text>
          <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
        {scanned && <Button title={'다시 스캔하려면 누르세요'} onPress={() => setScanned(false)}/>}
    </BarCodeScanner>
  );
}

// 해당 페이지 CSS
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
  recontainer: {
    flex: 1,
    paddingHorizontal: 20,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
},
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, 
},
});