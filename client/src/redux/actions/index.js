import axios from 'axios';
import { ADD_TODO } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async(dispacth) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, {data})
        dispacth({
            type: ADD_TODO,
            payload: res.data
        });
    } catch (error) {   
        console.log('Error addNewTodo API', error.message);
    }
}