import * as React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Image, Alert } from 'react-native';
import colors from './app/config/colors';

function MyButton({title, backColor, underColor, onPress}) {
    
  
    return (

       <TouchableHighlight
          onPress={onPress} 
          underlayColor="#DDDDDD"   
          style={[styles.button, {backgroundColor: backColor} ]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>

        
    );
}


const styles = StyleSheet.create({
   button: {
    height: 50,
    width: 100,
    margin: 10,
    padding: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
})
export default MyButton;