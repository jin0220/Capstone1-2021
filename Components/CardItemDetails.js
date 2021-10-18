import React from 'react';
import { render } from 'react-dom';
import { Text, View, Button, StyleSheet, Image, Dimensions, Platform} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import test from '../Img/lily-banse--YHSwy6uqvk-unsplash.jpg';

const MIN_HEIGHT = Platform.OS == 'ios' ? 90 : 55; 
const MAX_HEIGHT = 350; 

const CardItemDetails=() => {
  
  return (
    <View style={styles.container}>
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          renderHeader={() => (
            <Image source={test.image} style={styles.image}/>
            
          )}
          //  headerImage={require("../Img/lily-banse--YHSwy6uqvk-unsplash.jpg")}
          >
            
            <TriggeringView>
              <View>
                <Text style={styles.title}>OVERVIEW</Text>
              </View>
            </TriggeringView>
        </HeaderImageScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf:'stretch',
      resizeMode: 'cover',
    },
    title:{
      fontSize: 20,
    },
    name:{
      fontWeight: 'bold',
    },
    section:{
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent:{
      fontSize: 16,
      textAlign: 'justify',
    },
    categories:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer:{
      flexDirection: 'row',
      backgroundColor: '#f4511e',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category:{
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer:{
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle:{
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
    },
    navTitleView:{
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS == 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle:{
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge:{
      minHeight: 300,
    },
});