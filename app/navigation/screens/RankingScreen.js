import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list';
import ListPlayer from '../../components/ListPlayer';
import ListPlayerSeparator from '../../components/ListPlayerSeparator';
import colors from '../../config/colors';
import Popup from '../../components/Modal'

const App = () => {


  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'Overall', value:'Overall'},
    {key:'Shooting', value:'Shooting'},
    {key:'Defense', value:'Defense'},
    {key:'Rebounds', value:'Rebounds'},
    

  ]
  const players = [
      {
        id: 1,
        playerName: 'Josh Sutanto',
        teamName: 'Air India',
        position: 'SG',
        rank: 1
      },
      {
        id: 2,
        playerName: 'Liam Nance',
        teamName: 'South Side',
        position: 'PF',
        rank: 2
      },
      {
        id: 3,
        playerName: 'Leo Thomas',
        teamName: 'Bulls',
        position: 'C',
        rank: 3
      },
      {
        id: 4,
        playerName: 'Jonathan Moy',
        teamName: 'Bulls',
        position: 'PG',
        rank: 4
      },
    ];
    
const onPress = (item) => {
  setActiveItem(item)
  setModalVisible(true)
}
const [modalVisible, setModalVisible] = React.useState(false);
const [activeItem, setActiveItem] = React.useState(null);

  return(
    <View>
      <View>
        <SelectList style = {styles.main}
        setSelected={setSelected} data={data}  />    
        <FlatList style = {styles.list}
        data={players}
        keyExtractor={(players) => players.id.toString()}
        renderItem={({ item }) => (
          <ListPlayer
            playerName={item.playerName}
            rank={item.rank}
            teamName={item.teamName}
            position = {item.position}
            onPress={() => onPress(item)}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListPlayerSeparator color={"#aaaaaa"} />
        )}
      />
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} activeItem={activeItem} />
      </View>
  </View>
    );
}
const styles = StyleSheet.create({
main: {
  backgroundColor: "4b4c4c",
  textColor: 'white'
},
list: {
  marginTop:20
}
});

export default App;

