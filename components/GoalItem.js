import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onRemoveGoal.bind(this,props.id)}>
            <View style={styles.list}><Text>{props.title}</Text></View> 
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    list:{
        marginTop:10,
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }

})
export default GoalItem;
