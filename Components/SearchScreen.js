import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { FlatList, State, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
import Detail from './ItemDetailScreen';

export default function SearchScreen({navigation}) {
    // const title = route.params.title;

    //지금 가장 많이 검색하는? 
    // const searchFilter = [' 최근에 검색한 제품'];

    // const [searchIndex, setSearchIndex] = React.useState(0);
    // const [search, setsearch] = useState('');


    // const SearchList = () => {
    //     return( 
    //         <View style={styles.searchResult}>
    //             {searchFilter.map((item, index) => (
    //                 <TouchableOpacity 
    //                     key={index} 
    //                     activeOpacity={0.8}
    //                     onPress={() => getItem(item)}>
    //                     <Text 
    //                         style={[
    //                             styles.searchText, 
    //                             searchIndex == index && styles.searchTextSelected,
    //                             ]}>
    //                             {item.id}
    //                             {'.'}
    //                             {item.title.toUpperCase()}
    //                     </Text>
    //                 </TouchableOpacity>
    //             ))}
    //         </View>
    //     );
    // };

    // const getItem = (item) => {
    //     alert('id'+item.id+'title'+item.title)
    // };

    // const [search, setSearch] = useState('');
    // const [filteredDataSource, setFilteredDataSource] = useState([]);
    // const [masterDataSource, setMasterDataSource] = useState([]);

    // useEffect(() => {
    //     getData();
    // }, [page]);
    
    const searchData = async(text) => {
        // this.setState({loding:true});
        
        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/

        queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
        // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/


    fetch(
        url + queryParams,{
            method: 'POST',
            body: JSON.stringify({
                "prdlstNm": prdlstNm
            })
        }
    )

      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.item);

        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };


//   const renderItem = ({item}) => {
  
    
// }

//     const renderItem = ({item}) => {
//       return (
//         <ResultList
//         style={styles.ItemsList}
//         onPress={() => navigation.navigate('Detail', { prdlstReportNo: item.prdlstReportNo })}>
//             <ResultItem>{item.prdlstNm}</ResultItem>
//         </ResultList>
//       )
//   }
  

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 100}}>궁금한 제품을 검색해보세요!</Text>
                </View>
                {/* <FontAwesome5 name="heart" size={24} color='#D9B650'/> */}
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={25} style={{marginLeft: 20}} />
                    <TextInput placeholder="상품 이름을 입력해주세요" style={styles.input} onChangeText ={text => {searchData(text)}}/>
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons name="sort" size={30} color={'white'}/>
                </View>
            </View>
            {/* <SearchList/> */}
            
            {/* <FlatList
            
                data={filterData}
                keyExtractor={(item, index) => 'key' + index}
                onEndReached={() => setPage(page+1)}
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
            /> */}
            <FlatList
                // data={getData}
                keyExtractor={(item, index) => 'key' + index}
                // onEndReached={() => setPage(page + 1)}
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
                    // <ResultList
                    //     style={styles.ItemsList}
                    //     onPress={() => navigation.navigate('Detail', { prdlstReportNo: item.prdlstReportNo })}>
                    //     <ResultItem>{item.prdlstNm}</ResultItem>
                    // </ResultList>
                }
            />
        </View >
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
    sortBtn:{
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#D9B650',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
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
        paddingLeft: 20,
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
        marginLeft: 10,
    },
    itemManufacturing: {
        color: '#888'
    },
    itemName: {
        fontSize: 16
    },
});




// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput,
// } from 'react-native';

// const SearchScreen = () => {
// const [search, setSearch] = useState('');
// const [filteredDataSource, setFilteredDataSource] = useState([]);
// const [masterDataSource, setMasterDataSource] = useState([]);

// useEffect(() => {

//     const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

//         var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
//         var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/

//         queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
//         // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
//         queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/


//     fetch(
//         url + queryParams,{
//             method: 'GET',
//         }
//     )

//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);

//         // console.log(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource and update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         // Applying filter for the inserted text in search bar
//         const itemData = item.prdlstNm
//           ? item.prdlstNm.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({ item }) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)} keyExtractor={(item, index) => 'key' + index}>
          
//         {item.prdlstNm}
//         {'.'}
//         {item.prdlstNm.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     // Function for click on an item
//     alert('Id : ' + item.prdlstReportNo + ' Title : ' + item.prdlstNm);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputStyle}
//           onChangeText={(text) => searchFilterFunction(text)}
//           value={search}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
// });
