import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";



export class GetAlertByAnimalIdUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(animalId: number): Promise<Result<Alert[]>> {
  return await this.alertRepository.findByAnimalId(animalId);
 }

}

