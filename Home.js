import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({navigation}) => {
  return (
    <View testID="hello-view" style={styles.home}>
      <Text testID="say-hello">Hello, World!</Text>
      <Button
        testID="go-to-docs"
        title="Go To Docs"
        onPress={() => navigation.navigate('Docs')}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Home.navigationOptions = {
  title: 'Welcome',
};

export default Home;
