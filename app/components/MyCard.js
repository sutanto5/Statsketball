import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';

function MyCard(imageUri, title) {
  return (
    <View style={{height: 130, width: 130}}>
      <View style={{flex: 2}}>
        <Image source={imageUri} style={{flex: 1, width: null, height: null, resizeMode:'cover' }}/>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold', 
  },
});
export default MyCard;