/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */
package io.swagger.client.api

import io.swagger.client.model.LoginInfo
import io.swagger.client.model.LoginResponse
import io.swagger.client.core._
import io.swagger.client.core.CollectionFormats._
import io.swagger.client.core.ApiKeyLocations._

object AuthenticationApi {

  /**
   * Get Information about the currently authenticated user
   * 
   * Expected answers:
   *   code 200 :  (response)
   */
  def getSessionInfo(): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.GET, "https://virtserver.swaggerhub.com/XQDEV/smartcare/1.0.0", "/sessioninfo", "application/json")
      .withSuccessResponse[Unit](200)
        /**
   * Authenticate a user
   * 
   * Expected answers:
   *   code 200 : LoginResponse (Login successful)
   *   code 400 :  (Wrong credentials)
   * 
   * @param login 
   */
  def login(login: LoginInfo): ApiRequest[LoginResponse] =
    ApiRequest[LoginResponse](ApiMethods.POST, "https://virtserver.swaggerhub.com/XQDEV/smartcare/1.0.0", "/login", "application/json")
      .withBody(login)
      .withSuccessResponse[LoginResponse](200)
      .withErrorResponse[Unit](400)
        /**
   * Log out from current session
   * 
   * Expected answers:
   *   code 200 :  (Logout successful)
   *   code 400 :  (Not logged in)
   */
  def logout(): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.GET, "https://virtserver.swaggerhub.com/XQDEV/smartcare/1.0.0", "/logout", "application/json")
      .withSuccessResponse[Unit](200)
      .withErrorResponse[Unit](400)
      

}

