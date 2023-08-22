/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import getTodos from './src/services/api/todos';
import getUsers from './src/services/api/users';

function App(): JSX.Element {
  const onFetchTodos = async () => {
    const response = await getTodos();
    console.log(`******* getTodos - ${JSON.stringify(response.data)}`);
  };

  const onFetchUser = async () => {
    const response = await getUsers();
    console.log(`******* getUsers - ${JSON.stringify(response.data)}`);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Get Todos" onPress={onFetchTodos} />
      <Button title="Get User" onPress={onFetchUser} />
    </SafeAreaView>
  );
}

export default App;
