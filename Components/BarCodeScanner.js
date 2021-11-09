import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import Constants from 'expo-constants';


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
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});