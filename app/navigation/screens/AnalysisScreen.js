import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import axios from 'axios';


export default function App() {
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const apiKey = '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'
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
  
  const handleSend = async () => {
    const prompt = `analyze ${player}s playstyle in 40 words.`
    const response = await axios.post(apiUrl,{
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application.json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const text = response.data.choices[0].text;
    alert(text);
    console.log(text);
    setPlayer('');
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.body}>
          <Text style={styles.title}>
              Type A Player
          </Text> 
          <TextInput style = {styles.textInput}
            placeholder = "Enter Player"
            value={player}
            onChangeText = {setPlayer}
          />
          <Text 
            onPress={() => alert('Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
            style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', color: 'white'}}>
            How it Works
          </Text>
          <Button style ={styles.input}
              title = "Run Analysis"
              onPress={handleSend}
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
    backgroundColor: colors.background,
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
    color: 'white',
    textAlign: 'center',
   
  },
  image:{
    width: 330,
    height: 400,
    
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 150,
    
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
