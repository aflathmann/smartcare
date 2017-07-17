goog.provide('API.Client.Registration');

/**
 * @record
 */
API.Client.Registration = function() {}

/**
 * @type {!API.Client.User}
 * @export
 */
API.Client.Registration.prototype.user;

/**
 * @type {!API.Client.Customer}
 * @export
 */
API.Client.Registration.prototype.customer;

/**
 * @type {!string}
 * @export
 */
API.Client.Registration.prototype.password;

