import { AlertDTO } from "../../application/dto/Alert/AlertDTO";
import { Result } from "../../shared/core/Result";



export class Alert {

 constructor(
  private id: number,
  private animalId: number,
  private alertMessage: string,
  private alertType: string,
  private status: string,
  private createdAt: Date,
  private sensorId?: number | null,
  private sensorDataId?: number | null,
  private updatedAt?: Date | null
 ) {}

 changeAnimalId(newAnimalId: number): Result<void> {
  if (newAnimalId <= 0) {
   return Result.failure('Animal ID cannot be negative nor zero!');
  }

  this.animalId = newAnimalId;
  return Result.success();
 }

 changeAlertMessage(newAlertMessage: string): Result<void> {
  if (newAlertMessage.length <= 0) {
   return Result.failure('Alert message cannot be empty');
  }
  
  this.alertMessage = newAlertMessage;
  return Result.success();
 }

 changeAlertType(newAlertType: string): Result<void> {
  if (newAlertType.length <= 0) {
   return Result.failure('Alert type cannot be empty');
  }
  
  this.alertType = newAlertType;
  return Result.success();
 }

 changeStatus(newStatus: string): Result<void> {
  if (newStatus.length <= 0) {
   return Result.failure('Status cannot be empty');
  }
  
  this.status = newStatus;
  return Result.success();
 }

 changeSensorId(newSensorId: number): Result<void> {
  if (newSensorId <= 0) {
   return Result.failure('Sensor ID cannot be negative nor zero!');
  }

  this.sensorId = newSensorId;
  return Result.success();
 }

 changeSensorDataId(newSensorDataId: number): Result<void> {
  if (newSensorDataId <= 0) {
   return Result.failure('Sensor Data ID cannot be negative nor zero!');
  }

  this.sensorDataId = newSensorDataId;
  return Result.success();
 }

 toDTO(): AlertDTO {
  return {
   id: this.id,
   animalId: this.animalId,
   alertMessage: this.alertMessage,
   alertType: this.alertType,
   status: this.status,
   createdAt: this.createdAt,
   sensorId: this.sensorId,
   sensorDataId: this.sensorDataId,
   updatedAt: this.updatedAt
  }
 }

}