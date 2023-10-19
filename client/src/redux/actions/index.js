import axios from 'axios';
import { ADD_TODO, GET_ALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TABS } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async(dispacth) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, {data})
        dispacth({
            type: ADD_TODO,
            payload: res.data
        });
    } catch (error) {   
        console.log('Error addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async(dispacth) => {
    try {
        const res = await axios.get(`${API_URL}/todos`)
        dispacth({
            type: GET_ALL_TODOS,
            payload: res.data
        });
    } catch (error) {
        console.log('Error getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async(dispacth) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`)
        dispacth({
            type: TOGGLE_TODO,
            payload: res.data
        });
    } catch (error) {
        console.log('Error getAllTodos API ', error.message);
    }
}

export const updateTodo = (id, data) => async(dispacth) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, {data})
        dispacth({
            type: UPDATE_TODO,
            payload: res.data
        });
    } catch (error) {
        console.log('Error updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async(dispacth) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispacth({
            type: DELETE_TODO,
            payload: res.data
        });
    } catch (error) {
        console.log('Error deleteTodo API ', error.message);
    }
}

export const toggleTabs = (tab) => (dispacth) => {
    dispacth({
        type: TOGGLE_TABS,
        selector: tab
    });
}