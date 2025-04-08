import { SensorData } from "../../../domain/entities/SensorData";
import { ISensorDataRepository } from "../../../domain/repositories/ISensorDataRepository";
import { Result } from "../../../shared/core/Result";



export class GetSensorDataByIdUseCase {
 constructor(private sensorDataRepository: ISensorDataRepository) {}

 async execute(id: number): Promise<Result<SensorData>> {
  return await this.sensorDataRepository.findById(id);
 }

}
