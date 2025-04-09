import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";
import { CreateAlertDTO } from "../../dto/Alert/CreateAlertDTO";

export class CreateAlertUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(createAlertDTO: CreateAlertDTO): Promise<Result<Alert>> {

  const alert = new Alert(
    0,
    createAlertDTO.animalId,
    createAlertDTO.alertMessage,
    createAlertDTO.alertType,
    createAlertDTO.status,
    new Date(),
    createAlertDTO.sensorId,
    createAlertDTO.sensorDataId,
    createAlertDTO.updatedAt
  );

  return await this.alertRepository.create(alert);
 }

}


