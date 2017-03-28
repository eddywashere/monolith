/*global exports, require */
var got = require('got');

exports.handler = function (event, context) {
	'use strict';
	var start = Date.now();

	if (!event.url) {
		return context.fail('url not set up');
	}

	got(event.url, {retries: 0, timeout: (event.timeout || 2000)}).then(function () {
		console.log('success', event);
		context.succeed({success: event.url, time: (Date.now() - start)});
	}, function (e) {
		console.log('error', e);
		context.done();
	});
};
