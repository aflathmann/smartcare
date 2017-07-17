/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime

case class DeviceData_inner (
  /* The key to the meta data entry */
  key: Option[String],
  /* The type of the meta data entry (Is it a number, a string, an url, an array eg) */
  `type`: Option[DeviceData_innerEnums.&#x60;Type&#x60;]
) extends ApiModel

object DeviceData_innerEnums {

  type &#x60;Type&#x60; = &#x60;Type&#x60;.Value
  object &#x60;Type&#x60; extends Enumeration {
    val Boolean = Value("boolean")
    val Url = Value("url")
    val String = Value("string")
    val Number = Value("number")
    val `Object` = Value("object")
    val Array = Value("array")
    val Video = Value("video")
    val Image = Value("image")
    val `Image-url` = Value("image-url")
    val `Video-url` = Value("video-url")
    val `Date-time` = Value("date-time")
  }

}

