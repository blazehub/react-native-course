import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';


const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        flex: 1
    }
});

export default GoalInput;