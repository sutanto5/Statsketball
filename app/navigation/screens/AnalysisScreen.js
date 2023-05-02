import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import axios from 'axios';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { OpenAIApi } from 'openai';
import { PieChart} from "react-native-chart-kit";


export default function App() {
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const [like,setLike]=React.useState('');
  const [dislike,setDislike]=React.useState('');
  const [neutral,setNeutral]=React.useState('');
  //const API_KEY = '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'
  //const API_URL = 'https://api.openai.com/v1/completions'

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const data = [
    {
      name: "Like",
      number: 342353,
      color: "#00FF00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Dislike",
      number: 2800000,
      color: "#F00",
      legendFontColor: "#FF0000",
      legendFontSize: 15
    },
    {
      name: "Neutral",
      number: 4322,
      color: "#808080",
      legendFontColor: "#FF0000",
      legendFontSize: 15
    }
  ]
  /*

  const handleCompletion = async () => {
    const prompt = `analyze ${player}s playstyle in 40 words.`
    try {
      const response = await axios.post(API_URL,
        {
          prompt: prompt,
          max_tokens: 100,
        }, 
        {
          headers: {
            'Content-Type': 'application.json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );
      setResult(response.data.choices[0].text);
      alert(result);
      console.log(result);
      setPlayer('');
    } catch (error) {
      console.error(error);
      setPlayer('');
    }
  }
*/
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
            //onPress={handleCompletion}
            color ={colors.primary}
          />
          <Text 
            onPress={() => alert('Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
            style={styles.textInfo}>
            How it Works
          </Text>
          </View>
            <Text>Percent of people that like {player}</Text>
            <PieChart
              width = {180}
              height = {180}
              accessor={"number"}
              backgroundColor ={"transparent"}
              paddingleft={"15"}
              center={[10, 50]}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              absolute
            />
          <View>
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
    backgroundColor: colors.dark,
    borderRadius: 10,
    height: 50,
    width: 250,
    fontFamily: '',
    color:'white'
  },
  input: {
    marginBottom: 30,
    padding: 20, 
    width: 10000,
    height: 70,
    borderRadius: 40,
    color: colors.primary,
  },


});
