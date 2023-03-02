import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


export default function App() {
  return (

    <View style ={styles.container}>
      <Image 
          style = {styles.logo}
          source={require('./app/assets/logo.png')}
      />

      <Text style = {styles.title}>
        BasketBall Buddies
      </Text>
      
    </View>   
    
  );
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
