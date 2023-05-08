import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { OpenAIApi } from 'openai';
import { PieChart} from "react-native-chart-kit";


export default function App() {
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const [like,setLike]=React.useState('');
  const [dislike,setDislike]=React.useState('');
  const [neutral,setNeutral]=React.useState('');
  
  const API_URL = 'https://openai-quickstart-node-5wzw.vercel.app/api'

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const onSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: player }),
      });

      const data = await response.json();
      setResult(data.result);
      setPlayer("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      Alert.alert("Failed to generate analysis. Try later");
    }
  }
  console.log(result);

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
            onPress={onSubmit}
            color ={colors.primary}
          />
          <Text 
            onPress={() => alert('Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
            style={styles.textInfo}>
            How it Works
          </Text>
          <Text style={styles.title}>{result}</Text>
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
    fontSize: 14,
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
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};