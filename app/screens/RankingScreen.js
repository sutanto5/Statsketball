import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'
import ListPlayer from './components/ListPlayer';
import ListPlayerSeparator from './components/ListPlayerSeparator';
import colors from './components/colors';

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
          name: 'Josh',
          teamName: 'Air India',
          position: 'SG',
          rank: 1
        },
        {
          id: 2,
          name: 'Liam',
          teamName: 'South Side',
          position: 'PF',
          rank: 2
        },
        {
          id: 3,
          name: 'Leo',
          teamName: 'Bulls',
          position: 'C',
          rank: 3
        },
        {
          id: 4,
          name: 'Jonathan',
          teamName: 'Bulls',
          position: 'PG',
          rank: 4
        },
      ];
      
    return(
      <View>
        <SelectList setSelected={setSelected} data={data}  />
       
        <FlatList
        data={players}
        keyExtractor={(players) => players.id.toString()}
        renderItem={({ item }) => (
          <ListPlayer
            name={item.name}
            rank={item.rank}
            teamName={item.teamName}
            position = {item.position}
            onPress={() => console.log(item.name + ' pressed')}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListPlayerSeparator color={colors.medium} />
        )}
      />
      </View>
      );
}





export default App;

