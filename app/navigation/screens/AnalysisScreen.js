import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import generate from './api/generate';






export default function App() {
  const [player, setPlayer] = React.useState('');
  return (
    <View style={styles.container}>
      
      <View style={styles.body}>
          <Text style={styles.title}>
              Type A Player
          </Text>
          <MyTextInput
            placeholder = "Enter Player"
            onChangeText = {text => setPlayer(text)}
            keyboardType = 'default'
          />
          <Text 
            onPress={() => alert('Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
            style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline'}}>
            How it Works
          </Text>
          <Button style ={styles.input}
              title = "Press me"
          />
      </View>
      <View style={styles.bottom}>
        <Image style ={styles.image}
          source={require('../../assets/images/Kobe.png')}
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width: 330,
    height: 400,
    
  },
  input: {
    margin: 20,
    padding: 20, 
    width: 150,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.primary,
  },


});
