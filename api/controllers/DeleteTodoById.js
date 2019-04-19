'use strict';

const client = require('../helpers/es');

module.exports = {
    DeleteTodoById: DeleteTodoById
};

function DeleteTodoById (req, res, next) {
    console.log(`Deleting todo by id: ${req.swagger.params.id.value}`);

    client.delete({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.id.value,
    }, (error, response) => {
        res.header('Content-type', 'application/json');

        if (error) {
            res.end(JSON.stringify(error));
        } else {
            res.end(JSON.stringify(response._source));
        }
    })
};
