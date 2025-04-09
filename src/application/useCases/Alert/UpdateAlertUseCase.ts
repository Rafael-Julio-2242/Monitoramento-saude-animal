import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";
import { UpdateAlertDTO } from "../../dto/Alert/UpdateAlertDTO";


export class UpdateAlertUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(updateAlertDTO: UpdateAlertDTO): Promise<Result<Alert>> {

  const searchAlertToUpdate = await this.alertRepository.findById(updateAlertDTO.id);

  if (searchAlertToUpdate.isFailure) {
   return Result.failure(searchAlertToUpdate.message);
  }

  const alertToUpdate = searchAlertToUpdate.value;

  if (updateAlertDTO.animalId) {
   const updateAnimalIdResult = alertToUpdate.changeAnimalId(updateAlertDTO.animalId);

   if (updateAnimalIdResult.isFailure) {
    return Result.failure("Error Updating Alert Animal Id: " + updateAnimalIdResult.message);
   }
  }

  if (updateAlertDTO.alertMessage) {
   const updateAlertMessageResult = alertToUpdate.changeAlertMessage(updateAlertDTO.alertMessage);

   if (updateAlertMessageResult.isFailure) {
    return Result.failure("Error Updating Alert Message: " + updateAlertMessageResult.message);
   }
  }

  if (updateAlertDTO.alertType) {
   const updateAlertTypeResult = alertToUpdate.changeAlertType(updateAlertDTO.alertType);

   if (updateAlertTypeResult.isFailure) {
    return Result.failure("Error Updating Alert Type: " + updateAlertTypeResult.message);
   }
  }

  if (updateAlertDTO.status) {
   const updateAlertStatusResult = alertToUpdate.changeStatus(updateAlertDTO.status);

   if (updateAlertStatusResult.isFailure) {
    return Result.failure("Error Updating Alert Status: " + updateAlertStatusResult.message);
   }
  }

  if (updateAlertDTO.sensorId) {
   const updateSensorIdResult = alertToUpdate.changeSensorId(updateAlertDTO.sensorId);

   if (updateSensorIdResult.isFailure) {
    return Result.failure("Error Updating Alert Sensor Id: " + updateSensorIdResult.message);
   }
  }

  if (updateAlertDTO.sensorDataId) {
   const updateSensorDataIdResult = alertToUpdate.changeSensorDataId(updateAlertDTO.sensorDataId);

   if (updateSensorDataIdResult.isFailure) {
    return Result.failure("Error Updating Alert Sensor Data Id: " + updateSensorDataIdResult.message);
   }
  }

  const updateAlertResult = await this.alertRepository.update(alertToUpdate);

  if (updateAlertResult.isFailure) {
   return Result.failure("Error Updating Alert: " + updateAlertResult.message);
  }

  return Result.success(alertToUpdate);
 }


}
