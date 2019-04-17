'use strict';

module.exports = {
	GetAllTodos
};

function GetAllTodos (req, res, next) {
	res.json([
		{
			todo_id: 0,
			todo: 'Get some milk',
			author: 'Andrew',
			createddate: '2019-04-17T18:52:38.396Z',
			duedate: '2019-04-18T18:52:38.396Z',
			completed: false
		},
		{
			todo_id: 1,
			todo: 'Get some batteries',
			author: 'Andrew',
			createddate: '2019-04-17T18:52:38.396Z',
			duedate: '2019-04-18T18:52:38.396Z',
			completed: false
		},
		{
			todo_id: 2,
			todo: 'Get some milk',
			author: 'Andrew',
			createddate: '2019-04-17T18:52:38.396Z',
			duedate: '2019-04-18T18:52:38.396Z',
			completed: false
		},
	])
}
