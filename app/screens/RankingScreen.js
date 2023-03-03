import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'


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
        },
        {
          id: 2,
          name: 'Liam',
          favActivity: 'South Side',
        },
        {
          id: 3,
          name: 'Leo',
          favActivity: 'Bulls',
        },
        {
          id: 4,
          name: 'Jonathan',
          favActivity: 'Bulls',
        },
      ];
      
    return(

        <SelectList setSelected={setSelected} data={data}  />
       
        
      )
};





export default App;
