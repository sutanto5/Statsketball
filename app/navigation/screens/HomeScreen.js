import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyCard from '../../components/MyCard';
import colors from '../../config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style ={styles.image}
            source={require('../../assets/images/logo.png')}
          />
        <Text style={styles.title}>
          BasketballBuddies
        </Text>
      </View>  
      <SafeAreaView style={{flex: 2}}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1, paddingTop: 20}}>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
              Find a basketball
            </Text>
            <View style={{height: 180, marginTop: 20}}>
              <ScrollView horizontal={true}>
                {/*npm i react-native-paper*/}
                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.cardText}>Stephan Curry</Title>
                  </Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <Card.Cover style={styles.cardImage} source={require('../../assets/images/logo.png')}/>
                    <Card.Content>
                      <Paragraph>ToW ad mamkd ow aw dadwadaw dwadwjdawoodwa djadojad j</Paragraph>
                    </Card.Content>
                  </View>
                </Card>
                
              </ScrollView>
            </View>
          </View>
        </ScrollView>
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
    fontSize: 30,
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
    width: 80,
    height: 80,
    marginLeft: 20,
   
    
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginBottom: 5,
    marginLeft: 5,
  }
  
});
