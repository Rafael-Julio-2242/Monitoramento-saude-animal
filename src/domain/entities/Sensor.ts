import { SensorDTO } from "../../application/dto/Sensor/SensorDTO";
import { Result } from "../../shared/core/Result";


export class Sensor {

 constructor(
  private id: number,
  private animalId: number,
  private type: string,
  private instalationDate: Date,
  private createdAt: Date,
  private updatedAt?: Date
 ){}

 changeAnimalId(newAnimalId: number): Result<void> {
  if (newAnimalId <= 0) {
   return Result.failure('Animal ID cannot be negative nor zero!');
  }

  this.animalId = newAnimalId;
  return Result.success();
 }

 changeType(newType: string): Result<void> {
  if (newType.length === 0) {
   return Result.failure("Type cannot be empty!");
  }

  this.type = newType;
  return Result.success();
 }

 changeInstalationDate(newInstalationDate: Date): Result<void> {
  if (newInstalationDate < new Date()) {
   return Result.failure("Instalation Date cannot be in the future");
  }

  this.instalationDate = newInstalationDate;
  return Result.success();
 }

 toDTO(): SensorDTO {
  return {
   id: this.id,
   animalId: this.animalId,
   createdAt: this.createdAt,
   instalationDate: this.instalationDate,
   type: this.type,
   updatedAt: this.updatedAt
  }
 }

}
