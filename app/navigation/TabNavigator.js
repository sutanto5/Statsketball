import {NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import RankingScreen from './screens/RankingScreen';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#4b4c4c'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor:'#1357BE'
      }}>
          <Tab.Screen name = "Home" component={HomeScreen} options = {{
            tabBarIcon: ({color, size}) => (
              <Ionicons name = "home-outline" color={color} size = {size} />
            )
          }}/>
          <Tab.Screen name = "Analysis" component={AnalysisScreen} options = {{
            tabBarIcon: ({color, size}) => (
              <Ionicons name = "analytics-outline" color={color} size = {size} />
            )
          }}/>
          <Tab.Screen name = "Ranking" component={RankingScreen}options = {{
            tabBarIcon: ({color, size}) => (
              <Ionicons name = "podium-outline" color={color} size = {size} />
            )
          }}/>


      </Tab.Navigator>
      </NavigationContainer>
      
      
      
      
      
      
      /* <NavigationContainer style = {styles.container}>
        <Tab.Navigator 
          initialRouteName={homeName}

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
          
             if (rn == homeName) {
               iconName = focused ? 'home' : 'home-outline';
             } else if (rn == analysisName) {
               iconName = focused ? 'analytics' : 'analytics-outline';
             } else if (rn == rankingName) {
               iconName = focused ? 'podium' : 'podium-outline';
             }rn
             return <Ionicons name={iconName} size={size} color={color} />;
           
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1357BE',
            inactiveTintColor: 'white',
            backgrounColor:'black',
            labelStyle: { paddingBottom: 0, fontSize: 15, fontWeight: 'bold' },
            headerShown:false
          }}>
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={analysisName} component={AnalysisScreen} />
          <Tab.Screen name={rankingName} component={RankingScreen} />
          
        </Tab.Navigator>
      </NavigationContainer>
      */
    );
  }
  export default TabNavigator;
  