import { CreateAnimalDTO } from "../../application/dto/Animal/CreateAnimalDTO";
import { UpdateAnimalDTO } from "../../application/dto/Animal/UpdateAnimalDTO";
import { Result } from "../../shared/core/Result";
import { Animal } from "../entities/Animal";

export interface IAnimalRepository {

  create(animal: Animal): Promise<Result<Animal>>;
  update(animal: Animal): Promise<Result<Animal>>;
  delete(id: number): Promise<Result<void>>;
  findById(id: number): Promise<Result<Animal>>;
  findByUserId(userId: number): Promise<Result<Animal[]>>;
  
}
