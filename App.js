import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import { SearchContextProvider } from './src/components/contexts/SearchContext';
import { LogContextProvider } from './src/components/contexts/LogContext';
import { SubjectContextProvider } from './src/components/contexts/SubjectContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <SubjectContextProvider>
          <LogContextProvider>
            <RootStack />
          </LogContextProvider>
        </SubjectContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
