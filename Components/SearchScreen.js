import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, FlatList, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchScreen({navigation}) {
  
  const searchFilter = ['검색 결과'];

  const [searchIndex, setSearchIndex] = React.useState(0);

  /* ==============================================추가한 부분==================================================================== */
  const [dataInput, setDataInput] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchVal, setSearchVal] = React.useState();

  React.useEffect(() => { //리스트의 스크롤을 내릴 때 계속 결과 값을 가져오기 위해 사용
      SearchItem(searchVal, false);
  }, [page]);


  const SearchItem = async (text, check) => {
      //check는 input에서 검색 글자가 계속 바뀌게 되면 그에 대한 검색 결과가 계속 저장되는데 이 때 저장된 값을 초기화 하기위해서 사용
      console.log("pp" + text);
      console.log("check" + check);
      if (check) { //검색창의 값이 계속 바뀌게 되면 그 과정에서 저장된 데이터들을 초기화하기 /////여기가 잘 안됨.
          setDataInput([]);
          setPage(1);
      }

      setSearchVal(text); //검색창에 입력된 데이터를 저장해 둠
      console.log(page);

      const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

      var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
      var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
      // queryParams += '&' + encodeURIComponent('prdlstReportNo') + '=' + encodeURIComponent('19790532001117'); /**/
      queryParams += '&' + encodeURIComponent('prdlstNm') + '=' + encodeURIComponent(text); /**/
      queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
      queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
      queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*데이터 받아오는 개수*/

      const response = await fetch(
          url + queryParams,
          {
              method: 'GET',
          },
      );

      if (response.status === 200) {
          const responseJson = await response.json();
          setDataInput([...dataInput, ...responseJson.list]); //검색한 결과의 데이터 저장
          return true;
      } else {
          return 0;
      }
      /* ============================================================================================================================= */
  };

  const SearchList = () => {
      return (
          <View style={styles.searchResult}>
              {searchFilter.map((item, index) => (
                  <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      onPress={() => setSearchIndex(index)}>
                      <Text
                          style={[
                              styles.searchText,
                              searchIndex == index && styles.searchTextSelected,
                          ]}>
                          {item}
                      </Text>
                  </TouchableOpacity>
              ))}
          </View>
      );
  };
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>궁금한 제품을 검색해보세요!</Text>
              </View>
              <FontAwesome5 name="heart" size={24} color='#D9B650' />
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
              <View style={styles.searchContainer}>
                  <Ionicons name="search-outline" size={25} style={{ marginLeft: 20 }} />
                  <TextInput placeholder="Search" style={styles.input} onChangeText={(text) => SearchItem(text, true)} />
              </View>
          </View>
          <SearchList />
          {/* flatlist */}
          {/* ==============================================추가한 부분==================================================================== */}
          {/* onEndReached={() => setPage(page + 1)} ===> 스크롤 내릴 때 page 값을 증가시켜줌 -> page값이 바뀌면 위에 useEffect가 실행됨 */}
          <FlatList
              data={dataInput}
              keyExtractor={(item, index) => 'key' + index}
              onEndReached={() => setPage(page + 1)}
              renderItem={({ item }) =>
                  <View style={styles.ItemsListBox}>
                      <TouchableOpacity
                          style={styles.ItemsList}
                          onPress={() => navigation.navigate('Detail', { prdlstReportNo: item.prdlstReportNo })}
                      >
                          <View style={styles.imageBox}>
                              <Image style={{ width: 40, height: 40 }} source={{ uri: item.imgurl1 }} />
                          </View>
                          <View style={styles.box}>
                              <Text style={styles.itemManufacturing}>{item.manufacture}</Text>
                              <Text style={styles.itemName}>{item.prdlstNm}</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              }
          />
          {/* ============================================================================================================================== */}
      </View >
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="검색 페이지" 
                component={SearchScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#D9B650',
                        
                    }
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
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
    searchContainer:{
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        marginLeft: 10,
        fontSize: 15,
        // fontWeight: 'bold',
        flex: 1,
    },
    // sortBtn:{
    //     marginLeft: 10,
    //     height: 50,
    //     width: 50,
    //     backgroundColor: '#D9B650',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10,
    // },
    searchResult:{
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,

        justifyContent: 'space-around',
    },
    searchText:{
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
    },
    searchTextSelected:{
        color: '#D9B650',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: 'tomato',
    },
    ItemsListBox: {
      paddingLeft: 0,
      paddingRight: 15,
      paddingVertical: 10,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 80,

  },
  ItemsList: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      
  },
  imageBox: {
      width: 60,
      height: 60,
      marginRight: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#ddd',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  box: {
      marginLeft: 5,
      
  },
  itemManufacturing: {
      color: '#888',
      fontSize: 10,
  },
  itemName: {
      fontSize: 13,
      fontWeight: 'bold',
  },
});