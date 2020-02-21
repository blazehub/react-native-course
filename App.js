import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


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

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key != goalId)
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler}/>
      <FlatList data={courseGoals} renderItem={itemData =>
        <GoalItem  onDelete={removeGoalHandler.bind(this, itemData.item.key)} title={itemData.item.value} />
      }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

