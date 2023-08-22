/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import getTodos from './src/services/api/todos';

function App(): JSX.Element {
  const [data, setData] = useState('');
  const onFetchTodos = async () => {
    const response = await getTodos();
    setData(JSON.stringify(response.data));
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Get Todos" onPress={onFetchTodos} />
      <Text>{data}</Text>
    </SafeAreaView>
  );
}

export default App;
