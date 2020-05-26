import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import ToDos from '../../components/ToDos'
import { listStyles } from '../../constans/Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constans/Colors';

const List =  ({navigation}) => {
    const pressHandler = () => {
        navigation.push('Form');
    }
    return (
        <View>
            <TouchableOpacity style={listStyles.addButton}  onPress={pressHandler}>
                <MaterialCommunityIcons name='bookmark-plus-outline' color={Colors.black} size={50}/>  
            </TouchableOpacity>
            <ToDos/>
        </View>
        
    )
}



export default List;