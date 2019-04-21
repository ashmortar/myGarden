import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main = () => {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);
  const [error, setError] = useState(null);

  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      currentUser = firebase.auth();
    }).catch(error => setError(error))
  }
  return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button
          title="Sign Out"
          onPress={handleLogout}
        />
        <Text>
          {error && error.message}
        </Text>
      </View>
  );
}
