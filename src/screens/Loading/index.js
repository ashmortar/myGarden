import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ActivityIndicator, StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading = ({ navigation }) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }, [])

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Loading.defaultPropTypes = {
  navigation: {
    navigate: () => {},
  },
};
