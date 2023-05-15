import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from'../config/colors';
export default function Popup({ modalVisible, setModalVisible, activeItem }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>{activeItem?.playerName} </Text>
            <View style={styles.line}></View>
            <Text style={styles.smallerTitleText}>Games Played: {activeItem?.gamesPlayed} </Text>
            <Text style={styles.smallerTitleText}>Scoring: </Text>
            <Text style={styles.modalText}>Pts/100: {activeItem?.pts}</Text>
            <Text style={styles.modalText}>True Shooting %: {activeItem?.trueShootingP}</Text>
            <Text style={styles.smallerTitleText}>Playmaking: </Text>
            <Text style={styles.modalText}>Assist%: {activeItem?.assistP}</Text>
            <Text style={styles.modalText}>Turnover%: {activeItem?.turnoverP}</Text>
            <Text style={styles.smallerTitleText}>Shooting: </Text>
            <Text style={styles.modalText}>Three Point%: {activeItem?.threePointP}</Text>
            <Text style={styles.modalText}>Three Point Attempts/100: {activeItem?.threePointA}</Text>
            <Text style={styles.modalText}>Free Throw%: {activeItem?.freeThrowP}</Text>
            <Text style={styles.smallerTitleText}>Defensive: </Text>
            <Text style={styles.modalText}>Steal%: {activeItem?.stealP}</Text>
            <Text style={styles.modalText}>Block%: {activeItem?.blockP}</Text>
            <Text style={styles.modalText}>Defensive Win Shares: {activeItem?.dws}</Text>


            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: colors.primary }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 350,
    height: 670,
    margin: 20,
    backgroundColor: '#3b3838',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  line: {
    width: '100%',
    height: 6,
    backgroundColor: 'white',
    marginBottom: 10,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    color: 'white'
  },
  smallerTitleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'

  },

  titleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'

  },
  openButton: {
    backgroundColor: '#F94FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
});
