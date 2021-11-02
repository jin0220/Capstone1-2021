import React from 'react';
import { render } from 'react-dom';
import { Text, View, Button, StyleSheet, Image, Dimensions, Platform, TouchableOpacity, StatusBar } from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { FontAwesome, FontAwesome5, Entypo, Iconicons, Feather } from '@expo/vector-icons';

const MIN_HEIGHT = Platform.OS == 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetails = () => {
  return (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />
    <ImageHeaderScrollView
      maxHeight={MAX_HEIGHT}
      minHeight={MIN_HEIGHT}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.3}
      renderHeader={() => (
        <Image source={require("../Img/lily-banse--YHSwy6uqvk-unsplash.jpg")} style={styles.image} />

      )}
      renderForeground={() => (
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>title</Text>
        </View>
      )}
    //  headerImage={require("../Img/lily-banse--YHSwy6uqvk-unsplash.jpg")}
    >

      <TriggeringView
        style={styles.section}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>OVERVIEW</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            
            <FontAwesome name='thumbs-up' size={16} color='#D9B650'/>
            <Text style={{marginHorizontal: 2}}>10</Text>
            <Text>(30)</Text>
          </View>
        </View>
      </TriggeringView>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionContent}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
          
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
          This book is a treatise on the theory of ethics, very popular during the Renaissance. 
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>test1</Text>
          </View>

          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>test2</Text>
            
          </View>
        </View>
        {/* <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>test</Text>
          </View>
        </View> */}
      </View>

      <View style={[styles.section, {height: 250}]}>

      </View>
    </ImageHeaderScrollView>
    </View >
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9B650',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});