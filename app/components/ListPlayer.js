import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../components/colors';

function ListPlayer({name, teamName, position, onPress, rank}) {
  return(

      <TouchableHighlight
      onPress={onPress}
      underlayColor= {colors.primary}>
        <View style={styles.playerContainer}>
          <Text style={styles.text}>{rank}, {name}</Text>
          <Text style={[styles.text, {color: colors.secondary, }]}>
            {teamName}, {position}</Text>
        </View>
      </TouchableHighlight>

  );
}


const styles = StyleSheet.create({
    playerContainer: {
    backgroundColor: colors.light,
    padding: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
  }

});

export default ListPlayer; 