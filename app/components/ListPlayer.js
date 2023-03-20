import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

function ListPlayer({playerName, teamName, position, onPress, rank}) {
  return(

      <TouchableHighlight
      onPress={onPress}
      underlayColor= {colors.primary}>
        <View style={styles.playerContainer}>
          <Text style={styles.text}>{rank}: {playerName}</Text>
          <Text style={[styles.text, {color: '#fc6565', }]}>
             {teamName}, {position}</Text>
        </View>
      </TouchableHighlight>

  );
}


const styles = StyleSheet.create({
    playerContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
  }

});

export default ListPlayer; 