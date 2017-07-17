/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime

case class Site (
  /* Unique identifier of the site */
  siteId: Option[UUID],
  /* Timestamp of the creation of the site (Created by server) */
  creation: Option[DateTime],
  /* Timestamp of the last update of the site (Created by server) */
  update: Option[DateTime],
  /* A name for identification of the site */
  siteName: Option[String],
  /* True if the current user is the sites owner, false if not */
  owner: Option[Boolean],
  customerId: Option[UUID],
  siteAddress: Option[Address]
) extends ApiModel


