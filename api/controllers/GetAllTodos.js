'use strict';

const client = require('../helpers/es');

module.exports = {
    GetAllTodos: GetAllTodos
};

function GetAllTodos (req, res, next) {
    client.search({
        index: 'todo',
        type: 'todo',
        q: '*',
    }, (error, response) => {
        if (error) {
            res.header('Content-type', 'application/json');
            res.end({ error });
        } else {
            const results = response.hits.hits.map(item => item._source);

            res.header('Content-type', 'application/json');
            res.send(results);
        }
    })
};
