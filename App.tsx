import {View, Text} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Octicons from 'react-native-vector-icons/Octicons';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: colors.textDark, fontSize: font.size.XL}}>
        Not Walmart
        <Octicons name="north-star" />
      </Text>
    </View>
  );
};

export default App;
