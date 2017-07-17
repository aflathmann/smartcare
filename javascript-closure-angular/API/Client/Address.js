goog.provide('API.Client.Address');

/**
 * @record
 */
API.Client.Address = function() {}

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Address.prototype.addressId;

/**
 * The type of the address
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.street;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.city;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.postcode;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.additionals;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.state;

/**
 * @type {!string}
 * @export
 */
API.Client.Address.prototype.country;

/** @enum {string} */
API.Client.Address.TypeEnum = { 
  invoice: 'invoice',
  site: 'site',
  registrant: 'registrant',
}
