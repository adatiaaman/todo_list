import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        });

        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (error) {
        console.log('Error addTodo API', error.message);
        res.status(500).json({ message: error.message    });
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });
        res.status(200).json(todos);
    } catch (error) {
        console.log('Error getAllTodos API', error.message);
        res.status(500).json({ message: error.message    });
    }
}

export const toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        const todoNew = await Todo.findOneAndUpdate({ _id: req.params.id }, { done: !todo.done });

        res.status(200).json(todoNew);
    } catch (error) {
        console.log('Error toggleTodo API', error.message);
        res.status(500).json({ message: error.message    });
    }
}

export const updateTodo = async (req, res) => {
    try {
        await Todo.findOneAndUpdate({ _id: req.params.id }, { data: req.body.data });
        const todo = await Todo.findById(req.params.id);

        res.status(200).json(todo);
    } catch (error) {
        console.log('Error updateTodo API', error.message);
        res.status(500).json({ message: error.message    });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        
        res.status(200).json(todo);
    } catch (error) {
        console.log('Error updateTodo API', error.message);
        res.status(500).json({ message: error.message    });
    }
}