import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";

export class GetAlertBySensorIdUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(sensorId: number): Promise<Result<Alert[]>> {
  return await this.alertRepository.findBySensorId(sensorId);
 }

}
