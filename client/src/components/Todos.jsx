import { useEffect } from "react";
import { getAllTodos, deleteTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";

import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        }
        else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done);
        }
        else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done);
        }
        else {
            return todos;
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({done, _id}) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        });
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
                    {
                        todos.some(todo => todo.done) ? 
                        (<button onClick={removeDoneTodos} className="button clear">
                            Remove Done Todos
                        </button>) : null
                    }
                
            </div>
            <ul>
                {
                    getTodos().map(todo => {
                        return(
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    )}
                )
                } 
            </ul>
        </article>
    )
}

export default Todos;