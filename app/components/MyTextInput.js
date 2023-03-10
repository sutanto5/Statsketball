import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';




function MyTextInput ({placeholder, onChangeText, keyboardType}){
  return(
    <View style={styles.container}>
      <TextInput 
          placeholder = {placeholder}
          style={styles.textInput}
          onChangeText = {onChangeText}
          keyboardType = {keyboardType}
          
        />
    </View>    
  );

}
const styles = StyleSheet.create({
    container: {
    padding: 8,
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 150,
    
  },

});

export default MyTextInput;
