import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
const GoalInput = (props) => {
    const [enteredGoal,setEnteredGoal]=useState('');
   
    const goalInputHandler=(enteredText)=>
    {
     setEnteredGoal(enteredText);
    };
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="ADD"  onPress={props.onAddGoal.bind(this,enteredGoal)}/>
        </View>
        <View style={styles.button}>
        <Button title="Cancel" color="red" onPress={props.onCancel}/>  
        </View>
        </View>
        </View>
        </Modal>
    );
};
const styles=StyleSheet.create(
    {
        input : { 
            width: "70%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            marginBottom:10,
          },
        inputContainer: {
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            
          }, 
        buttonContainer:{
            width:'80%',
            flexDirection:"row",
            justifyContent:"space-around",
        },
        button:{
            padding:10,
            width:'50%',
        }
    }
)

export default GoalInput;