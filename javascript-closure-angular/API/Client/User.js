goog.provide('API.Client.User');

/**
 * @record
 */
API.Client.User = function() {}

/**
 * Unique identifier of the customer
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.User.prototype.customerId;

/**
 * @type {!Date}
 * @export
 */
API.Client.User.prototype.creation;

/**
 * @type {!Date}
 * @export
 */
API.Client.User.prototype.update;

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.language;

/**
 * @type {!Date}
 * @export
 */
API.Client.User.prototype.lastLogin;

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.firstName;

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.lastName;

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.User.prototype.roleId;

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.email;

