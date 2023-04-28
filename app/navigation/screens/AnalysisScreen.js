import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import axios from 'axios';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { OpenAIApi } from 'openai';

export default function App() {
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const apiKey = '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'
  const apiUrl = 'https://api.openai.com/v1/completions'

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleSend = async () => {
    const prompt = `analyze ${player}s playstyle in 40 words.`
    const response = await axios.post(apiUrl,{
      model: "text-davinci-003",
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
          <TextInput style = {styles.textInput}
            placeholder = "Enter Player"
            value={player}
            onChangeText = {setPlayer}
          />
          <Button style ={styles.input}
            title = "Run Analysis"
            onPress={handleSend}
          />
          <Text 
            onPress={() => alert('Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
            style={styles.textInfo}>
            How it Works
          </Text>
          
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
  textInfo:{
    fontSize: 20, 
    textDecorationLine: 'underline', 
    color: 'white', 
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    width: 250,
    fontFamily: ''
  },
  input: {
    marginBottom: 30,
    padding: 20, 
    width: 10000,
    height: 70,
    borderRadius: 40,
    backgroundColor: colors.primary,
  },


});
