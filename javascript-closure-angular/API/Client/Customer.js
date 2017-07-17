goog.provide('API.Client.Customer');

/**
 * @record
 */
API.Client.Customer = function() {}

/**
 * Unique identifier of the customer
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Customer.prototype.customerId;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.companyName;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.firstName;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.lastName;

/**
 * @type {!Date}
 * @export
 */
API.Client.Customer.prototype.creation;

/**
 * @type {!Date}
 * @export
 */
API.Client.Customer.prototype.update;

/**
 * @type {!API.Client.Address}
 * @export
 */
API.Client.Customer.prototype.registrantAddress;

