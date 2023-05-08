import React, { memo, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import colors from '../config/colors';

export const SearchDropDown = memo(() => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <View>
      <AutocompleteDropdown style={styles.container}
        clearOnFocus={false}
        closeOnBlur={true}
        textInputProps={{
          placeholder: 'Type a Player',
        }}
        onSelectItem={setSelectedItem}
        dataSet={[
          {
            id: '1', title: 'Precious Achiuwa'
          },
          {
            id: '2', title: 'Steven Adams'
          },
          {
            id: '3', title: 'Bam Adebayo'
          },
          {
            id: '4', title: 'Ochai Agbaji'
          },
          {
            id: '5', title: 'Santi Aldama'
          },
          {
            id: '6', title: 'Nickeil Alexander-Walker'
          },
          {
            id: '7', title: 'Grayson Allen'
          },
          {
            id: '8', title: 'Jarrett Allen'
          },
          {
            id: '9', title: 'Jose Alvarado'
          },
          {
            id: '10', title: 'Kyle Anderson'
          },
          {
            id: '11', title: 'Steven Adams'
          },
          {
            id: '12', title: 'Steven Adams'
          },
          {
            id: '13', title: 'Steven Adams'
          },
          {
            id: '14', title: 'Steven Adams'
          },
          {
            id: '15', title: 'Steven Adams'
          },
          {
            id: '16', title: 'Steven Adams'
          },



        ]}
      />
      <Text style={{ color: colors.background, fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
   container:{
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.textColor,
    borderRadius: 5,
    height: 50,
    width: 250, 
    
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    
  }

});