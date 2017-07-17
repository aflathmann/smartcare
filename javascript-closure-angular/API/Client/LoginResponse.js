goog.provide('API.Client.LoginResponse');

/**
 * @record
 */
API.Client.LoginResponse = function() {}

/**
 * The current status of the user
 * @type {!string}
 * @export
 */
API.Client.LoginResponse.prototype.userStatus;

/**
 * @type {!API.Client.RegistrationInfo}
 * @export
 */
API.Client.LoginResponse.prototype.registrationInfo;

/** @enum {string} */
API.Client.LoginResponse.UserStatusEnum = { 
  inactive: 'inactive',
  active: 'active',
}
