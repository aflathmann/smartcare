goog.provide('API.Client.DeviceData_inner');

/**
 * Statistical or usage data of a device
 * @record
 */
API.Client.DeviceDataInner = function() {}

/**
 * The key to the meta data entry
 * @type {!string}
 * @export
 */
API.Client.DeviceDataInner.prototype.key;

/**
 * The type of the meta data entry (Is it a number, a string, an url, an array eg)
 * @type {!string}
 * @export
 */
API.Client.DeviceDataInner.prototype.type;

/** @enum {string} */
API.Client.DeviceDataInner.TypeEnum = { 
  boolean: 'boolean',
  url: 'url',
  string: 'string',
  number: 'number',
  object: 'object',
  array: 'array',
  video: 'video',
  image: 'image',
  image-url: 'image-url',
  video-url: 'video-url',
  date-time: 'date-time',
}
