import { StyleSheet, Dimensions } from 'react-native';
import colors from './Colors';
import Constants from 'expo-constants';

export const profileStyle = StyleSheet.create({
    scrollview: {
        marginHorizontal: 10,
        marginTop: Constants.statusBarHeight
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: "center"
    },
    text: {
        fontSize: 25,
        textAlign: "center"
    },
});

export const articleStyle = StyleSheet.create({
    scrollView: {
        marginTop: Constants.statusBarHeight
    },
    tile: {
        height: '19%',
        backgroundColor: colors.white,
        margin: 2,
        flexDirection: 'row',
    },
    tileImage: {
        height: 80,
        width: 80,
        margin: 5,
        borderRadius: 10,
        
    },
    tileTextContainer:{
        flex: 1
    },
    tileText: {
        fontSize: 15,
        margin: 5,
    }
})
export const listStyles = StyleSheet.create({
    addButton : {
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 100,
        margin: 10
    },
    addButtonText : {
        fontSize: 30,
        padding: 5,
        color: colors.black
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey,
        margin: 5,
        borderRadius: 10,
        backgroundColor: colors.white
    },
    todoText: {
        flex: 1,
        flexDirection: 'column'
    },
    todoTextTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    todoTextText: {
        fontSize: 15
    },
    container: {
        padding: 10
    },
    formText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Input: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: colors.lightGrey
    }
})