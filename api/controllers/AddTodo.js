'use strict';

const client = require('../helpers/es');

module.exports = {
    AddTodo: AddTodo
};

function AddTodo (req, res, next) {
    client.create({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.todo.value.todo_id,
        body: req.swagger.params.todo.value
    }, (error, response) => {
        res.header('Content-type', 'application/json');

        if (error) {
            console.log(error);
            res.statusCode = 409;
            res.end(JSON.stringify(error));
        } else {
            console.log(`Todo ${req.swagger.params.todo.value.todo_id} added to Elasticsearch`);
            res.end();
        }
    })
};
