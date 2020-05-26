import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { listStyles } from '../constans/Styles';

const ToDoList = ({todos, deleteTodo}) => {
    
    return (
        <View>
            <ScrollView>
                {todos.map(todo =>
                    <View key={todo.id} style={listStyles.todo}>
                        <View style={listStyles.todoText}>
                            <Text style={listStyles.todoTextTitle}>{todo.title}</Text>
                            <Text style={listStyles.todoTextText}>{todo.text}</Text>
                        </View>
                        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                            <MaterialCommunityIcons name='delete' color='#79797A' size={45}/>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={{height:150}}></View>
            </ScrollView>
        </View>
    )
}


export default ToDoList;