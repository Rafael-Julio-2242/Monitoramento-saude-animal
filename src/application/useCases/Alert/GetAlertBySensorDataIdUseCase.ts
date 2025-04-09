import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";

export class GetAlertBySensorDataIdUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(sensorDataId: number): Promise<Result<Alert[]>> {
  return await this.alertRepository.findBySensorDataId(sensorDataId);
 }

}


