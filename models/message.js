'use strict';


var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgresql://localhost/bulletinboard');

module.exports = sequelize.define('message', {
    title: Sequelize.STRING,
    message: Sequelize.TEXT
}, {
    defaultScope: {
        order: [
            ['createdAt', 'DESC']
        ]

    }
});
