import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


export default function App() {
  return (

    <View>
      <Image 
          style = {styles.logo}
          source={require('./app/assets/logo.png')}
      />
      
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
    justifyContent: 'center',
  },

  imgBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%',
    height: '100%'
  }
});
