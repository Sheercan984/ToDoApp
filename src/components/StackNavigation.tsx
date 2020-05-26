import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import List from '../screens/ToDoList/list';
import Form from '../screens/ToDoList/form';

const screens = {
    List:{
        screen : List,
    },
    Form:{
        screen: Form
    }
    
}

const HomeStack = createStackNavigator(screens, {
    headerMode:'screen', 
    defaultNavigationOptions:() => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 22
        }
        
    })});



export default createAppContainer(HomeStack);