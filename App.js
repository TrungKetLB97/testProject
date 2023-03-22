import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeeList from './feeList.js';

const App = () => {
  return (
    <View style={styles.container}>
      <FeeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default App;
