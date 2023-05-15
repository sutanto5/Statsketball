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

  const data = [
    { key: 'Overall', value: 'Overall' },
    { key: 'Scoring', value: 'Scoring' },
    { key: 'Defense', value: 'Defense' },
    { key: 'Offense', value: 'Offense' },
    { key: 'Games Played', value: 'Games Played' },
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
      pts: jsondata.data[i].pts,
      freeThrowP: jsondata.data[i].freeThrowP,
      blockP: jsondata.data[i].blockP,
      stealP: jsondata.data[i].stealP,
      assistP: jsondata.data[i].assistP,
      turnoverP: jsondata.data[i].turnoverP,
      threePointP: jsondata.data[i].threePointP,
      trueShootingP: jsondata.data[i].trueShootingP,
      threePointA: jsondata.data[i].threePointA,
      dws: jsondata.data[i].dws,
      rank: i + 1,
    }
    somePlayers.push(guy);
  }

if(selected == 'Scoring' ) {
  somePlayers.sort((s1, s2) => {
    return s2.scoringValue - s1.scoringValue
  })
}
if(selected == 'Overall' ) {
  somePlayers.sort((s1, s2) => {
    return s2.totalValue - s1.totalValue
  })
}
if(selected == 'Defense' ) {
  somePlayers.sort((s1, s2) => {
    return s2.defensiveValue - s1.defensiveValue
  })
}
if(selected == 'Offense' ) {
  somePlayers.sort((s1, s2) => {
    return s2.offensiveValue - s1.offensiveValue
  })
}
if(selected == 'Games Played' ) {
  somePlayers.sort((s1, s2) => {
    return s2.gamesPlayed - s1.gamesPlayed
  })
}


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
        <SelectList
        boxStyles = {{backgroundColor:'white'}}
        inputStyles = {{color:'black'}} 
        dropdownTextStyles ={{color:'white'}}
        disabledTextStyles={{color:'white'}}
        setSelected={setSelected} 
        data={data}  
        placeholder='Select Ranking Method'
        search={false}/>
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

