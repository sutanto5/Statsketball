import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../config/colors';
import PlayerCard from '../../components/PlayerCard';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  {/*npx expo install expo-font @expo-google-fonts/poppins*/}
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Basketball Buddies</Text>
      </View>
      
      <SafeAreaView>
        <View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{height: 500}}>
              <ScrollView>
                <PlayerCard
                  name = 'Giannis Antetokounmpo'
                  image = {require('../../assets/images/ga.png')}
                  points = '31.1'
                  rebounds= '11.8'
                  assists= '5.7'
                  freeThrow='64.5'
                  height="7'0"
                  weight='242lb'
                />
                 <PlayerCard
                  name = 'Stephan Curry'
                  image = {require('../../assets/images/SC.png')}
                  points = '29.4'
                  rebounds= '6.1'
                  assists= '6.3'
                  freeThrow='91.5'
                  height="6'2"
                  weight='185lb'
                />
                <PlayerCard
                  name = 'Lebron James'
                  image = {require('../../assets/images/lj.png')}
                  points = '28.9'
                  rebounds= '8.3'
                  assists= '6.8'
                  freeThrow='76.8'
                  height="6'9"
                  weight='250lb'
                />
                 <PlayerCard
                  name = 'Kevin Durant'
                  image = {require('../../assets/images/kd.png')}
                  points = '29.1'
                  rebounds= '6.7'
                  assists= '5'
                  freeThrow='91.9'
                  height="6'10"
                  weight='240lb'
                />
              </ScrollView>
            </View>
          </ScrollView>
          </View>
      </SafeAreaView>  


    </View>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  top: {
    marginTop: 40,
    alignItems: 'center',

  },
  title: {
    fontSize: 30,
    color: colors.textColor,
    fontFamily: 'Poppins_700Bold',
  },
  image: {
    width: 70,
    height: 70,
  }, 

});
