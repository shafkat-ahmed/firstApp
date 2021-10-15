import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  
  const [courseGoals,setCourseGoals]=useState([]);
  const [isAddMode,setIsAddMode] = useState('false')

  const addGoalHandler=(goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals,{ key:Math.random().toString(),value:goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler=(goalKey)=>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.key!==goalKey)
    });
  }
  const onCancel=()=>{
    setIsAddMode(false);
  };


  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={onCancel} />
      <FlatList
        data={courseGoals}
        renderItem={itemData=>
         <GoalItem id={itemData.item.key} onRemoveGoal={removeGoalHandler} title={itemData.item.value} />
        }/>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 50,
  },  
});
