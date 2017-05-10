var express = require('express');
var Message = require('../models/message')
var router = express.Router();

// Index.
router.get('/guestbook', function(request, response) {
    Message.findAll().then(function(messages) {
        response.render('message/index', {
            messages: messages
        });
    });
});

// Create.
router.post('/guestbook', function(request, response) {
    Message.create({
        title: request.body.title,
        message: request.body.message,
    }).then(function(post) {
        response.redirect("/guestbook");
    });
});

// New.
router.get('/', function(request, response) {
    response.render('message/new');
});


module.exports = router;
