import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Feed from './src/components/Feed';

const App = () => {
  return (
    <View style={styles.app}>
      <Feed />


    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
