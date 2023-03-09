import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';





export default function AnalysisScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.body}>
          <Text style={styles.title}>
              Type A Player
          </Text>
          <TextInput style={styles.input}>
          </TextInput>
          <Text 
            onPress={() => alert('placeholder')}
            style={{ fontSize: 20, fontWeight: 'bold' }}>
            How it Works
          </Text>
      </View>
      <View style={styles.bottom}>
        <Image style ={styles.image}
          source={require('./app/assets/images/Kobe.PNG')}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',

  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  bottom: {
    alignSelf: 'center',
    justifyContent: 'flex-end'
    
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width: 300,
    height: 400,
    
  },
  input: {
    padding: 20, 
    width: 250,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.primary,
  },


});
