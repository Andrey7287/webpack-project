'use strict';

window.onload = function() {

	console.log(`jQuery ${$.fn.jquery} is loaded`);

	$('#loginBtn').click( () => {


		require.ensure([], (require) => {

			let login = require('./login');
			login();

		}, 'auth');

	});
	$('#logoutBtn').click( () => {


		require.ensure([], (require) => {

			let login = require('./logout');
			login();

		}, 'auth');

	});


};
