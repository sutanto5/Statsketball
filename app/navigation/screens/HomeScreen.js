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
            <View style={{height: 500, marginTop: 20}}>
              <ScrollView>
                {/*npm i react-native-paper*/}
                <PlayerCard
                  name = 'Giannis Antetokounmpo'
                  image = {require('../../assets/images/ga.png')}
                  points = '31.1'
                  rebounds= '11.8'
                  assists= '5.7'
                />
                 <PlayerCard
                  name = 'Stephan Curry'
                  image = {require('../../assets/images/SC.png')}
                  points = '29.4'
                  rebounds= '6.1'
                  assists= '6.3'
                />
                <PlayerCard
                  name = 'Giannis Antetokounmpo'
                  image = {require('../../assets/images/ga.png')}
                  points = '31.1'
                  rebounds= '11.8'
                  assists= '5.7'
                />
                 <PlayerCard
                  name = 'Stephan Curry'
                  image = {require('../../assets/images/SC.png')}
                  points = '29.4'
                  rebounds= '6.1'
                  assists= '6.3'
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
    marginTop: 30,
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
