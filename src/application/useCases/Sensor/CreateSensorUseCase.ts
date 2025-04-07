import { Sensor } from "../../../domain/entities/Sensor";
import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Result } from "../../../shared/core/Result";
import { CreateSensorDTO } from "../../dto/Sensor/CreateSensorDTO";

export class CreateSensorUseCase {
 constructor(private sensorRepository: ISensorRepository) {}

 async execute(createSensorDTO: CreateSensorDTO): Promise<Result<Sensor>> {
  
  const sensor = new Sensor(
   0,
   createSensorDTO.animalId,
   createSensorDTO.type,
   createSensorDTO.instalationDate,
   new Date(),
  );

  return await this.sensorRepository.create(sensor);
 }
}


