import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Image, FlatList, StatusBar
 } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from 'react-native-image-slider-box';


function sliderTouch(index){
    alert(index);
}

const subject = "추천 영양 컨텐츠";

const DATA = [
    {
      id: '1',
      title: '1 Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
        id: '4',
        title: '4 Item',
      },
      {
        id: '5',
        title: '5 Item',
      },
      {
        id: '6',
        title: '6 Item',
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

function MainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Text</Text> */}
            <SliderBox
                // ImageComponent={FastImage}
                images={[
                    "https://source.unsplash.com/collection/190727/1024x768",
                    "https://source.unsplash.com/collection/190727/1024x768"
                ]}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}

                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                }}
                
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                
                ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 0}}
                imageLoadingColor="#2196F3"

            />
            <Text style={styles.sub}>{subject}</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // onCurrentImagePressed={id => console.warn(`image ${id} pressed`)}
            />
        </SafeAreaView >
        
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                headerShown: true,  }}>
            <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#f4511e',
                        
                    }
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f4511e',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 100,
        borderRadius: 30,
      },
    title:{
        fontSize: 20,
    },
    sub: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 80,
        paddingBottom: 10,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: "center",

    }
});
