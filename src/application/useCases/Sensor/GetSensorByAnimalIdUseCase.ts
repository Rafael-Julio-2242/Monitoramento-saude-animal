import { Sensor } from "../../../domain/entities/Sensor";
import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Result } from "../../../shared/core/Result";

export class GetSensorByAnimalIdUseCase {
 constructor(private sensorRepository: ISensorRepository) {}

 async execute(animalId: number): Promise<Result<Sensor[]>> {
  return await this.sensorRepository.findByAnimalId(animalId);
 }

}

