goog.provide('API.Client.Room');

/**
 * @record
 */
API.Client.Room = function() {}

/**
 * Unique identifier of the room
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Room.prototype.roomId;

/**
 * Timestamp of the creation of the room (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Room.prototype.creation;

/**
 * Timestamp of the last update of the room (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Room.prototype.update;

/**
 * A name for identification of the room
 * @type {!string}
 * @export
 */
API.Client.Room.prototype.roomName;

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Room.prototype.siteId;

