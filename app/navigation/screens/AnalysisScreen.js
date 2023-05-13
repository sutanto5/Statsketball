import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image,TouchableHighlight,Alert,SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import {SearchComp} from '../../components/SearchComp';
import { Button } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
// import { PieChart} from "react-native-chart-kit";
import loadingGif from '../../assets/images/giphy.gif'


export default function App() {
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const [like,setLike]=React.useState(253);
  const [dislike,setDislike]=React.useState(123);
  const [neutral,setNeutral]=React.useState(32);
  const [loading, setLoading]=React.useState(false);
  const API_URL = 'https://openai-quickstart-node-5wzw.vercel.app/api'

  const data = [
    {
      name: "Like",
      number: like,
      color: "#00FF00",
      legendFontColor: "white",
      legendFontSize: 15
    },
    {
      name: "Dislike",
      number: dislike,
      color: "#F00",
      legendFontColor: "white",
      legendFontSize: 15
    },
    {
      name: "Neutral",
      number: neutral,
      color: "#808080",
      legendFontColor: "white",
      legendFontSize: 15
    },
    
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


  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
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
    } finally {
      setLoading(false);
    }

  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}> Analyzing {player}</Text>
        <Image
          source={loadingGif}
          style={styles.loading}
          resizeMode="contain"
        />
      </View>
    );
  }
  const onTryAgain = () => {
    setResult('');
  };
  
  if (result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Playstyle Analysis
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.title}>
          Sentiment Analysis
        </Text>
        {/* <PieChart
              data={data}
              width = {450}
              height = {180}
              chartConfig={chartConfig}
              accessor={"number"}
              paddingLeft={"15"}
              backgroundColor ={"transparent"}
              center={[10, 0]}
        /> */}
        <View style={styles.spacing}        />
        <Button style = {styles.input}
        title = "Analyze Different Player"
        onPress={onTryAgain} 
        color ={colors.primary}>
          
        </Button>
      </SafeAreaView>
    );
    
    
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
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
   fontWeight: 'bold',
   marginTop: 30
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
    backgroundColor: colors.textColor,
    borderRadius: 10,
    height: 50,
    width: 250,
    fontFamily: 'Poppins_400Regular',
    color:'black'
  },
  input: {
    marginBottom: 30,
    padding: 20, 
    width: 10000,
    height: 70,
    borderRadius: 40,
    color: colors.primary,
  },  
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  loading: {
    width: "100%",
  },
  result: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  },
  spacing: {
    height: 50
  },
});


