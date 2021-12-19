import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/SearchList';
import LogContext from '../components/contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;

