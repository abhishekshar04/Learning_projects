import {TODOS} from '../DB/DB.js';
export function postTodo(req,res) {

    const todo = req.body.todo;
    const time = req.body.time;

    if(!todo || !time){
        res.status(400).send('Invalid todo or time');
    }

    TODOS.push({todo: todo, time: time,token: req.headers.token, completed: false});
    console.log(TODOS);
    res.status(200).send('Todo created');

}

export function getTodo(req,res) {
    const token = req.headers.token;
    const todos = TODOS.filter(todo => todo.token === token);
    console.log(todos);
    res.status(200).send(todos);
}
