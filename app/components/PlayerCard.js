import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function PlayerCard({name}) {
  return (
    <Card style={styles.card}>
        <Card.Content>
             <Title style={styles.cardText}>{name}</Title>
        </Card.Content>
        <View style={{flexDirection:'row'}}>
            <Card.Cover style={styles.cardImage} source={require('../assets/images/SC.png')}/>
            <Text style={styles.paragraph}>ToW ad mamkd ow aw dad wadaw dwad wjdawo odwa djadojad j</Text>
        </View>
    </Card>    
  );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
      }, 
      card: {
        width: 330,
        height: 180,
        marginLeft: 20,
        backgroundColor: colors.secondaryDark
      },
      cardImage:{
        width: 100,
        height: 100,
        marginLeft: 20,
       
        
      },
      cardText: {
        fontSize: 25,
        fontWeight: 'bold', 
        marginBottom: 5,
        marginLeft: 5,
      }
});

export default PlayerCard;