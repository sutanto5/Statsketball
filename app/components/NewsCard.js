import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

function NewsCard({title, image, date}) {
  return (
    <View style={styles.cardNews}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Image style={styles.image} source={image}/>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  cardNews: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: colors.secondaryDark,
    width: 370,
    height: 260,
    marginLeft: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 330,
    height: 180,
  }, 
});
export default NewsCard;