import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchScreen() {
    // 지금 가장 많이 검색하는? 
    const searchFilter = ['지금 가장 많이 검색하는', ' 최근에 검색한'];

    const [searchIndex, setSearchIndex] = React.useState(0)

    const SearchList = () => {
        return( 
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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>궁금한 제품을 검색해보세요!</Text>
                </View>
                <FontAwesome5 name="heart" size={24} color='#D9B650'/>
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={25} style={{marginLeft: 20}} />
                    <TextInput placeholder="Search" style={styles.input} />
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons name="sort" size={30} color={'white'}/>
                </View>
            </View>
            <SearchList/>
            {/* flatlist */}
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
    }
});
