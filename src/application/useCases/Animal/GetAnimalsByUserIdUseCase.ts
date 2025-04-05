import { Animal } from "../../../domain/entities/Animal";
import { IAnimalRepository } from "../../../domain/repositories/IAnimalRepository";
import { Result } from "../../../shared/core/Result";


export class GetAnimalsByUserIdUseCase {

  constructor(private animalRepository: IAnimalRepository) {}

  async execute(userId: number): Promise<Result<Animal[]>> {
    return await this.animalRepository.findByUserId(userId);
  }


}