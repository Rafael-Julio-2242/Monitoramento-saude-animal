import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";


export class GetUserByIdUseCase {

 constructor(private userRepository: IUserRepository) {}

 async execute(id: number): Promise<Result<User>> {
  return await this.userRepository.findById(id);
 }

}

