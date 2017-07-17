goog.provide('API.Client.Device');

/**
 * @record
 */
API.Client.Device = function() {}

/**
 * Unique identifier of the device
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Device.prototype.deviceId;

/**
 * Timestamp of the creation of the device (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Device.prototype.creation;

/**
 * Timestamp of the last update of the device (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Device.prototype.update;

/**
 * Device type string
 * @type {!string}
 * @export
 */
API.Client.Device.prototype.type;

/**
 * @type {!API.Client.Events}
 * @export
 */
API.Client.Device.prototype.deviceEvents;

/**
 * Array of possible actions to execute for the device
 * @type {!Array<!API.Client.Device_device_actions>}
 * @export
 */
API.Client.Device.prototype.deviceActions;

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Device.prototype.siteId;

/**
 * @type {!API.Client.MetaData}
 * @export
 */
API.Client.Device.prototype.metaData;

