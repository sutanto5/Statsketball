import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style ={styles.image}
          source={require('../../assets/images/logo.png')}
        />
      <Text style={styles.title}>
        BasketballBuddies
      </Text>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 700, paddingHorizontal: 20}}>
            Text
          </Text>

          <View style={{height: 130, marginTop: 20}}>
            
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  title: {
     fontSize: 30,
    fontWeight: 'bold', 
  },
  image: {
    width: 150,
    height: 150,
  }
});
