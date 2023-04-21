import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { Button } from 'react-native';
import generatePr from './api/generate';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';



const API_URL = '<http://localhost:3000/api>'

export default function App() {
  const [player, setPlayer] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState('');
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
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
        body: JSON.stringify({player}),
      });
      const data = await response.json();
      setResult(data.result);
      
    } catch (e) {
      Alert.alert("Couldn't generate ideas", e.message);
    }
  };
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
  image:{
    width: 330,
    height: 400,
    
  },
  textInput: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    width: 250,
    fontFamily: 'Poppins_500Medium'
    
  },
  input: {
    marginTop: 20,
    padding: 20, 
    width: 200,
    height: 70,
    borderRadius: 40,
    backgroundColor: colors.primary,
    fontFamily: 'Poppins_700Bold'
  },
  textInfo: {
    fontSize: 20, 
    fontFamily: 'Poppins_700Bold',
    textDecorationLine: 'underline',
    color: 'white', 
    marginTop: 20,}

  }


);
