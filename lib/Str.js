import _ from 'underscore';

/**
 * Returns true if the haystack begins with the needle
 *
 * @param {String} haystack  The full string to be searched
 * @param {String} needle    The case-sensitive string to search for
 * @return {Boolean} Returns true if the haystack starts with the needle.
 */
function startsWith(haystack, needle) {
    return _.isString(haystack) && _.isString(needle) && haystack.startsWith(needle);
}

/**
 * Checks if parameter is a string or function.
 * If it is a string, then we will just return it.
 * If it is a function, then we will call it with
 * any additional arguments and return the result.
 *
 * @param {String|Function} parameter
 * @returns {*}
 */
function result(parameter, ...args) {
    return _.isFunction(parameter) ? parameter(...args) : parameter;
}

export {startsWith, result};