import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {formatDistanceToNow, format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  
  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  return format(d, 'PPP EEE p', {locale: ko});
}

function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

function SearchListItem({log}) {
  const {title, body, date, dueDate} = log; 
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Write', {
      log,
    });
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
      <Text style={styles.date}>{formatDate(date)}     Due Date:  {(dueDate)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>: {truncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 6,
  },
  title: {
    color: '#263238',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
    marginLeft: 4,
  },
});

export default SearchListItem;
