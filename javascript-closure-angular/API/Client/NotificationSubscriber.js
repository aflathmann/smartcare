goog.provide('API.Client.NotificationSubscriber');

/**
 * @record
 */
API.Client.NotificationSubscriber = function() {}

/**
 * Unique identifier of the notification subscriber
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.NotificationSubscriber.prototype.id;

/**
 * The user id of the notification subscriber
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.NotificationSubscriber.prototype.userId;

/**
 * Timestamp of the creation of the Notification subscriber (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.NotificationSubscriber.prototype.creation;

/**
 * Timestamp of the last update of the Notification subscriber (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.NotificationSubscriber.prototype.update;

/**
 * The type of the address
 * @type {!string}
 * @export
 */
API.Client.NotificationSubscriber.prototype.recipientType;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.NotificationSubscriber.prototype.eventTopics;

/**
 * This can be either a cell phone number or an email address, depending on the recipient_type
 * @type {!string}
 * @export
 */
API.Client.NotificationSubscriber.prototype.recipientTarget;

/**
 * The id of the site to subscribe to
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.NotificationSubscriber.prototype.siteId;

/** @enum {string} */
API.Client.NotificationSubscriber.RecipientTypeEnum = { 
  sms: 'sms',
  email: 'email',
  push: 'push',
}
