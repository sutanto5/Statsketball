import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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
            <Text></Text>
            <Text style={styles.smallerTitleText}>Scoring Value: {activeItem?.scoringValue}</Text>
            <Text></Text>
            <Text style={styles.smallerTitleText}>Playmaking Value: {activeItem?.playmakingValue}</Text>
            <Text></Text>
            <Text style={styles.smallerTitleText}>Scalability Value: {activeItem?.scalabilityValue}</Text>
            <Text></Text>
            <Text style={styles.smallerTitleText}>Offensive Value: {activeItem?.offensiveValue}</Text>
            <Text></Text>
            <Text style={styles.smallerTitleText}>Defensive Value: {activeItem?.defensiveValue}</Text>
            <Text></Text>
            <Text style={styles.smallerTitleText}>Total Value: {activeItem?.totalValue}</Text>


            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
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
    width: 300,
    height: 700,
    margin: 20,
    backgroundColor: '#D3D3D3',
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
    backgroundColor: 'black',
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
  },
  smallerTitleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',

  },

  titleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  openButton: {
    backgroundColor: '#F94FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
});
