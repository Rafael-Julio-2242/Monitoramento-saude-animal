
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";
import { CreateUserDTO } from "../../dto/User/CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: CreateUserDTO): Promise<Result<User>> { // TODO Implementar
    throw new Error("Method not implemented.");
  }

}
