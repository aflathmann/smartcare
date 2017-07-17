goog.provide('API.Client.MetaData_inner');

/**
 * Descriptional data added to the object. The content should be relative to the object type
 * @record
 */
API.Client.MetaDataInner = function() {}

/**
 * The key to the meta data entry
 * @type {!string}
 * @export
 */
API.Client.MetaDataInner.prototype.metadataKey;

/**
 * The type of the meta data entry (Is it a number, a string, an url, an array eg)
 * @type {!string}
 * @export
 */
API.Client.MetaDataInner.prototype.type;

/** @enum {string} */
API.Client.MetaDataInner.TypeEnum = { 
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
