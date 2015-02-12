/**
 *
 *	Authentication Controller
 *	These methods are for processing images and making them web-ready. The
 *	processed images should be resized, optimized for the web, and renamed
 *	to names the website will use.
 *
 **/

var passwordless	= require('passwordless'),
		MongoStore		= require('passwordless-mongostore'),
		smtpServer		= require('../config/email'),
		db						= require('../config/db'),
		User					= require('../models/user');

passwordless.init(new MongoStore(db.token));



passwordless.addDelivery(function (tokenToSend, uidToSend, recipient, callback) {
	var host = 'localhost:8080',
			mailOptions = {
				from: 'maggie-gallery@tylerwalters.com',
				to: recipient,
				subject: 'Token for ' + host,
				text: 'Hello!\nAccess your account here: http://' + host + '/login?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend)
			};

	smtpServer.sendMail(mailOptions, function (err, info) {
		if (err)
			console.log(err);

		// console.log('Message sent: ' + info.response);
		callback(info);
	});
});

// app.use(passwordless.acceptToken({ successRedirect: '/'}));

exports.requestToken = passwordless.requestToken(function (user, delivery, callback) {
	User.findOne({'email': user}, function (err, user) {
		if (err)
			res.send(err);

		callback(null, user.id);
	});
});