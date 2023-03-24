import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';





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
            onPress={() => alert('placeholder')}
            style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            How it Works
          </Text>
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
    backgroundColor: 'black',
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
    color: 'white'
  },
  image:{
    width: 330,
    height: 400,
    
  },
  input: {
    margin: 20,
    padding: 20, 
    width: 250,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.primary,
  },


});
