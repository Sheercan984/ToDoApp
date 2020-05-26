import ToDoList from './ToDoList';
import { connect } from 'react-redux';
import {deleteTodo} from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    deleteTodo:(id: number) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);