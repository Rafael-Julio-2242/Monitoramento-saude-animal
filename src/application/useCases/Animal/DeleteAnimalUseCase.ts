import { IAnimalRepository } from "../../../domain/repositories/IAnimalRepository";
import { Result } from "../../../shared/core/Result";

export class DeleteAnimalUseCase {
  constructor(private animalRepository: IAnimalRepository) {}

  async execute(id: number): Promise<Result<void>> {
    return await this.animalRepository.delete(id);
  }

}
