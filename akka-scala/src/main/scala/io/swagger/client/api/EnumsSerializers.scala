/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */
package io.swagger.client.api

import io.swagger.client.model._
import org.json4s._
import scala.reflect.ClassTag

object EnumsSerializers {

  def all = Seq[Serializer[_]]() :+
    new EnumNameSerializer(AddressEnums.&#x60;Type&#x60;) :+
    new EnumNameSerializer(DeviceData_innerEnums.&#x60;Type&#x60;) :+
    new EnumNameSerializer(LoginResponseEnums.UserStatus) :+
    new EnumNameSerializer(MetaData_innerEnums.&#x60;Type&#x60;) :+
    new EnumNameSerializer(NotificationSubscriberEnums.RecipientType) :+
    new EnumNameSerializer(PermissionEnums.PermissionMethod)



  private class EnumNameSerializer[E <: Enumeration: ClassTag](enum: E)
    extends Serializer[E#Value] {
    import JsonDSL._

    val EnumerationClass = classOf[E#Value]

    def deserialize(implicit format: Formats):
    PartialFunction[(TypeInfo, JValue), E#Value] = {
      case (t @ TypeInfo(EnumerationClass, _), json) if isValid(json) => {
        json match {
          case JString(value) =>
            enum.withName(value)
          case value =>
            throw new MappingException(s"Can't convert $value to $EnumerationClass")
        }
      }
    }

    private[this] def isValid(json: JValue) = json match {
      case JString(value) if enum.values.exists(_.toString == value) => true
      case _ => false
    }

    def serialize(implicit format: Formats): PartialFunction[Any, JValue] = {
      case i: E#Value => i.toString
    }
  }

}
