import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Result } from "../../../shared/core/Result";

export class DeleteSensorUseCase {
 constructor(private sensorRepository: ISensorRepository) {}

 async execute(sensorId: number): Promise<Result<void>> {
  return await this.sensorRepository.delete(sensorId);
 }
}
