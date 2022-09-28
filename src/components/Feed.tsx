import {View, TextInput, StyleSheet, Image, Text} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

const Feed = () => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/WalmartLogo.jpg')}
          style={styles.logo}
        />
      </View>

      {/* Header 2 */}
      <View style={styles.header2}>
        <Octicons name="search" size={25} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search Walmart"
        />
        <Feather name="shopping-cart" size={31} />
        <Text> Cart </Text>
      </View>

      {/* Body */}

      {/* Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '10%',
    aspectRatio: 1,
    marginTop: 30,
    alignContent: 'center',
    alignItems: 'center',
  },

  post: {},
  header: {flexDirection: 'row'},

  header2: {
    flexDirection: 'row',
    padding: 1,
    width: '75%',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 21,
    marginLeft: 1,
    paddingHorizontal: 10,
  },
  logo: {flex: 1},
  input: {
    marginLeft: 5,
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.normal,
    padding: 5,
  },
});

export default Feed;
