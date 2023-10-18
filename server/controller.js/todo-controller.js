import todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
    try {
        const newTodo = await todo.create({
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