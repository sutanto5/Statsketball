import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableHighlight, Alert, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { SearchComp } from '../../components/SearchComp';
import { Button } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { sentimentReturn } from '../../components/sentiment'
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';


export default function App() {

    const [text, setText] = useState('');
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();

    function sentimentReturn() {
        var docx = sentiment.analyze(text);
        console.log(docx)
        var score = docx.score
        var overall = "Overall Score: " + docx.score + "\n"
        var positive = "Positive Words: " + docx.positive + "\n"
        var negative = "Negative Words: " + docx.negative + "\n"
        var results = overall + positive + negative

        if (score > 0) {
            results += "Overall this statement would be positive"
        }

        if (score < 0) {
            results += "Overall this statement would be negative"
        }

        if (score = 0) {
            results += "Overall this statement would be neutral"
        }


        return results
    }



    {/*npx expo install expo-font @expo-google-fonts/poppins*/ }
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>

            <TextInput style={styles.title}
                placeholder="Enter Sample Text"
                onChangeText={(text) => setText(text)}
                value={text}></TextInput>
            <Button style={styles.input}
                title="Submit"
                color={colors.primary}
                onPress={() => alert(sentimentReturn(text))}

            />
            <Text
                onPress={() => Alert.alert('How it Works', 'Input a prospective tweet and our sentiment score will let you know how the public will feel about it')}
                style={styles.textInfo}>
                How it Works
            </Text>



        </View>





    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center'
    },
    top: {
        marginTop: 40,
        alignItems: 'center',

    },
    title: {
        marginTop: 80,
        margin: 40,
        width: 200,
        height: 80,
        borderRadius: 1,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 10,
        backgroundColor: 'white',
        fontFamily: 'Poppins_700Bold',
    },
    image: {
        width: 70,
        height: 70,
    },
    textInfo: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'white',
        marginTop: 20,

    },

});
