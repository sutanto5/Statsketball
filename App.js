import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyButton from './app/components/MyButton';
import colors from './app/config/colors';
import TabNavigator from './app/navigation/TabNavigator';


export default function App() {
  return <TabNavigator />;
}


// I'm commenting
//test comment
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  logo:{
    marginTop: 100,
    width:'50%',
    height: '25%',
    
  },
  title:{
    fontSize: 55,
    fontWeight: 'bold'
  },
  imgBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%',
    height: '100%'
  }
});
