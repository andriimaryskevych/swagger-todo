'use strict';

const client = require('../helpers/es');

module.exports = {
    UpdateTodoById: UpdateTodoById
};

function UpdateTodoById (req, res, next) {
    console.log(`Updating todo by id: ${req.swagger.params.id.value}`);

    client.update({
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
