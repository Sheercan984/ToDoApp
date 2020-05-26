export const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,{
                    id: action.id,
                    title: action.title,
                    text: action.text,
                }
            ]
        case 'DELETE_TODO':
            return state.filter(todo =>  todo.id != action.id)
        default:
            return state;
    }
}
