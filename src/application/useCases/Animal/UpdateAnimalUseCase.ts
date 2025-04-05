import { Animal } from "../../../domain/entities/Animal";
import { IAnimalRepository } from "../../../domain/repositories/IAnimalRepository";
import { Result } from "../../../shared/core/Result";
import { UpdateAnimalDTO } from "../../dto/Animal/UpdateAnimalDTO";

export class UpdateAnimalUseCase {
  constructor(private animalRepository: IAnimalRepository) {}

  async execute(animal: UpdateAnimalDTO): Promise<Result<Animal>> {

    const searchAnimalToUpdate = await this.animalRepository.findById(animal.id);

    if (searchAnimalToUpdate.isFailure) {
      return Result.failure("Animal Not Found!");
    }

    const animalToUpdate = searchAnimalToUpdate.value;

    if (animal.name) {
      const updateNameResult = animalToUpdate.changeName(animal.name);

      if (updateNameResult.isFailure) {
        return Result.failure("Failed on Updating name");
      }
    }

    if (animal.identification) {
      const updateIdentificationResult = animalToUpdate.changeIdentification(animal.identification);

      if (updateIdentificationResult.isFailure) {
        return Result.failure("Failed on Updating identification");
      }
    }

    if (animal.species) {
      const updateSpeciesResult = animalToUpdate.changeSpecies(animal.species);

      if (updateSpeciesResult.isFailure) {
        return Result.failure("Failed on Updating Species");
      }
    }    

    if (animal.breed) {
      const updateBreedResult = animalToUpdate.changeBreed(animal.breed);

      if (updateBreedResult) {
        return Result.failure("Failed on Updating Breed");
      }
    }

    if (animal.treatments) {
      const updateTreatmentsResult = animalToUpdate.changeTreatments(animal.treatments);

      if (updateTreatmentsResult.isFailure) {
        return Result.failure("Failed on Updating Treatments");
      }
    }

    if (animal.vaccinationHistory) {
      const updateVaccinationHistory = animalToUpdate.changeVaccinationHistory(animal.vaccinationHistory);

      if (updateVaccinationHistory.isFailure) {
        return Result.failure("Failed on Updating Vaccination History");
      }
    }

    if (animal.birthDate) {
      const updateBirthDate = animalToUpdate.changeBirthDate(animal.birthDate);

      if (updateBirthDate.isFailure) {
        return Result.failure("Failed on Updating BirthDate");
      }
    }

    const updateAnimal = await this.animalRepository.update(animalToUpdate);

    if (updateAnimal.isFailure) {
      return Result.failure("Failed on Updating the Animal on Database!");
    }

    return Result.success(animalToUpdate);
  }

}

