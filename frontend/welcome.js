'use strict';

export default (message) => {

	if(NODE_ENV == 'production'){
		alert(`Welkome ${message}`);
	}

};

