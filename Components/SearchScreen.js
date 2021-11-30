import React, {useState, useEffect, useRef} from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { FlatList, State, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
import Detail from './ItemDetailScreen';

export default function SearchScreen({navigation, route}) {
    
    // const title = route.params.title;

    const [searchVal, setSearchVal] = useState('');
    const [data, setData] = useState('');
    const [page, setPage] = useState(1);
    const searchRef = useRef();
    
    const searchData = async(text) => {
        console.log(text);
        // setSearchVal(text);

        const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

        var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
        // queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(text); 
        queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/


        const response = await fetch(
            url + queryParams,
            {
                method: 'GET',
                // body: JSON.stringify({
                //    prdlstNm
                // }),
            });

        if (response.status === 200) {
            setSearchVal(text);
            const responseJson = await response.json();
            const newresponseJson = responseJson.list;
            setData(newresponseJson);
            
        } else {
            console.log('fetch error33');
            // throw new Error('unable to get');
        }
    };

    useEffect(() => {}, [page]);

    const renderItem = ({item}) => {
      return (
          
        <View style={styles.container}>
            <View style={styles.ItemsListBox}>
                 <TouchableOpacity
                       style={styles.ItemsList}
                        onPress={() => navigation.navigate('Detail', { prdlstReportNo: item.prdlstReportNo })}>
                <View style={styles.imageBox}>
                    <Image style={{ width: 40, height: 40 }} source={{ uri: item.imgurl1 }} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.itemManufacturing}>{item.manufacture}</Text>
                    <Text style={styles.itemName}>{item.prdlstNm}</Text>
                </View>
                </TouchableOpacity>
            </View>  
        </View>
       
      );
      
  };
  
    const clearInput = () => {
        searchRef.current.ref.clear();
        setSearchVal("");
        setData("");

    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 100}}>궁금한 제품을 검색해보세요!</Text>
                </View>
                {/* 버튼 <FontAwesome5 name="heart" size={24} color='#D9B650'/> */}
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={25} style={{marginLeft: 20}} />
                    <TextInput ref={searchRef} placeholder="상품 이름을 입력해주세요" style={styles.input} onChangeText ={text => {searchData(text)} }/>
                </View>
                
                {/* 버튼
                <View style={styles.sortBtn}>
                    <MaterialIcons name="sort" size={30} color={'white'}/>
                </View> */}
            </View>
            {/* <SearchList/> */}
            
            <FlatList
                data={data}
                renderItem={ renderItem } 
                keyExtractor={(item, index) => index.toString()}
                // onEndReached={() => setPage(page + 1)}
                
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


////////////////////////////////////////////////////////////

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

// const [searchVal, setSearchVal] = useState('');


// useEffect(() => {
//     fetch();
// }, []);



// const fetch = async (text) => {

//         setSearchVal(text);


//         const key = '6PsAAbQQMqw6BXq4X0X2Qv5nMMZgKAbGtiA1pBuujX1Cyic%2Bz3PN47Rir5uopLeWVy6AJxFT94YkJ%2BVE39XR3A%3D%3D';

//         var url = 'http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService'; /*URL*/
//         var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
//         queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(text);
//         queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
//         // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /*데이터 페이지*/
//         queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /*데이터 받아오는 개수*/


//         const response = await fetch(
//         url + queryParams,{
//             method: 'GET',
//         }
//         );

//         if(response.status === 200){
//             const responseJson = await response.json(); 
//             setFilteredDataSource(responseJson);
//             setMasterDataSource(responseJson);
        
//         }

//       else{
//           console.log('error');
//       }
//   };
  


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

//////////////////////////////////////////////////////////

/*
import React, { useState, useRef, useEffect } from "react";
import { FlatList, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import styled from "styled-components";
import { search } from "../../config";
import mixIn from "../../Styles/Mixin";

export default function Search({ navigation }) {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState();
  const searchRef = useRef();

  const searchData = async (text) => {
    try {
      setSearchVal(text);
      const res = await fetch(`${search}`, {
        method: "POST",
        body: JSON.stringify({
          keyword: text,
        }),
      });
      const resJson = await res.json();
      const newResJson = resJson.products;
      setData(newResJson);
    } catch (e) {
      console.log("페치에 실패했습니다.");
    }
  };

  useEffect(() => {}, []);

  const renderItem = ({ item }) => {
    return (
      <ResultList
        onPress={() =>
          navigation.navigate("ProductDetail", {
            productId: item.id,
          })
        }
      >
        <ResultItem>{item.name}</ResultItem>
      </ResultList>
    );
  };

  const clearInput = () => {
    searchRef.current.ref.clear();
    setSearchVal("");
    setData("");
  };

  return (
    <Container>
      <SearchBarWrap>
        <SearchIcon
          source={{
            uri: "https://webstockreview.net/images/search-icon-png-4.png",
          }}
          touch={searchVal}
        />
        <SearchBar
          ref={searchRef}
          placeholder="     검색어를 입력해 주세요"
          onChangeText={(text) => searchData(text)}
          touch={searchVal}
          animation={searchVal.length > 0 ? typed : false}
        />
        <Cancel
          touch={searchVal}
          animation={searchVal.length > 0 ? btnIn : false}
          onPress={() => clearInput()}
        >
          <Text>취소</Text>
        </Cancel>
      </SearchBarWrap>
      <ResultContainer>
        <ResultLabel>상품 바로가기</ResultLabel>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </ResultContainer>
    </Container>
  );
}

const Container = styled.View``;

const SearchBarWrap = styled.View`
  position: relative;
  ${mixIn.flex("row", "flex-start", "center")};
  width: 100%;
`;

const Cancel = Animatable.createAnimatableComponent(styled.TouchableOpacity`
  display: ${({ touch }) => (touch.length > 0 ? "flex" : "none")};
  padding-left: 10px;
`);

const SearchIcon = styled.Image`
  position: absolute;
  left: 19;
  width: 20px;
  height: 20px;
  z-index: ${({ touch }) => (touch.length > 0 ? -1 : 1)};
`;

const SearchBar = Animatable.createAnimatableComponent(styled.TextInput`
  width: ${({ touch }) => (touch.length > 0 ? "80%" : "95%")};
  height: 50px;
  margin: 10px;
  padding-left: 10px;
  border-radius: 10;
  background-color: ${({ theme }) => theme.color.White};
`);

const ResultContainer = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.color.White};
`;

const ResultLabel = styled.Text`
  height: 50px;
  padding-left: 10px;
  line-height: 60px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const ResultList = styled.TouchableOpacity`
  height: 60px;
  padding-left: 10px;
  border: 0.3px solid #ddd;
  background-color: ${({ theme }) => theme.color.White};
`;

const ResultItem = styled.Text`
  line-height: 60px;
`;

const typed = {
  0: {
    width: "95%",
  },
  1: {
    width: "80%",
  },
};

const btnIn = {
  0: {
    animation: false,
  },
  1: {
    animation: "slideInRight",
  },
};
*/