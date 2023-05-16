import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableHighlight, Alert, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { SearchComp } from '../../components/SearchComp';
import { Button } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import loadingGif from '../../assets/images/giphy.gif'


export default function App() {
  const [selectedItem, setSelectedItem] = React.useState(null)
  const [player, setPlayer] = React.useState('');
  const [result, setResult] = React.useState('');
  const [like, setLike] = React.useState(253);
  const [dislike, setDislike] = React.useState(123);
  const [neutral, setNeutral] = React.useState(32);
  const [loading, setLoading] = React.useState(false);
  const API_URL = 'https://openai-quickstart-node-5wzw.vercel.app/api'
  const playerList = [
    { id: '1', value: 'Álex Abrines' },
    { id: '2', value: 'Steven Adams' },
    { id: '3', value: 'Bam Adebayo' },
    { id: '4', value: 'Deng Adel' },
    { id: '5', value: 'Bryce Adams-Woods' },
    { id: '6', value: 'DeVaughn Akoon-Purcell' },
    { id: '7', value: 'LaMarcus Aldridge' },
    { id: '8', value: 'Nickeil Alexander-Walker' },
    { id: '9', value: 'Grayson Allen' },
    { id: '10', value: 'Jarrett Allen' },
    { id: '11', value: 'Kadeem Allen' },
    { id: '12', value: 'Al-Farouq Aminu' },
    { id: '13', value: 'Justin Anderson' },
    { id: '14', value: 'Kyle Anderson' },
    { id: '15', value: 'Ryan Anderson' },
    { id: '16', value: 'Giannis Antetokounmpo' },
    { id: '17', value: 'Kostas Antetokounmpo' },
    { id: '18', value: 'Thanasis Antetokounmpo' },
    { id: '19', value: 'Carmelo Anthony' },
    { id: '20', value: 'OG Anunoby' },
    { id: '21', value: 'Ryan Arcidiacono' },
    { id: '22', value: 'Trevor Ariza' },
    { id: '23', value: 'D.J. Augustin' },
    { id: '24', value: 'Deandre Ayton' },
    { id: '25', value: 'Dwayne Bacon' },
    { id: '26', value: 'Marvin Bagley III' },
    { id: '27', value: 'Lonzo Ball' },
    { id: '28', value: 'Mo Bamba' },
    { id: '29', value: 'J.J. Barea' },
    { id: '30', value: 'Harrison Barnes' },
    { id: '31', value: 'RJ Barrett' },
    { id: '32', value: 'Will Barton' },
    { id: '33', value: 'Keita Bates-Diop' },
    { id: '34', value: 'Nicolas Batum' },
    { id: '35', value: 'Aron Baynes' },
    { id: '36', value: 'Kent Bazemore' },
    { id: '37', value: 'Darius Bazley' },
    { id: '38', value: 'Bradley Beal' },
    { id: '39', value: 'Malik Beasley' },
    { id: '40', value: 'Marco Belinelli' },
    { id: '41', value: 'Jordan Bell' },
    { id: '42', value: 'DeAndre Bembry'},
    { id: '43', value: 'Davis Bertans' },
    { id: '44', value: 'Patrick Beverley' },
    { id: '45', value: 'Khem Birch' },        
    { id: '46', value: 'Goga Bitadze' },
    { id: '47', value: 'Bismack Biyombo' },
    { id: '48', value: 'Nemanja Bjelica' },
    { id: '49', value: 'Tarik Black' },
    { id: '50', value: 'Bruce Brown' },
    { id: '51', value: 'Jaylen Brown' },
    { id: '52', value: 'Moses Brown' },
    { id: '53', value: 'Troy Brown Jr.' },
    { id: '54', value: 'Sterling Brown' },
    { id: '55', value: 'Jalen Brunson' },
    { id: '56', value: 'Thomas Bryant' },
    { id: '57', value: 'Reggie Bullock' },
    { id: '58', value: 'Trey Burke' },
    { id: '59', value: 'Alec Burks' },
    { id: '60', value: 'Jimmy Butler' },
    { id: '61', value: 'Bruno Caboclo' },
    { id: '62', value: 'Devontae Cacok' },
    { id: '63', value: 'Kentavious Caldwell-Pope' },
    { id: '64', value: 'Facundo Campazzo' },
    { id: '65', value: 'Vlatko Čančar' },
    { id: '66', value: 'Clint Capela' },
    { id: '67', value: 'Vernon Carey Jr.' },
    { id: '68', value: 'DeMarre Carroll' },
    { id: '69', value: 'Jevon Carter' },
    { id: '70', value: 'Michael Carter-Williams' },
    { id: '71', value: 'Alex Caruso' },
    { id: '72', value: 'Willie Cauley-Stein' },
    { id: '73', value: 'Lonnie Walker IV' },
    { id: '74', value: 'Chris Chiozza' },
    { id: '75', value: 'Marquese Chriss' },
    { id: '76', value: 'Gary Clark' },
    { id: '77', value: 'Brandon Clarke' },
    { id: '78', value: 'Jordan Clarkson' },
    { id: '79', value: 'Nicolas Claxton' },
    { id: '80', value: 'Chris Clemons' },
    { id: '81', value: 'Antonius Cleveland' },
    { id: '82', value: 'Amir Coffey' },
    { id: '83', value: 'John Collins' },
    { id: '84', value: 'Zach Collins' },
    { id: '85', value: 'Mike Conley' },
    { id: '86', value: 'Pat Connaughton' },
    { id: '87', value: 'Quinn Cook' },
    { id: '88', value: 'Tyler Cook' },
    { id: '89', value: 'DeMarcus Cousins' },
    { id: '90', value: 'Robert Covington' },
    { id: '91', value: 'Allen Crabbe' },
    { id: '92', value: 'Torrey Craig' },
    { id: '93', value: 'Jamal Crawford' },
    { id: '94', value: 'Jae Crowder' },
    { id: '95', value: 'Seth Curry' },
    { id: '96', value: 'Stephen Curry' },
    { id: '97', value: 'Troy Daniels' },
    { id: '98', value: 'Anthony Davis' },
    { id: '99', value: 'Ed Davis' },
    { id: '100', value: 'Terence Davis' },
    { id: '101', value: 'DeMar DeRozan' },
    { id: '102', value: 'Dewayne Dedmon' },
    { id: '103', value: 'Sam Dekker' },
    { id: '104', value: 'Matthew Dellavedova' },
    { id: '105', value: 'Cheick Diallo' },
    { id: '106', value: 'Hamidou Diallo' },
    { id: '107', value: 'Gorgui Dieng' },
    { id: '108', value: 'Donte DiVincenzo' },
    { id: '109', value: 'Luka Dončić' },
    { id: '110', value: 'Damyean Dotson' },
    { id: '111', value: 'Sekou Doumbouya' },
    { id: '112', value: 'PJ Dozier' },
    { id: '113', value: 'Goran Dragić' },
    { id: '114', value: 'Andre Drummond' },
    { id: '115', value: 'Jared Dudley' },
    { id: '116', value: 'Kris Dunn' },
    { id: '117', value: 'Kevin Durant' },
    { id: '118', value: 'Trevon Duval' },
    { id: '119', value: 'Jacob Evans' },
    { id: '120', value: 'Dante Exum' },
    { id: '121', value: 'Kenneth Faried' },
    { id: '122', value: 'Derrick Favors' },
    { id: '123', value: 'Cristiano Felício' },
    { id: '124', value: 'Terrance Ferguson' },
    { id: '125', value: 'Yogi Ferrell' },
    { id: '126', value: 'Dorian Finney-Smith' },
    { id: '127', value: 'Malachi Flynn' },
    { id: '128', value: 'Bryn Forbes' },
    { id: '129', value: 'Evan Fournier' },
    { id: '130', value: 'DeAaron Fox' },
    { id: '131', value: 'Tim Frazier' },
    { id: '132', value: 'Marc Gasol' },
    { id: '133', value: 'Rudy Gay' },
    { id: '134', value: 'Paul George' },
    { id: '135', value: 'Taj Gibson' },
    { id: '136', value: 'Harry Giles III' },
    { id: '137', value: 'Shai Gilgeous-Alexander' },
    { id: '138', value: 'Rui Hachimura' },
    { id: '139', value: 'Tyler Hall' },
    { id: '140', value: 'Josh Hall' },
    { id: '141', value: 'Tyrese Haliburton' },
    { id: '142', value: 'Josh Hart' },
    { id: '143', value: 'Isaiah Hartenstein' },
    { id: '144', value: 'Udonis Haslem' },
    { id: '145', value: 'Jaxson Hayes' },
    { id: '146', value: 'Gordon Hayward' },
    { id: '147', value: 'Kevin Hervey' },
    { id: '148', value: 'George Hill' },
    { id: '149', value: 'Solomon Hill' },
    { id: '150', value: 'Nate Hinton' },
    { id: '151', value: 'Aaron Holiday' },
    { id: '152', value: 'Jrue Holiday' },
    { id: '153', value: 'Justin Holiday' },
    { id: '154', value: 'Rondae Hollis-Jefferson' },
    { id: '155', value: 'Richaun Holmes' },
    { id: '156', value: 'Rodney Hood' },
    { id: '157', value: 'Al Horford' },
    { id: '158', value: 'Talen Horton-Tucker' },
    { id: '159', value: 'Danuel House Jr.' },
    { id: '160', value: 'Dwight Howard' },
    { id: '161', value: 'Markus Howard' },
    { id: '162', value: 'Kevin Huerter' },
    { id: '163', value: 'Elijah Hughes' },
    { id: '164', value: 'DeAndre Hunter' },
    { id: '165', value: 'Chandler Hutchison' },
    { id: '166', value: 'Serge Ibaka' },
    { id: '167', value: 'Andre Iguodala' },
    { id: '168', value: 'Ersan İlyasova' },
    { id: '169', value: 'Joe Ingles' },
    { id: '170', value: 'Brandon Ingram' },
    { id: '171', value: 'Kyrie Irving' },
    { id: '172', value: 'Jonathan Isaac' },
    { id: '173', value: 'Wes Iwundu' },
    { id: '174', value: 'Frank Jackson' },
    { id: '175', value: 'Jaren Jackson Jr.' },
    { id: '176', value: 'Josh Jackson' },
    { id: '177', value: 'Justin Jackson' },
    { id: '178', value: 'Reggie Jackson' },
    { id: '179', value: 'Demetrius Jackson' },
    { id: '180', value: 'LeBron James' },
    { id: '181', value: 'DaQuan Jeffries' },
    { id: '182', value: 'Ty Jerome' },
    { id: '183', value: 'Amile Jefferson' },
    { id: '184', value: 'John Jenkins' },
    { id: '185', value: 'Brandon Jennings' },
    { id: '186', value: 'Jaren Johnson' },
    { id: '187', value: 'Stanley Johnson' },
    { id: '188', value: 'Tre Jones' },
    { id: '189', value: 'Derrick Jones Jr.' },
    { id: '190', value: 'DeAndre Jordan' },
    { id: '191', value: 'Cameron Johnson' },
    { id: '192', value: 'James Johnson' },
    { id: '193', value: 'Keldon Johnson' },
    { id: '194', value: 'Tyler Johnson' },
    { id: '195', value: 'Wesley Johnson' },
    { id: '196', value: 'Nikola Jokić' },
    { id: '197', value: 'Damian Jones' },
    { id: '198', value: 'Tyus Jones' },
    { id: '199', value: 'Devin Jones' },
    { id: '200', value: 'Terrence Jones' },
    { id: '201', value: 'Mason Jones' },
    { id: '202', value: 'Frank Kaminsky' },
    { id: '203', value: 'Enes Kanter' },
    { id: '204', value: 'Luke Kennard' },
    { id: '205', value: 'Michael Kidd-Gilchrist' },
    { id: '206', value: 'George King' },
    { id: '207', value: 'Maxi Kleber' },
    { id: '208', value: 'Brandon Knight' },
    { id: '209', value: 'Kevin Knox II' },
    { id: '210', value: 'John Konchar' },
    { id: '211', value: 'Furkan Korkmaz' },
    { id: '212', value: 'Luke Kornet' },
    { id: '213', value: 'Kyle Kuzma' },
    { id: '214', value: 'Kevin Love' },
    { id: '215', value: 'Kyle Lowry' },
    { id: '216', value: 'Tyronn Lue' },
    { id: '217', value: 'Timothe Luwawu-Cabarrot' },
    { id: '218', value: 'Tyler Lydon' },
    { id: '219', value: 'Trey Lyles' },
    { id: '220', value: 'Thon Maker' },
    { id: '221', value: 'Daryl Macon' },
    { id: '222', value: 'Josh Magette' },
    { id: '223', value: 'Ian Mahinmi' },
    { id: '224', value: 'Thon Maker' },
    { id: '225', value: 'Boban Marjanović' },
    { id: '226', value: 'Lauri Markkanen' },
    { id: '227', value: 'Nico Mannion' },
    { id: '228', value: 'Frank Mason III' },
    { id: '229', value: 'Garrison Mathews' },
    { id: '230', value: 'Wesley Matthews' },
    { id: '231', value: 'Caleb Martin' },
    { id: '232', value: 'Cody Martin' },
    { id: '233', value: 'Kelan Martin' },
    { id: '234', value: 'Kevin Martin' },
    { id: '235', value: 'Khris Middleton' },
    { id: '236', value: 'Paul Millsap' },
    { id: '237', value: 'Patty Mills' },
    { id: '238', value: 'Shake Milton' },
    { id: '239', value: 'Donovan Mitchell' },
    { id: '240', value: 'Naz Mitrou-Long' },
    { id: '241', value: 'Malik Monk' },
    { id: '242', value: 'ETwaun Moore' },
    { id: '243', value: 'Ja Morant' },
    { id: '244', value: 'Juwan Morgan' },
    { id: '245', value: 'Markieff Morris' },
    { id: '246', value: 'Monte Morris' },
    { id: '247', value: 'Marcus Morris Sr.' },
    { id: '248', value: 'Johnathan Motley' },
    { id: '249', value: 'Svi Mykhailiuk' },
    { id: '250', value: 'Abdel Nader' },
    { id: '251', value: 'Larry Nance Jr.' },
    { id: '252', value: 'Shabazz Napier' },
    { id: '253', value: 'Raul Neto' },
    { id: '254', value: 'Georges Niang' },
    { id: '255', value: 'Nerlens Noel' },
    { id: '256', value: 'Zach Norvell Jr.' },
    { id: '257', value: 'Jaylen Nowell' },
    { id: '258', value: 'Frank Ntilikina' },
    { id: '259', value: 'Kendrick Nunn' },
    { id: '260', value: 'Jusuf Nurkić' },
    { id: '261', value: 'David Nwaba' },
    { id: '262', value: 'Jordan Nwora' },
    { id: '263', value: 'Royce ONeale' },
    { id: '264', value: "Jahlil Okafor" },
    { id: '265', value: 'Chuma Okeke' },
    { id: '266', value: 'Josh Okogie' },
    { id: '267', value: 'KZ Okpala' },
    { id: '268', value: 'Onyeka Okongwu' },
    { id: '269', value: 'Cedi Osman' },
    { id: '270', value: 'Kelly Oubre Jr.' },
    { id: '271', value: 'Jabari Parker' },
    { id: '272', value: 'Tony Parker' },
    { id: '273', value: 'Chandler Parsons' },
    { id: '274', value: 'Patrick Patterson' },
    { id: '275', value: 'Justin Patton' },
    { id: '276', value: 'Chris Paul' },
    { id: '277', value: 'Cameron Payne' },
    { id: '278', value: 'Elfrid Payton' },
    { id: '279', value: 'Gary Payton II' },
    { id: '280', value: 'Theo Pinson' },
    { id: '281', value: 'Mason Plumlee' },
    { id: '282', value: 'Miles Plumlee' },
    { id: '283', value: 'Jakob Poeltl' },
    { id: '284', value: 'Vincent Poirier' },
    { id: '285', value: 'Shamorie Ponds' },
    { id: '286', value: 'Jordan Poole' },
    { id: '287', value: 'Michael Porter Jr.' },
    { id: '288', value: 'Kevin Porter Jr.' },
    { id: '289', value: 'Otto Porter Jr.' },
    { id: '290', value: 'Bobby Portis' },
    { id: '291', value: 'Kristaps Porziņģis' },
    { id: '292', value: 'Dwight Powell' },
    { id: '293', value: 'Norman Powell' },
    { id: '294', value: 'Taurean Prince' },
    { id: '295', value: 'Zhou Qi' },
    { id: '296', value: 'Immanuel Quickley' },
    { id: '297', value: 'Julius Randle' },
    { id: '298', value: 'JJ Redick' },
    { id: '299', value: 'Naz Reid' },
    { id: '300', value: 'Cam Reynolds' },
    { id: '301', value: 'Cameron Reynolds' },
    { id: '302', value: 'Josh Richardson' },
    { id: '303', value: 'Malachi Richardson' },
    { id: '304', value: 'Austin Rivers' },
    { id: '305', value: 'Glenn Robinson III' },
    { id: '306', value: 'Jerome Robinson' },
    { id: '307', value: 'Mitchell Robinson' },
    { id: '308', value: 'Duncan Robinson' },
    { id: '309', value: 'Justin Robinson' },
    { id: '310', value: 'Isaiah Roby' },
    { id: '311', value: 'Rajon Rondo' },
    { id: '312', value: 'Derrick Rose' },
    { id: '313', value: 'Terrence Ross' },
    { id: '314', value: 'Terry Rozier' },
    { id: '315', value: 'Ricky Rubio' },
    { id: '316', value: 'DAngelo Russell' },
    { id: '317', value: 'Domantas Sabonis' },
    { id: '318', value: 'JaKarr Sampson' },
    { id: '319', value: 'Dario Šarić' },
    { id: '320', value: 'Tomáš Satoranský' },
    { id: '321', value: 'Chris Silva' },
    { id: '322', value: 'Ben Simmons' },
    { id: '323', value: 'Jonathon Simmons' },
    { id: '324', value: 'Kobi Simmons' },
    { id: '325', value: 'Anfernee Simons' },
    { id: '326', value: 'Deividas Sirvydis' },
    { id: '327', value: 'Alen Smailagić' },
    { id: '328', value: 'Marcus Smart' },
    { id: '329', value: 'Ish Smith' },
    { id: '330', value: 'J.R. Smith' },
    { id: '331', value: 'Zhaire Smith' },
    { id: '332', value: 'Dennis Smith Jr.' },
    { id: '333', value: 'Tony Snell' },
    { id: '334', value: 'Thabo Sefolosha' },
    { id: '335', value: 'Rayjon Tucker' },
    { id: '336', value: 'Khyri Thomas' },
    { id: '337', value: 'Lance Thomas' },
    { id: '338', value: 'Matt Thomas' },
    { id: '339', value: 'Klay Thompson' },
    { id: '340', value: 'Tristan Thompson' },
    { id: '341', value: 'Sindarius Thornwell' },
    { id: '342', value: 'Matisse Thybulle' },
    { id: '343', value: 'Killian Tillie' },
    { id: '344', value: 'Anthony Tolliver' },
    { id: '345', value: 'Juan Toscano-Anderson' },
    { id: '346', value: 'Gary Trent Jr.' },
    { id: '347', value: 'Allonzo Trier' },
    { id: '348', value: 'P.J. Tucker' },
    { id: '349', value: 'Evan Turner' },
    { id: '350', value: 'Myles Turner' },
    { id: '351', value: 'Jarrod Uthoff' },
    { id: '352', value: 'Jonas Valančiūnas' },
    { id: '353', value: 'Denzel Valentine' },
    { id: '354', value: 'Fred VanVleet' },
    { id: '355', value: 'Noah Vonleh' },
    { id: '356', value: 'Nikola Vučević' },
    { id: '357', value: 'Dean Wade' },
    { id: '358', value: 'Moritz Wagner' },
    { id: '359', value: 'Dion Waiters' },
    { id: '360', value: 'Kemba Walker' },
    { id: '361', value: 'Lonnie Walker IV' },
    { id: '362', value: 'John Wall' },
    { id: '363', value: 'Brad Wanamaker' },
    { id: '364', value: 'T.J. Warren' },
    { id: '365', value: 'P.J. Washington' },
    { id: '366', value: 'Yuta Watanabe' },
    { id: '367', value: 'Tremont Waters' },
    { id: '368', value: 'Paul Watson' },
    { id: '369', value: 'Quinndary Weatherspoon' },
    { id: '370', value: 'Russell Westbrook' },
    { id: '371', value: 'Coby White' },
    { id: '372', value: 'Hassan Whiteside' },
    { id: '373', value: 'Andrew Wiggins' },
    { id: '374', value: 'Grant Williams' },
    { id: '375', value: 'Kenrich Williams' },
    { id: '376', value: 'Lou Williams' },
    { id: '377', value: 'Marvin Williams' },
    { id: '378', value: 'Patrick Williams' },
    { id: '379', value: 'Robert Williams III' },
    { id: '380', value: 'Zion Williamson' },
    { id: '381', value: 'D.J. Wilson' },
    { id: '382', value: 'Dylan Windler' },
    { id: '383', value: 'Justise Winslow' },
    { id: '384', value: 'Christian Wood' },
    { id: '385', value: 'Delon Wright' },
    { id: '386', value: 'Thaddeus Young' },
    { id: '387', value: 'Trae Young' },
    { id: '388', value: 'Cody Zeller' },
    { id: '389', value: 'Tyler Zeller' },
    { id: '390', value: 'Ante Žižić' },
    { id: '391', value: 'Ivica Zubac' },

  ]
  const data = [
    {
      name: "Like",
      number: like,
      color: "#00FF00",
      legendFontColor: "white",
      legendFontSize: 15
    },
    {
      name: "Dislike",
      number: dislike,
      color: "#F00",
      legendFontColor: "white",
      legendFontSize: 15
    },
    {
      name: "Neutral",
      number: neutral,
      color: "#808080",
      legendFontColor: "white",
      legendFontSize: 15
    },

  ]
  
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: player }),
      });

      const data = await response.json();
      setResult(data.result);
      setPlayer("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      Alert.alert("Failed to generate analysis. Try later");
    } finally {
      setLoading(false);
    }

  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}> Analyzing {player}</Text>
        <Image
          source={loadingGif}
          style={styles.loading}
          resizeMode="contain"
        />
      </View>
    );
  }
  const onTryAgain = () => {
    setResult('');
  };

  if (result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Playstyle Analysis
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.title}>
          Sentiment Analysis
        </Text>
        <View style={styles.spacing} />
        <Button style={styles.input}
          title="Analyze Different Player"
          onPress={onTryAgain}
          color={colors.primary}>

        </Button>
      </SafeAreaView>
    );
    

  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <SelectList 
        boxStyles = {{backgroundColor:'white', marginBottom: 25, width: 200}}
        inputStyles = {{color:'black'}} 
        dropdownTextStyles ={{color:'white'}}
        disabledTextStyles={{color:'white'}}
        dropdownStyles = {{marginBottom:40}}
        setSelected={setPlayer} 
        data={playerList}  
        placeholder='Select Player'
        searchPlaceholder='Search Player'
      />

        <Button style={styles.input}
          title="Run Analysis"
          onPress={onSubmit}
          color={colors.primary}
        />
        <Text
          onPress={() => Alert.alert('How it Works','Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
          style={styles.textInfo}>
          How it Works
        </Text>
        <Text style={styles.title}>{result}</Text>
      </View>
    </View>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    alignSelf: 'center',
    justifyContent: 'flex-end'

  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30
  },
  textInfo: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'white',
    marginTop: 20,

  },
  textInput: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.textColor,
    borderRadius: 10,
    height: 50,
    width: 250,
    fontFamily: 'Poppins_400Regular',
    color: 'black'
  },
  input: {
    marginTop: 50,
    marginBottom: 30,
    padding: 20,
    width: 10000,
    height: 70,
    borderRadius: 40,
    color: colors.primary,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  loading: {
    width: "100%",
  },
  result: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  },
  spacing: {
    height: 50
  },
});


