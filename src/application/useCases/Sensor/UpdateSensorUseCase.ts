import { Sensor } from "../../../domain/entities/Sensor";
import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Result } from "../../../shared/core/Result";
import { UpdateSensorDTO } from "../../dto/Sensor/UpdateSensorDTO";


export class UpdateSensorUseCase {
 constructor(private sensorRepository: ISensorRepository) {}

 async execute(updateSensorDTO: UpdateSensorDTO): Promise<Result<Sensor>> {

  const searchSensorToUpdate = await this.sensorRepository.findById(updateSensorDTO.id);

  if (searchSensorToUpdate.isFailure) {
   return Result.failure(searchSensorToUpdate.message);
  }

  const sensorToUpdate = searchSensorToUpdate.value;

  if (updateSensorDTO.animalId) {
   const updateSensorAnimalIdResult = sensorToUpdate.changeAnimalId(updateSensorDTO.animalId);

   if (updateSensorAnimalIdResult.isFailure) {
    return Result.failure("Error Updating Sensor Animal Id: " + updateSensorAnimalIdResult.message);
   }
  }

  if (updateSensorDTO.type) {
   const updateSensorTypeResult = sensorToUpdate.changeType(updateSensorDTO.type);

   if (updateSensorTypeResult.isFailure) {
    return Result.failure("Error Updating Sensor Type: " + updateSensorTypeResult.message);
   } 
  }

  if (updateSensorDTO.instalationDate) {
   const updateSensorInstalationDateResult = sensorToUpdate.changeInstalationDate(updateSensorDTO.instalationDate);

   if (updateSensorInstalationDateResult.isFailure) {
    return Result.failure("Error Updating Sensor Instalation Date: " + updateSensorInstalationDateResult.message);
   }
  }
  
  const updateSensorResult = await this.sensorRepository.update(sensorToUpdate);

  if (updateSensorResult.isFailure) {
   return Result.failure("Error Updating Sensor in Database: " + updateSensorResult.message);
  }

  return Result.success(updateSensorResult.value);
 }
}

