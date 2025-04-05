import { Animal } from "../../../domain/entities/Animal";
import { IAnimalRepository } from "../../../domain/repositories/IAnimalRepository";
import { Result } from "../../../shared/core/Result";
import { CreateAnimalDTO } from "../../dto/Animal/CreateAnimalDTO";

export class CreateAnimalUseCase {

  constructor(private animalRepository: IAnimalRepository) {}

  async execute(animal: CreateAnimalDTO): Promise<Result<Animal>> {

    const newAnimal = new Animal(
      0,
      animal.userId,
      animal.name,
      animal.identification,
      animal.species,
      animal.birthDate,
      animal.vaccinationHistory,
      animal.treatments,
      animal.breed
    );

    return await this.animalRepository.create(newAnimal);
  } 

}
