//Import Libraries

import React from 'react';
import { View, Text } from 'react-native';

//Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FBF8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
     position: 'relative'
  },
  textStyle: {

  }
};

//Make Component Available
export { Header };
