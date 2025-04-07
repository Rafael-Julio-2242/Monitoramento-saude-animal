
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";
import { CreateUserDTO } from "../../dto/User/CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(createUserDTO: CreateUserDTO): Promise<Result<User>> {
    const newUser = new User(
      0,
      createUserDTO.name,
      createUserDTO.email,
      createUserDTO.password,
      new Date()
    );

    return await this.userRepository.create(newUser);
  }

}
