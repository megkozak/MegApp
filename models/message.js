// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var message = sequelize.define('message', {
//     title: DataTypes.STRING
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return message;
// };
//
// module.exports = function(sequelize, Sequelize) {
// 	return(sequelize.define('message', {
// 		title: Sequelize.STRING,
// 		body:  Sequelize.TEXT
// 	});
// };


var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgresql://localhost/bulletinboard');

module.exports = sequelize.define('message', {
	title: Sequelize.STRING,
	message:  Sequelize.TEXT
}, {
	defaultScope: {
		order: [['createdAt', 'DESC']]
		// descending chronological order
	},
  getterMethods: {
		url: function() {
			return(`/message/${this.title}`);
		}
  }
});
