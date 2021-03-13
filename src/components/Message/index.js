import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
function Message() {
  return (
    <View style={styles.containerMessage}>
      <Text style={styles.title}> Travel only if necessary</Text>
      <Text style={styles.text}>
        If you must travel during this time it's important to take safety
        measures seriously.
      </Text>
      <Text style={styles.learnMore}> Learn more</Text>
    </View>
  );
}

export default Message;
