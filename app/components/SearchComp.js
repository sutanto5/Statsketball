import React, { memo, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import colors from '../config/colors';

export const SearchComp = memo(() => {
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
                { id: "1", title: "Precious Achiuwa" },
                { id: "2", title: "Jaylen Adams" },
                { id: "3", title: "Steven Adams" },
                { id: "4", title: "Bam Adebayo" },
                { id: "5", title: "LaMarcus Aldridge" },
                { id: "6", title: "Ty-Shon Alexander" },
                { id: "7", title: "Nickeil Alexander-Walker" },
                { id: "8", title: "Grayson Allen" },
                { id: "9", title: "Jarrett Allen" },
                { id: "10", title: "Kadeem Allen" },
                { id: "11", title: "Al-Farouq Aminu" },
                { id: "12", title: "Kyle Anderson" },
                { id: "13", title: "Giannis Antetokounmpo" },
                { id: "14", title: "Kostas Antetokounmpo" },
                { id: "15", title: "Thanasis Antetokounmpo" },
                { id: "16", title: "Carmelo Anthony" },
                { id: "17", title: "Cole Anthony" },
                { id: "18", title: "OG Anunoby" },
                { id: "19", title: "Ryan Arcidiacono" },
                { id: "20", title: "Trevor Ariza" },
                { id: "21", title: "D.J. Augustin" },
                { id: "22", title: "Deni Avdija" },
                { id: "23", title: "Deandre Ayton" },
                { id: "24", title: "Udoka Azubuike" },
                { id: "25", title: "Dwayne Bacon" },
                { id: "26", title: "Marvin Bagley III" },
                { id: "27", title: "LaMelo Ball" },
                { id: "28", title: "Lonzo Ball" },
                { id: "29", title: "Mo Bamba" },
                { id: "30", title: "Desmond Bane" },
                { id: "31", title: "Harrison Barnes" },  { id: "32", title: "RJ Barrett" },  { id: "33", title: "Will Barton" },  { id: "34", title: "Keita Bates-Diop" },  { id: "35", title: "Nicolas Batum" },  { id: "36", title: "Aron Baynes" },  { id: "37", title: "Kent Bazemore" },  { id: "38", title: "Darius Bazley" },  { id: "39", title: "Bradley Beal" },  { id: "40", title: "Malik Beasley" },  { id: "41", title: "Jordan Bell" },  { id: "42", title: "DeAndre' Bembry" },  { id: "43", title: "Davis Bertans" },  { id: "44", title: "Patrick Beverley" },  { id: "45", title: "Saddiq Bey" },  { id: "46", title: "Tyler Bey" },  { id: "47", title: "Khem Birch" },  { id: "48", title: "Goga Bitadze" },  { id: "49", title: "Bismack Biyombo" },  
                { id: "50", title: "Nemanja Bjelica" },
                { id: "51", title: "Eric Bledsoe" },
                { id: "52", title: "Bogdan Bogdanovic" },
                { id: "53", title: "Bojan Bogdanovic" },
                { id: "54", title: "Bol Bol" },
                { id: "55", title: "Marques Bolden" },
                { id: "56", title: "Jordan Bone" },
                { id: "57", title: "Isaac Bonga" },
                { id: "58", title: "Devin Booker" },
                { id: "59", title: "Chris Boucher" },
                { id: "60", title: "Brian Bowen II" },
                { id: "61", title: "Ky Bowman" },
                { id: "62", title: "Avery Bradley" },
                { id: "63", title: "Tony Bradley" },
                { id: "64", title: "Jarrell Brantley" },
                { id: "65", title: "Ignas Brazdeikis" },
                { id: "66", title: "Mikal Bridges" },
                { id: "67", title: "Miles Bridges" },
                { id: "68", title: "Moses Brown" },
                { id: "69", title: "Bruce Brown" },
                { id: "70", title: "Sterling Brown" },
                { id: "71", title: "Charlie Brown Jr." },
                { id: "72", title: "Troy Brown Jr." },
                { id: "73", title: "Jalen Brunson" },
                { id: "74", title: "Thomas Bryant" },
                { id: "75", title: "Reggie Bullock" },
                { id: "76", title: "Trey Burke" },
                { id: "77", title: "Alec Burks" },
                { id: "78", title: "Jimmy Butler" },
                { id: "79", title: "Bruno Caboclo" },
                { id: "80", title: "Devontae Cacok" },
                { id: "81", title: "Kentavious Caldwell-Pope" },
                { id: "82", title: "Facundo Campazzo" },
                { id: "83", title: "Vlatko Cancar" },
                { id: "84", title: "Clint Capela" },
                { id: "85", title: "Vernon Carey Jr." },
                { id: "86", title: "Jevon Carter" },
                { id: "87", title: "Wendell Carter Jr." },
                { id: "88", title: "Michael Carter-Williams" },
                { id: "89", title: "Alex Caruso" },
                { id: "90", title: "Willie Cauley-Stein" },
                { id: "91", title: "Chris Chiozza" },  { id: "92", title: "Marquese Chriss" },  { id: "93", title: "Gary Clark" },  { id: "94", title: "Brandon Clarke" },  { id: "95", title: "Jordan Clarkson" },  { id: "96", title: "Nicolas Claxton" },  { id: "97", title: "Amir Coffey" },  { id: "98", title: "John Collins" },  { id: "99", title: "Zach Collins" },  { id: "100", title: "Mike Conley" },
                { "id": "101", "title": "Pat Connaughton" },  { "id": "102", "title": "Quinn Cook" },  { "id": "103", "title": "Tyler Cook" },  { "id": "104", "title": "DeMarcus Cousins" },  { "id": "105", "title": "Robert Covington" },  { "id": "106", "title": "Allen Crabbe" },  { "id": "107", "title": "Torrey Craig" },  { "id": "108", "title": "Jamal Crawford" },  { "id": "109", "title": "Jae Crowder" },  { "id": "110", "title": "Seth Curry" },  { "id": "111", "title": "Stephen Curry" },  { "id": "112", "title": "Troy Daniels" },  { "id": "113", "title": "Anthony Davis" },  { "id": "114", "title": "Ed Davis" },  { "id": "115", "title": "Terence Davis" },  { "id": "116", "title": "DeMar DeRozan" },  { "id": "117", "title": "Dewayne Dedmon" },  { "id": "118", "title": "Sam Dekker" },  { "id": "119", "title": "Matthew Dellavedova" },  { "id": "120", "title": "Donte DiVincenzo" },  { "id": "121", "title": "Luka Doncic" },  { "id": "122", "title": "Hamidou Diallo" },  { "id": "123", "title": "Gorgui Dieng" },  { "id": "124", "title": "Spencer Dinwiddie" },  { "id": "125", "title": "Chris Douglas-Roberts" },  { "id": "126", "title": "PJ Dozier" },  { "id": "127", "title": "Luguentz Dort" },  { "id": "128", "title": "Luka Doncic" },  { "id": "129", "title": "Damian Dotson" },  { "id": "130", "title": "Kevin Durant" },  { "id": "131", "title": "Tyler Dorsey" },  { "id": "132", "title": "Toney Douglas" },  { "id": "133", "title": "Goran Dragic" },  { "id": "134", "title": "Jared Dudley" },  { "id": "135", "title": "Kris Dunn" },  { "id": "136", "title": "Kevin Durant" },  { "id": "137", "title": "Jacob Evans" },  { "id": "138", "title": "Dante Exum" },  { "id": "139", "title": "Cristiano Felicio" },  { "id": "140", "title": "Terrance Ferguson" },



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