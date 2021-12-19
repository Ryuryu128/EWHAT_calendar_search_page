import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchContext from '../components/contexts/SearchContext';
import EmptySearchResult from '../components/EmptySearchResult';
import SearchList from '../components/SearchList'
import LogContext from '../components/contexts/LogContext';

function SearchScreen({navigation}) {
  
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered = 
    keyword === ''
      ? []
      : logs.filter((log) =>
        [log.title, log.body].some((text) => text.includes(keyword)),
      );

  if (keyword === ''){
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
        <SearchList logs={filtered} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
