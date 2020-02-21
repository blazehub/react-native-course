import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

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

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: goalTitle }
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key != goalId)
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData =>
        <GoalItem onDelete={removeGoalHandler.bind(this,itemData.item.key)} title={itemData.item.value} />
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

