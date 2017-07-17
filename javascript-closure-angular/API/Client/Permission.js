goog.provide('API.Client.Permission');

/**
 * @record
 */
API.Client.Permission = function() {}

/**
 * Unique identifier of the customer
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Permission.prototype.permissionId;

/**
 * The HTTP method of the permission
 * @type {!string}
 * @export
 */
API.Client.Permission.prototype.permissionMethod;

/**
 * The path of the permission
 * @type {!string}
 * @export
 */
API.Client.Permission.prototype.permissionPath;

/**
 * Timestamp of the creation of the permission (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Permission.prototype.creation;

/**
 * Timestamp of the last update of the permission (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Permission.prototype.update;

/** @enum {string} */
API.Client.Permission.PermissionMethodEnum = { 
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
}
