import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [ greeting, setGreeting ] = useState('hi');

  handleClick = () => {
    setGreeting('hello world!')
  }
  return (
    <View style={styles.container}>
      <Text>Tits tits tits tits</Text>
      <Text>{greeting}</Text>
      <Button style={styles.button} title="Location" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#000000',
  }
});
