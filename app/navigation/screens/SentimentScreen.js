import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../config/colors';
import PlayerCard from '../../components/PlayerCard';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
    {/*npx expo install expo-font @expo-google-fonts/poppins*/ }
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Button style={styles.input}
                title="Run Analysis"
                onPress={onSubmit}
                color={colors.primary}
            />
            <Text
                onPress={() => Alert.alert('How it Works', 'Our AI inspects millions of webpages and social media apps in order to generate a thorough and accurate expanation of the playstyle of the player and find the public sentiment about them ')}
                style={styles.textInfo}>
                How it Works
            </Text>
            <Text style={styles.title}>{result}</Text>
        </View>





    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    top: {
        marginTop: 40,
        alignItems: 'center',

    },
    title: {
        fontSize: 30,
        color: colors.textColor,
        fontFamily: 'Poppins_700Bold',
    },
    image: {
        width: 70,
        height: 70,
    },

});
