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
        <Image source={require("../Img/cd1.jpeg")} style={styles.image} />

      )}
      renderForeground={() => (
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>아삭아삭 한입이 지켜주는 내 건강{'\n\n'} 채소, 똑똑하게 알고 먹기!</Text>
        </View>
      )}
    //  headerImage={require("../Img/lily-banse--YHSwy6uqvk-unsplash.jpg")}
    >

      <TriggeringView style={styles.section}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>출처: 삼성서울병원 임상영양팀</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            
            {/* <FontAwesome name='thumbs-up' size={16} color='#D9B650'/> */}
            {/* <Text style={{marginHorizontal: 2}}></Text> */}
          </View>
        </View>
      </TriggeringView>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionContent}>
          채소는 슈퍼푸드의 위상에 걸맞게 우리 건강에 긍정적인 영향을 주는 물질들을 풍부하게 함유하고 있습니다. {'\n\n'}
          아삭아삭한 질감으로 싱그러움을 더해주는 채소에는 알록달록 선명한 색을 나타내는 파이토케미컬과 비타민, 무기질, 수분, 식이섬유소가 함유되어있습니다. {'\n\n'}
          다른 식재료보다 풍부하게 함유하고 있는 섬유소는 몸 속의 콜레스테롤과 중성지방을 조절하여 만성질환을 예방하고 심혈관 건강에 도움이 됩니다. {'\n\n'}
          특히 당근, 옥수수, 고구마, 해조류 등의 채소에 풍부한 불용성 섬유소는 포만감을 제공할 뿐 만 아니라 장내 유익한 세균을 증식시켜 장 운동을 촉진하여 변비예방에 도움이 됩니다. {'\n\n'}
          뿐만 아니라 장 속에 남아있는 발암물질을 흡착하는 기능이 뛰어나 대장을 빨리 통과할 수 있도록 몸 밖으로 배출시키도록 도와주므로 대장암을 예방하는데 효과적입니다.
        </Text>
        <View style={[styles.section]}>
          <Image source={require('../Img/cd11.jpeg')} style={{width: 300, height: 150, resizeMode: 'contain'}} />
        </View>
        <Text style={[styles.sectionContent, {paddingTop: 20}]}>
          섬유소의 하루 권장 섭취량은 일반 성인 기준으로 <Text style={{fontWeight: 'bold'}}>약 20~25g</Text>입니다. {'\n\n'} 
          이는 현미, 보리, 팥 등의 잡곡밥과 양상추, 치커리, 새싹 등 다양한 채소를 함께 섞은 
          <Text style={{fontWeight: 'bold'}}>샐러드 또는 나물 반찬 2~3 작은 접시</Text>정도 섭취할 때 하루에 먹어야 할 섬유소를 충분히 섭취할 수 있습니다. 
        </Text>
        <View style={[styles.section, {paddingTop: 50}]}>
          <Image source={require('../Img/cd12.jpeg')} style={{width: 350, height: 350, resizeMode: 'contain'}} />
        </View>
        <Text style={[styles.sectionContent, {paddingTop: 50}]}>
          섬유소는 당뇨, 동맥경화, 비만, 대장암 등을 예방하는데 도움을 주어 매일 적정량 섭취를 권장하지만 성장기의 어린이나 노약자의 경우는 주의가 필요합니다.{'\n\n'} 
          무턱대고 채소만 과량으로 먹어 섬유소를 과하게 섭취하면 철분, 칼슘, 마그네슘, 아연 같은 무기질과 비타민의 흡수를 저하시킬 수 있습니다. {'\n\n'} 
          성장기의 어린이는 다양한 영양소를 풍부하게 섭취해야 하는 시기이므로 각종 영양소와 비타민, 무기질의 흡수를 저하시키는 섬유소를 과도하게 섭취하지 않도록 유의해야 합니다. {'\n\n'}
          또한 섬유소는 물과 결합하여 배설되기 때문에 설사나 탈수 등의 증상이 올 수도 있습니다. {'\n\n'}
        </Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>당뇨병</Text>
          </View>

          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>대장암</Text>
            
          </View>
        </View>
        {/* <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>test</Text>
          </View>
        </View> */}
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
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 20,
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
    fontWeight: 'bold',
    alignItems: 'center',
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