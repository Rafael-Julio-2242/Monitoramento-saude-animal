import { Animal } from "../../../domain/entities/Animal";
import { IAnimalRepository } from "../../../domain/repositories/IAnimalRepository";
import { Result } from "../../../shared/core/Result";

export class GetAnimalByIdUseCase {

  constructor(private animalRepository: IAnimalRepository) {}

  async execute(id: number): Promise<Result<Animal>> {
    return await this.animalRepository.findById(id);
  }

}

