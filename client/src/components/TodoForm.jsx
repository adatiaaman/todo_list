import { useState } from "react"
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
        const [text, setText] = useState('');

        const dispatch = useDispatch();

        const onFormSubmit = (e) => {
                // store in database - redux store
                e.preventDefault();
                dispatch(addNewTodo(text));

                setText('');
        }

        const onInputChange = (e) => {
                // console.log(e.target.value);
                setText(e.target.value);
        }

        return (
                <form className="form" onSubmit={onFormSubmit}>
                        <input
                            placeholder="Enter new Todo..."
                            className="input" 
                            onChange={onInputChange}
                            value={text}
                        />
                </form>
        )
}

export default TodoForm;