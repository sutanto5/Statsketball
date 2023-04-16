import {NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import RankingScreen from './screens/RankingScreen';
import colors from "../config/colors";

const homeName = 'Home';
const analysisName = 'Analysis';
const rankingName = 'Ranking';

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
      <NavigationContainer>
        <Tab.Navigator

          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: colors.tabColor
            },
            headerStyle:{
              backgroundColor: colors.tabColor
            },
            headerTitleStyle: {
              color: 'white'
            },
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
            activeTintColor: colors.primary,
            inactiveTintColor: 'white',
            labelStyle: { paddingBottom: 0, fontSize: 15, fontWeight: 'bold' },
          }}>
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={analysisName} component={AnalysisScreen} />
          <Tab.Screen name={rankingName} component={RankingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  export default MainContainer;
  