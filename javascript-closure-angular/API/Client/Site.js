goog.provide('API.Client.Site');

/**
 * @record
 */
API.Client.Site = function() {}

/**
 * Unique identifier of the site
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Site.prototype.siteId;

/**
 * Timestamp of the creation of the site (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Site.prototype.creation;

/**
 * Timestamp of the last update of the site (Created by server)
 * @type {!Date}
 * @export
 */
API.Client.Site.prototype.update;

/**
 * A name for identification of the site
 * @type {!string}
 * @export
 */
API.Client.Site.prototype.siteName;

/**
 * True if the current user is the sites owner, false if not
 * @type {!boolean}
 * @export
 */
API.Client.Site.prototype.owner;

/**
 * @type {!API.Client.UUID}
 * @export
 */
API.Client.Site.prototype.customerId;

/**
 * @type {!API.Client.Address}
 * @export
 */
API.Client.Site.prototype.siteAddress;

