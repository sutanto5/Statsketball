import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

function ListPlayer({ playerName, teamName, position, onPress, rank }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  return (

    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.primary}>
      <View style={styles.playerContainer}>
        <Text style={styles.textTwo}>{rank}: {playerName}</Text>
        <Text style={[styles.text, { color: '#fc6565', }]}>
          {teamName}, {position}</Text>
      </View>
    </TouchableHighlight>

  );
}


const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: colors.surface,
    padding: 10,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },
  textTwo: {
    color: colors.textColor,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold'
  }

});

export default ListPlayer; 