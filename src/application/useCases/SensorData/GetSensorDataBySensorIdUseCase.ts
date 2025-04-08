import { SensorData } from "../../../domain/entities/SensorData";
import { ISensorDataRepository } from "../../../domain/repositories/ISensorDataRepository";
import { Result } from "../../../shared/core/Result";

export class GetSensorDataBySensorIdUseCase {
 constructor(private sensorDataRepository: ISensorDataRepository) {}

 async execute(sensorId: number): Promise<Result<SensorData[]>> {
  return await this.sensorDataRepository.findBySensorId(sensorId);
 }

}
