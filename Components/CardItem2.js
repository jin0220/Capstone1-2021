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
        <Image source={require("../Img/card2.jpg")} style={styles.image} />

      )}
      renderForeground={() => (
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>식품첨가물의 종류 및 섭취를 줄이는 방법</Text>
        </View>
      )}
    //  headerImage={require("../Img/lily-banse--YHSwy6uqvk-unsplash.jpg")}
    >

      <TriggeringView style={styles.section}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>출처: 식품의약품안전처 식품안전나라</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            
            {/* <FontAwesome name='thumbs-up' size={16} color='#D9B650'/> */}
            {/* <Text style={{marginHorizontal: 2}}></Text> */}
          </View>
        </View>
      </TriggeringView>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionContent}>
            식품 구매 시 감미료, 발색제, 보존료, 착색료, 향미증진제 등의 용어를 들어본 적이 있나요? {'\n\n'}
            이런 용어들은 가공식품의 제조과정에 들어가는 식품첨가물의 종류로,  2018년 1월 1일부터 식품첨가물의 사용 목적을 명확히 하기 위하여 31가지 용도로 분류체계를 바꾸었습니다. {'\n\n'}
            식품첨가물은 식품의 제조 및 가공 시에 필요하며, 식품 종류에 따라 맛과 향, 식감을 더 좋게 해준다. 또한 식품의 보존성 향상과 식중독을 예방하고, 영양소 보충 및 강화시키며, 식품의 품질 향상을 위하여 필요합니다. {'\n\n'}
            가공식품에 식품첨가물이 많이 들어있다고 해서 건강에 해로울 거라고 오해하거나 불안할 수 있지만 자연에서 얻은 천연재료만으로는 음식 맛을 내는데는 한계가 있기 때문에 다양한 종류의 식품첨가물을 사용할 수 밖에 없습니다.{'\n\n'}        
            식품의약품안전처에서는 공신력 있는 국제기구(JECFA, EFSA)에서 엄격한 기준에 근거해 안전성을 입증한 식품첨가물에 대해서만 사용을 허락하고 있으며 또한 1일 섭취허용량을 설정하여 그보다 훨씬 적은 양이 사용되도록 하고, 주기적으로 국민들의 식품첨가물 섭취수준을 모니터링하여 안정성 평가를 실시하고 있으므로 과도한 우려는 하지 않아도 됩니다. {'\n\n'}
            하지만 가공식품을 많이 섭취하게 되면 식품첨가물보다는 당, 나트륨, 지방 등의 섭취가 증가하여 영양불균형으로 인한 생활습관병이 발생할 수 있으므로 균형 잡힌 식생활을 유지하기 위하여 다양한 종류의 식품을 골고루 챙겨먹는게 좋습니다. 
            또한 식품 보관 시 식중독 세균이나 바이러스로 인한 위해미생물이 발생할 수 있으므로 주의해야 합니다.{'\n\n'}
        </Text>
        {/* <View style={[styles.section]}>
          <Image source={require('../Img/cd11.jpeg')} style={{width: 300, height: 150, resizeMode: 'contain'}} />
        </View> */}
        <Text style={[styles.sectionContent, {paddingTop: 20, paddingBottom: 20}]}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>식품첨가물의 종류</Text>
        </Text>
        <View style={[styles.sectionContent, {paddingLeft: 3}]}>
          <Image source={require('../Img/cd21.jpg')} style={{ width: 350, resizeMode: 'stretch'}} />
        </View>
        <Text style={[styles.sectionContent, {paddingTop: 20, paddingBottom: 20}]}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>식품첨가물의 섭취를 줄이는 방법</Text>
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>라면</Text>{'\n'} 
            남녀노소 누구나 좋아하는 라면에는 면의 탱글함을 살리기 위한 인산나트륨과 유통기한 연장을 위한 산화방부제가 함유되어 있습니다.{'\n'} 
            이러한 식품첨가물을 줄이려면 귀찮더라도 처음에 면을 끓인 물을 버리고, 새로운 뜨거운 물에 스프와 끓여놓은 면을 넣고 끓여 먹는 것이 좋습니다.{'\n\n'} 
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>어묵</Text>{'\n'} 
            국민 간식 어묵에는 소르빈산칼륨이라는 세균의 번식을 억제하고 유통기한을 늘려주는 첨가물이 들어있습니다.{'\n'} 
            과다 섭취하면 눈과 피부 점막을 자극하거나 출혈성 위염을 일으킬 수 있으므로 조리하기 전에 뜨거운 물에 살짝 데친 후 헹구어서 조리하는 게 좋습니다.{'\n\n'}
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>단무지</Text>{'\n'}  
            색이 예쁜 샛노란 단무지에는 색소와, 감미료, 사카린나트륨이 첨가되어 있는데 많이 섭취하면 소화기 장애와 콩팥에 영향을 줄 수 있습니다.{'\n'}
            조리하기 전에 찬물에 5분 이상 담구어 사카린나트륨을 희석, 중화시켜 섭취하도록 합니다.{'\n\n'} 
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>소세지</Text>{'\n'} 
            누구나 좋아하는 소세지에는 화학합성물인 화학조미료 글루탐산일나트륨과 식용색소인 타르색소가 함유되어 있어 과다 섭취하면 구토, 천식, 아토피, 우울증을 유발할 수 있습니다.{'\n'}
            조리하기 전에 반드시 소세지에 군데군데 칼집을 여러번 낸 뒤에 끓는 물에 15초~30초 정도 데쳐 취향에 맞게 요리해서 먹도록 합니다.{'\n\n'} 
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>식빵</Text>{'\n'} 
            식빵에는 수산화나트륨, 산도조절제 등의 식품첨가물이 들어있습니다.{'\n'} 
            식품첨가물을 줄이려면 팬이나 오븐에 살짝 굽거나 전자레인지에 데워먹도록 합니다.{'\n\n'} 
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>두부</Text>{'\n'}  
            두부는 제조과정에서 거품을 제거하기 위하여 소포제와 같은 식품첨가물을 사용합니다.{'\n'} 
            먹기 전에 찬물에 여러번 헹구어서 요리하면 식품첨가물을 줄일 수 있습니다.{'\n\n'}
        </Text>
        <Text style={[styles.sectionContent]}>
            <Text style={{fontWeight: 'bold'}}>기타</Text>{'\n'}  
            식품 첨가물을 제거하기 어려운 식품은 채소와 함께 곁들여 먹는 것이 좋습니다.{'\n'} 
            암 예방에 도움이 되는 비타민C가 많이 함유된 채소나 과일을 함께 섭취하도록 합니다.
        </Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <FontAwesome name='tag' size={16} color='#fff'/>
            <Text style={{color: '#fff', marginLeft: 5}}>식품첨가물</Text>
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
    fontSize: 23,
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