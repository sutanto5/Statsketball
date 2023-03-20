import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Popup({modalVisible, setModalVisible, activeItem}) {
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
            <Text style={styles.smallerTitleText}>Scoring stats:</Text>
            <Text style={styles.modalText}>Pts/75 Possessions:</Text>
            <Text style={styles.modalText}>True Shooting %:</Text>
            <View style={styles.line}></View>
            <Text style={styles.smallerTitleText}>Playmaking Stats: </Text>
            <Text style={styles.modalText}>Assists/75 Possessions:</Text>
            <Text style={styles.modalText}>Turnovers/75 Possessions:</Text>
            <View style={styles.line}></View>
            <Text style={styles.smallerTitleText}>Shooting Stats: </Text>
            <Text style={styles.modalText}>3-Point %:</Text>
            <Text style={styles.modalText}>3-Point Attempts/75 Possessions:</Text>
            <Text style={styles.modalText}>Free Throw %:</Text>
             <View style={styles.line}></View>
            <Text style={styles.smallerTitleText}>Defensive Stats: </Text>
            <Text style={styles.modalText}>Steal %:</Text>
            <Text style={styles.modalText}>Block %:</Text>
            <Text style={styles.modalText}>DBPM:</Text>
            <View style={styles.line}></View>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
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
