goog.provide('API.Client.Event');

/**
 * @record
 */
API.Client.Event = function() {}

/**
 * Unique identifier of the event
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Event.prototype.eventId;

/**
 * Timestamp of the creation of the event (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Event.prototype.creation;

/**
 * Timestamp of the last update of the event (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Event.prototype.update;

/**
 * ID of the site that this device is related to
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Event.prototype.siteId;

/**
 * The topic of the notification
 * @type {!string}
 * @export
 */
API.Client.Event.prototype.eventTopic;

/**
 * ID of the device that triggered the alert
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Event.prototype.deviceId;

/**
 * @type {!API.Client.MetaData}
 * @export
 */
API.Client.Event.prototype.metaData;

