'use strict';

const ElasticSearch = require('elasticsearch');
const client = new ElasticSearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

module.exports = client;