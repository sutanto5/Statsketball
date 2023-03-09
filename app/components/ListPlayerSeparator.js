import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from './config/colors';

function ListPlayerSeparator({color}) {
  return (
     <View style={[styles.playerSeparator,{backgroundColor: color}]}/>
  );
}
  const styles = StyleSheet.create({
    playerSeparator: {
    width: '100%',
    height: 5,
    backgroundColor: colors.dark
  },
});

export default ListPlayerSeparator;