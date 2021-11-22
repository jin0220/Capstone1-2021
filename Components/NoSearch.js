import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';



const NoSearch = ({navigation}) => {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <FontAwesome5 
              name="dizzy"
              color="white"
              size={200}
              />
        </View>
        <View style={styles.footer}>

            <Text style={styles.text_footer}>죄송합니다.</Text>
            <Text style={styles.text_footer}>해당 제품의 정보를 찾을 수 없습니다.</Text>

            <Text style={[styles.text_footer, {marginTop: 35}]}>해당 제품의 정보에 대해 문의할 점이 있으시면</Text>
            <Text style={styles.text_footer}>개발자에게 의견을 남겨주세요.</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('CommentMessage')}>
                    <Text style={styles.textSign}>개발자에게 의견 보내기</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
};

export default NoSearch;
  
const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#D9B650',
  },
  header:{
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
  footer:{
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 50,
      alignItems: 'center',
  },
  text_header:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
  },
  text_footer:{
      color: 'gray',
      fontSize: 17,
  },
  action:{
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
  },
  textInput:{
      flex: 1,
      marginTop: Platform.OS == 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: 'black',
  },
  button:{
      alignItems:'center',
      marginTop: 20,
      backgroundColor: '#D9B650',
      width: 330,
      height: 40,
      borderRadius: 50,
      
  },
  signIn:{
      width: 300,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
  },
  textSign:{
      paddingTop: 10,
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
  }
});