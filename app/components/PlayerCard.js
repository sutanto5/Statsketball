import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import colors from '../config/colors';

function PlayerCard({name, image, points, rebounds, assists}) {
  return (
    <Card style={styles.card}>
        <Card.Content>
            <Title style={styles.cardText}>{name}</Title>
        </Card.Content>
        <View style={{flexDirection:'row'}}>
            <Card.Cover style={styles.cardImage} source={image}/>
            <Text style={styles.paragraph}>Points: {points} {'\n'}
                                            Rebounds: {rebounds}{'\n'}
                                            Assists: {assists}</Text>
        </View>
    </Card>
  );
}

const styles = StyleSheet.create({
      card: {
        width: 340,
        height: 250,
        marginLeft: 10,
        backgroundColor: colors.surface
      },
      cardImage:{
        width: 170,
        height: 170,
        marginLeft: 15,
        marginTop: 10
       
        
      },
      cardText: {
        fontSize: 25,
        fontWeight: 'bold', 
        marginBottom: 5,
        marginLeft: 5,
        color: colors.textColor,
      }, 
      paragraph: {
        fontSize: 17,
        fontWeight: 'normal',
        paddingLeft: 10,
        paddingTop: 10, 
        color: colors.textColor,
      },
      
});
export default PlayerCard;