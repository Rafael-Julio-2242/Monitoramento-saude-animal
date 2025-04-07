import { Sensor } from "../../../domain/entities/Sensor";
import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Result } from "../../../shared/core/Result";

export class GetSensorByIdUseCase {
 constructor(private sensorRepository: ISensorRepository) {}

 async execute(sensorId: number): Promise<Result<Sensor>> {
  return await this.sensorRepository.findById(sensorId);
 }
}
