/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime

case class Event (
  /* Unique identifier of the event */
  eventId: Option[UUID],
  /* Timestamp of the creation of the event (Created by server) */
  creation: Option[DateTime],
  /* Timestamp of the last update of the event (Created by server) */
  update: Option[DateTime],
  /* ID of the site that this device is related to */
  siteId: Option[UUID],
  /* The topic of the notification */
  eventTopic: Option[String],
  /* ID of the device that triggered the alert */
  deviceId: Option[UUID],
  metaData: Option[MetaData]
) extends ApiModel


