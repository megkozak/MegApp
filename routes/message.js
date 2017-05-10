var express = require('express');
var Message = require('../models/message')
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('index',
//   {
//     title: "message route TITLE",
//     message: "this is meessage"
//   });
// });
//
// module.exports = router;
// var express = require('express');
//
// var Post    = require('../models/message');
//
// // var models  = require('../models/index');
// // var Post    = models.post;
//
// var router  = express.Router();

// Index.
router.get('/', function(request, response) {
	Message.findAll().then(function(messages) {
		response.render('message/index', {
			messages: messages
		});
	});
});

// Search.
router.get('/search', function(request, response) {
	var query     = request.query.query;
	var condition = `%${query}%`;

	Message.findAndCountAll({
		where: {
			$or: {
				title: {
					$iLike: condition
				},
				body: {
					$iLike: condition
				}
			}
		}
	}).then(function(result) {
		response.render('message/search', {
			query: query,
			count: result.count,
			posts: result.rows
		});
	});
});

// Create.
router.post('/', function(request, response) {
	Message.create({
		title: request.body.title,
		message:  request.body.message,
	}).then(function(post) {
		response.redirect("/");
	});
});

// New.
router.get('/new', function(request, response) {
	response.render('message/new');
});

// Show.
router.get('/:title', function(request, response) {
	Message.findOne({
		where: {
			title: request.params.title
		}
	}).then(function(message) {
		response.render('message/show', {
			message: message
		});
	});
});

module.exports = router;
