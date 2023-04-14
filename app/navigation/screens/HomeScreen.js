import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../config/colors';
import NewsCard from '../../components/NewsCard';
import PlayerCard from '../../components/PlayerCard';


export default function App() {
  return (

    <View style={styles.container}>
      <SafeAreaView style={{flex: 2}}>
        <View style={{flex:1, paddingTop: 10}}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{height: 180, marginTop: 30}}>
              <ScrollView horizontal={true} >
                {/*npm i react-native-paper*/}
          
                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.cardText}>Giannis Antetokounmpo</Title>
                  </Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <Card.Cover style={styles.cardImage} source={require('../../assets/images/ga.png')}/>
                    <Text style={styles.paragraph}>Points: 31.1 {'\n'}
                                                  Total Rebounds: 11.8{'\n'}
                                                  Assists: 5.7</Text>
                  </View>
                </Card>
                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.cardText}>Stephan Curry</Title>
                  </Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <Card.Cover style={styles.cardImage} source={require('../../assets/images/SC.png')}/>
                    <Text style={styles.paragraph}>Points: 29.4 {'\n'}
                                                  Total Rebounds: 6.1{'\n'}
                                                  Assists: 6.3</Text>
                  </View>
                </Card>
              </ScrollView>
            </View>
          </ScrollView>
          </View>
      </SafeAreaView>  

      <SafeAreaView style={{flex: 3}}>
        <View style={{flex:1, paddingTop: 5}}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{height: 260, marginBottom: 5}}>
              <ScrollView horizontal={true} >
                
                <NewsCard
                  title="Basketball Player plays basketball"
                  date="5/3/2023"
                  image={require('../../assets/images/news.png')}
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
    marginTop: 20,
  },
  top: {
    flex:1,
    alignItems: 'center',

  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  image: {
    width: 150,
    height: 150,
  }, 
  card: {
    width: 330,
    height: 170,
    marginLeft: 20,
    backgroundColor: colors.surface
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
    color: colors.textColor,
  }, 
  paragraph: {
    fontSize: 15,
    fontWeight: 'bold',
    flexShrink: 1,
    paddingLeft: 10,
    color: colors.textColor,
  },
  
  
});
