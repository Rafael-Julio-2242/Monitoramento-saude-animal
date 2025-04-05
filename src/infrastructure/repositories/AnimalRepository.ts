import { PrismaClient } from "@prisma/client";
import { Animal } from "../../domain/entities/Animal";
import { IAnimalRepository } from "../../domain/repositories/IAnimalRepository";
import { Result } from "../../shared/core/Result";
import { Species } from "../../domain/valueObjects/Species";
import logger from "../logger/Logger";


export class AnimalRepository implements IAnimalRepository {
  constructor(private prisma: PrismaClient) {}
  
  async create(animal: Animal): Promise<Result<Animal>> {
    const animalData = animal.toDTO();
    let createAnimal;

    try {
      createAnimal = await this.prisma.animal.create({
        data: {
          name: animalData.name,
          identification: animalData.identification,
          species: animalData.species,
          breed: animalData.breed,
          birthDate: animalData.birthDate,
          treatments: animalData.treatments,
          vaccinationHistory: animalData.vaccinationHistory,
          user: {
            connect: {
              id: animalData.userId
            }
          }
        }
      });
    } catch (e: any) {
      logger.error("Error on Creating Animal (repository)", { error: e.message });
      return Result.failure(e.message);
    }

    const createdAnimal = new Animal(
      createAnimal.id,
      createAnimal.userId,
      createAnimal.name,
      createAnimal.identification,
      new Species(createAnimal.species),
      createAnimal.birthDate,
      createAnimal.vaccinationHistory,
      createAnimal.treatments,
      createAnimal.breed ?? undefined
    )

    return Result.success(createdAnimal)
  }

  async update(animal: Animal): Promise<Result<Animal>> {
    const animalData = animal.toDTO();
    let updateAnimal;

    try {
      updateAnimal = await this.prisma.animal.update({
        data: {
          name: animalData.name,
          identification: animalData.identification,
          species: animalData.species,
          breed: animalData.breed,
          birthDate: animalData.birthDate,
          treatments: animalData.treatments,
          vaccinationHistory: animalData.vaccinationHistory
        },
        where: {
          id: animalData.id
        }
      });
    } catch (e: any) {
      logger.error("Error on Updating Animal (repository)", { error: e.message });
      return Result.failure(e.message);
    }

    const updatedAnimal = new Animal(
      updateAnimal.id,
      updateAnimal.userId,
      updateAnimal.name,
      updateAnimal.identification,
      new Species(updateAnimal.species),
      updateAnimal.birthDate,
      updateAnimal.vaccinationHistory,
      updateAnimal.treatments,
      updateAnimal.breed ?? undefined
    )

    return Result.success(updatedAnimal);
  }

  async delete(id: number): Promise<Result<void>> {

    try {
      await this.prisma.animal.delete({
        where: {
          id
        }
      })
    } catch (e: any) {
      logger.error("Error on Deleting Animal", { error: e.message });
      return Result.failure(e.message);
    }

    return Result.success();
  }

  async findById(id: number): Promise<Result<Animal>> {
    let findAnimal;

    try {
      findAnimal = await this.prisma.animal.findUnique({
        where: {
          id
        }
      });
    } catch (e: any) {
      logger.error("Error on Trying to find Animal by Id", { error: e.message });
      return Result.failure(e.message);
    }

    if (!findAnimal) {
      return Result.failure("Animal not found");
    }

    const animal = new Animal(
      findAnimal.id,
      findAnimal.userId,
      findAnimal.name,
      findAnimal.identification,
      new Species(findAnimal.species),
      findAnimal.birthDate,
      findAnimal.vaccinationHistory,
      findAnimal.treatments,
      findAnimal.breed ?? undefined
    )

    return Result.success(animal);
  }

  async findByUserId(userId: number): Promise<Result<Animal[]>> {
    let findAnimals;

    try {
      findAnimals = await this.prisma.animal.findMany({
        where: {
          user: {
            id: userId
          }
        }
      });
  
    } catch (e: any) {
      logger.error("Error on Trying to find Animals by UserId", { error: e.message });
      return Result.failure(e.message);
    } 

    if (findAnimals.length <= 0) {
      return Result.failure("This user has no animals");
    }

    const animals = findAnimals.map(animal => {
      return new Animal(
        animal.id,
        animal.userId,
        animal.name,
        animal.identification,
        new Species(animal.species),
        animal.birthDate,
        animal.vaccinationHistory,
        animal.treatments,
        animal.breed ?? undefined
      )
    });

    return Result.success(animals);
  }

}
