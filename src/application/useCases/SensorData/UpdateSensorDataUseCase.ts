import { SensorData } from "../../../domain/entities/SensorData";
import { ISensorDataRepository } from "../../../domain/repositories/ISensorDataRepository";
import { Result } from "../../../shared/core/Result";
import { UpdateSensorDataDTO } from "../../dto/SensorData/UpdateSensorDataDTO";

export class UpdateSensorDataUseCase {
 constructor(private sensorDataRepository: ISensorDataRepository) {}

 async execute(updateSensorDataDTO: UpdateSensorDataDTO): Promise<Result<SensorData>> {

  const searchSensorData = await this.sensorDataRepository.findById(updateSensorDataDTO.id);

  if (searchSensorData.isFailure) {
   return Result.failure("Sensor Data not found!");
  }

  const sensorDataToUpdate = searchSensorData.value;

  if (updateSensorDataDTO.latitude) {
   const updateLatitudeResult = sensorDataToUpdate.changePlace({ latitude: updateSensorDataDTO.latitude });
   
   if (updateLatitudeResult.isFailure) {
    return Result.failure("Error on updating latitude: " + updateLatitudeResult.message);
   }
  }

  if (updateSensorDataDTO.longitude) {
   const updateLongitudeResult = sensorDataToUpdate.changePlace({ longitude: updateSensorDataDTO.longitude });

   if (updateLongitudeResult.isFailure) {
    return Result.failure("Error on updating longitude: " + updateLongitudeResult.message);
   }
  }

  if (updateSensorDataDTO.measurementType) {
   const updateMeasurementTypeResult = sensorDataToUpdate.changeMeasurementType(updateSensorDataDTO.measurementType);

   if (updateMeasurementTypeResult.isFailure) {
    return Result.failure("Error on updating measurement type: " + updateMeasurementTypeResult.message);
   }
  }

  if (updateSensorDataDTO.value) {
   const updateValueResult = sensorDataToUpdate.changeValue(updateSensorDataDTO.value);

   if (updateValueResult.isFailure) {
    return Result.failure("Error on updating value: " + updateValueResult.message);
   }
  }

  if (updateSensorDataDTO.unit) {
   const updateUnitResult = sensorDataToUpdate.changeUnit(updateSensorDataDTO.unit);

   if (updateUnitResult.isFailure) {
    return Result.failure("Error on updating unit: " + updateUnitResult.message);
   }
  }

  if (updateSensorDataDTO.quality) {
   const updateQualityResult = sensorDataToUpdate.changeQuality(updateSensorDataDTO.quality);

   if (updateQualityResult.isFailure) {
    return Result.failure("Error on updating quality: " + updateQualityResult.message);
   }
  }

  if (updateSensorDataDTO.rawData) {
   const updateRawDataResult = sensorDataToUpdate.changeRawData(updateSensorDataDTO.rawData);

   if (updateRawDataResult.isFailure) {
    return Result.failure("Error on updating raw data: " + updateRawDataResult.message);
   }
  }

  if (updateSensorDataDTO.recordedAt) {
   const updateRecordedAtResult = sensorDataToUpdate.changeRecordedAt(updateSensorDataDTO.recordedAt);

   if (updateRecordedAtResult.isFailure) {
    return Result.failure("Error on updating recorded at: " + updateRecordedAtResult.message);
   }
  }

  const updatedSensorData = await this.sensorDataRepository.update(sensorDataToUpdate);

  if (updatedSensorData.isFailure) {
   return Result.failure("Error on updating sensor data on Database: " + updatedSensorData.message);
  }

  return Result.success();
 }

}
