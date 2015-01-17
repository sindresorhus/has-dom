'use strict';
module.exports = function () {
	return typeof window !== 'undefined'
		&& typeof document !== 'undefined'
		&& typeof document.createElement === 'function';
};
