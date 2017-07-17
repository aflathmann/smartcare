goog.provide('API.Client.LoginInfo');

/**
 * @record
 */
API.Client.LoginInfo = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.LoginInfo.prototype.email;

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.LoginInfo.prototype.password;

