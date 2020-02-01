import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
    { key: Math.random().toString(), value: 'Learn React Native' },
  ]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} renderItem={itemData =>
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    flex: 1
  },
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

