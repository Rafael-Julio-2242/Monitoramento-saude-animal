import { SensorData } from "../../../domain/entities/SensorData";
import { ISensorDataRepository } from "../../../domain/repositories/ISensorDataRepository";
import { Result } from "../../../shared/core/Result";
import { CreateSensorDataDTO } from "../../dto/SensorData/CreateSensorDataDTO";

export class CreateSensorDataUseCase {
 constructor(private sensorDataRepository: ISensorDataRepository) {}

 async execute(createSensorDataDTO: CreateSensorDataDTO): Promise<Result<SensorData>> {
  const sensorData = new SensorData(
   createSensorDataDTO.id,
   createSensorDataDTO.sensorId,
   createSensorDataDTO.recordedAt,
   createSensorDataDTO.value,
   createSensorDataDTO.measurementType,
   createSensorDataDTO.unit,
   createSensorDataDTO.latitude,
   createSensorDataDTO.longitude,
   createSensorDataDTO.quality,
   createSensorDataDTO.rawData
  );

  return await this.sensorDataRepository.create(sensorData);
 }
}
