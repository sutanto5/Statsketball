import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        
        <Text style={styles.title}>
          BasketballBuddies
        </Text>
      </View>  
      <SafeAreaView style={{flex: 2}}>
        <View style={{flex:1, paddingTop: 20}}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{height: 180, marginTop: 20}}>
              <ScrollView horizontal={true} >
                {/*npm i react-native-paper*/}
                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.cardText}>Stephan Curry</Title>
                  </Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <Card.Cover style={styles.cardImage} source={require('../../assets/images/SC.png')}/>
                    <Text style={styles.paragraph}>ToW ad mamkd ow aw dad wadaw dwad wjdawo odwa djadojad j</Text>
                  </View>
                </Card>

                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.cardText}>Giannis Antetokounmpo</Title>
                  </Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <Card.Cover style={styles.cardImage} source={require('../../assets/images/ga.png')}/>
                    <Text style={styles.paragraph}>ToW ad mamkd ow aw dad wadaw dwad wjdawo odwa djadojad j</Text>
                  </View>
                </Card>
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
  },
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
  }, 
  paragraph: {
    fontSize: 15,
    fontWeight: 'bold',
    flexShrink: 1,
    paddingLeft: 10,
  },
  
});
