<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyButton from './app/components/myButton';
import colors from './app/config/colors';
import MainContainer from './app/navigation/MainContainer';

export default function HomeScreen() {

    
    <View style ={styles.container}>
      <Image 
          style = {styles.logo}
          source={require('./app/assets/images/logo.png')}
      />

      <Text style = {styles.title}>
        BasketBall Buddies
        Basketball Buddies
      </Text>

      <MyButton
        title ="Analysis"
        onPress = {() => alert('placeholder function')}
        backColor= 'orange'
        underColor ='red'
        />
      
    </View>   
}
// I'm commenting
//test comment
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  logo:{
    marginTop: 100,
    width:'50%',
    height: '25%',
    
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  imgBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%',
    height: '100%'
  }
});
=======
>>>>>>> parent of 58b1e7d (Merge branch 'main' of https://github.com/nance1798/basektballBuddies into main)
