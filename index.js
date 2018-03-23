'use strict';
module.exports = () => {
	return typeof window !== 'undefined' &&
		typeof document !== 'undefined' &&
		typeof document.createElement === 'function';
};
