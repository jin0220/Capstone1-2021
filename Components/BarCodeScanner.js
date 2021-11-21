import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
// import Constants from 'expo-constants';
import NoSearch from './NoSearch';
import ItemDetailScreen from './ItemDetailScreen';

const { width } = Dimensions.get('window')

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  var PrdlstNum;
  var PrdlstName;
  var Flag;

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

      // 'http://openapi.foodsafetykorea.go.kr/api/' + '3e9c040903bd4eec95e1' + '/C005/json/1/5/BRCD_NO='

        +
      data,
      {
        method: 'GET',
      },
    );
    if(response.status === 200){
      const responseJson = await response.json();
<<<<<<< HEAD
      // PrdlstNum = responseJson.C005.row[0]['PRDLST_REPORT_NO'];
      Flag = responseJson.C005['total_count'];
      // Code = responseJson.C005.RESULT['CODE'];
      console.log('===barcode===');
      // console.log(responseJson);
      // console.log(Code);
=======
      PrdlstNum = responseJson.C005.row[0]['PRDLST_REPORT_NO'];

      console.log(responseJson);
>>>>>>> 3cb5328ea753a6f4f4e2e30beaca99fc9a9a4ba9
      // PrdlsName = responseJson//.C005.row[0]['PRDLST_NM'];
      // console.log(responseJson.C005.row[0]);
      // console.log(responseJson.C005['total_count']);
      if(Flag !== '0'){
        PrdlstNum = responseJson.C005.row[0]['PRDLST_REPORT_NO'];
        getRawmt(PrdlstNum);

      }
      else{
        console.log('missing');
        navigation.navigate('NoSearch')
      }
        // return responseJson.C005.row[0];
        // console.log(responseJson.C005.row[0]['PRDLST_REPORT_NO']);
<<<<<<< HEAD
        
=======

>>>>>>> 3cb5328ea753a6f4f4e2e30beaca99fc9a9a4ba9
    } else {
      return 0;
    }
  };


  const getRawmt = async (reportnum) => {
    const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

    var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; //URL
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; //Service Key

    queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent(PrdlstNum); 
    // queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent(PrdlstName); 
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); 
    // queryParams += '&' + encodeURIComponent('pageNo'); 
    // queryParams += '&' + encodeURIComponent('numOfRows'); 
      // console.log(PrdlstName);
    console.log(PrdlstNum);
    const response = await fetch(
      url + queryParams,
      {
        method: 'GET',
      },
    );

    if (response.status === 200) {
      console.log('===haccp===');
      const responseJson = await response.json();
      // console.log(responseJson.list[0]['prdlstNm']);
      PrdlstName = responseJson.list[0]['prdlstNm'];
      // console.log('==check1==');
      
      // console.log(PrdlstName);
      getIngredient(PrdlstName);
      // return responseJson.C002.row[0].RAWMTRL_NM;

      navigation.navigate('ItemDetailScreen', {prdlstReportNo: PrdlstNum});
      
    } else {
      return 0;
      // throw new Error('unable to get');
    }
  };


const getIngredient = async(reportnum) => {
  const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

  var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
  var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /* Service Key*/
  queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(PrdlstName); /* */
  // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
  // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* */
  // queryParams += '&' + encodeURIComponent('bgn_year') + '=' + encodeURIComponent('2017'); /* */
  // queryParams += '&' + encodeURIComponent('animal_plant') + '=' + encodeURIComponent('(유)돌코리아'); /* */
  queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */

  console.log(PrdlstName);
  
    const response = await fetch(
      url + queryParams,
      {
        method: 'GET',
      },
    );

    if (response.status === 200) {
      console.log('==ingredient==');
      const responseJson = await response.json();
<<<<<<< HEAD
=======

      console.log('==check2==');

>>>>>>> 3cb5328ea753a6f4f4e2e30beaca99fc9a9a4ba9
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