/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.AuthenticationApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * The API for the AAL IOT project
 * Version: 1.0.0
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.AuthenticationApi');

goog.require('API.Client.LoginInfo');
goog.require('API.Client.LoginResponse');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.AuthenticationApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('AuthenticationApiBasePath') ?
                   /** @type {!string} */ ($injector.get('AuthenticationApiBasePath')) :
                   'https://virtserver.swaggerhub.com/XQDEV/smartcare/1.0.0';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('AuthenticationApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('AuthenticationApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.AuthenticationApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * Get Information about the currently authenticated user
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.AuthenticationApi.prototype.getSessionInfo = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/sessioninfo';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * Authenticate a user
 * @param {!LoginInfo} login 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.LoginResponse>}
 */
API.Client.AuthenticationApi.prototype.login = function(login, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/login';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'login' is set
  if (!login) {
    throw new Error('Missing required parameter login when calling login');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: login,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * Log out from current session
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.AuthenticationApi.prototype.logout = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/logout';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
