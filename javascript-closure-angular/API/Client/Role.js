goog.provide('API.Client.Role');

/**
 * @record
 */
API.Client.Role = function() {}

/**
 * Unique identifier of the customer
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Role.prototype.roleId;

/**
 * The name of the role
 * @type {!string}
 * @export
 */
API.Client.Role.prototype.roleName;

/**
 * Timestamp of the creation of the role (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Role.prototype.creation;

/**
 * Timestamp of the last update of the role (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Role.prototype.update;

