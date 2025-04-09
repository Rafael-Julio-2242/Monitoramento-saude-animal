import { Alert } from "../../../domain/entities/Alert";
import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";

export class GetAlertByIdUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(id: number): Promise<Result<Alert>> {
  return await this.alertRepository.findById(id);
 }
}
