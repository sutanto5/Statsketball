import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import ListPlayer from '../../components/ListPlayer';
import ListPlayerSeparator from '../../components/ListPlayerSeparator';
import colors from '../../config/colors';
import Popup from '../../components/Modal';




const jsondata = require('../../webscrapedData.json');




const App = () => {






  const [selected, setSelected] = React.useState("");

  const order = [
    { key: 'Overall', value: 'Overall' },
    { key: 'Shooting', value: 'Shooting' },
    { key: 'Defense', value: 'Defense' },
    { key: 'Rebounds', value: 'Rebounds' },
  ]


  const somePlayers = [];
  for (let i = 0; i < jsondata.data.length; i++) {
    const guy = {

      id: i,
      playerName: jsondata.data[i].name,
      teamName: jsondata.data[i].team,
      position: jsondata.data[i].position,
      gamesPlayed: jsondata.data[i].gamesPlayed,
      scoringValue: jsondata.data[i].scoringValue,
      playmakingValue: jsondata.data[i].playmakingValue,
      scalabilityValue: jsondata.data[i].scalabilityValue,
      offensiveValue: jsondata.data[i].scoringValue + jsondata.data[i].playmakingValue / 2 + jsondata.data[i].scalabilityValue / 1000,
      defensiveValue: jsondata.data[i].defensiveValue,
      totalValue: jsondata.data[i].totalValue,
      rank: i + 1,
    }
    somePlayers.push(guy);
  }

  somePlayers.sort((s1, s2) => {
    return s2.totalValue - s1.totalValue
  })


  for (let i = 0; i < somePlayers.length; i++) {
    somePlayers[i].rank = i + 1
  }

  players = somePlayers

  const onPress = (item) => {
    setActiveItem(item)
    setModalVisible(true)
  }
  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <View>

        <FlatList style={styles.list}
          data={players}
          keyExtractor={(players) => players.id.toString()}
          renderItem={({ item }) => (
            <ListPlayer
              playerName={item.playerName}
              rank={item.rank}
              teamName={item.teamName}
              position={item.position}
              onPress={() => onPress(item)}
            />
          )}
          ItemSeparatorComponent={() => (
            <ListPlayerSeparator color={colors.dark} />
          )}
        />
        <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} activeItem={activeItem} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  list: {
    marginTop: 20,
    color: colors.textColor
  },

  text: {
    textColor: 'white'
  }
});

export default App;

