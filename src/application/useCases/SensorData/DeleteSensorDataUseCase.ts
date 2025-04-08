import { ISensorDataRepository } from "../../../domain/repositories/ISensorDataRepository";
import { Result } from "../../../shared/core/Result";


export class DeleteSensorDataUseCase {
 constructor(private sensorDataRepository: ISensorDataRepository) {}

 async execute(id: number): Promise<Result<void>> {
  return await this.sensorDataRepository.delete(id);
 }
}
