import { IAlertRepository } from "../../../domain/repositories/IAlertRepository";
import { Result } from "../../../shared/core/Result";


export class DeleteAlertUseCase {
 constructor(private alertRepository: IAlertRepository) {}

 async execute(id: number): Promise<Result<void>> {
  return await this.alertRepository.delete(id);
 }

}
