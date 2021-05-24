import store from '../store';
import { todosActions } from '../store/actions/todos_actions';
import { Todo } from '../store/reducers/todos_reducer';

export class TodoService {
    setTodoDone(todo: Todo) {
        store.dispatch(todosActions.setTodoDone(todo.id));
    }
    setNewTodo(todo: Todo) {
        store.dispatch(todosActions.setNewTodo(todo));
    }
    setDeleteTodo(todo: Todo) {
        store.dispatch(todosActions.setDeleteTodo(todo));
    }

    
}