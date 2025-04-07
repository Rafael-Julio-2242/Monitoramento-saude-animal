import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";


export class GetUserByEmailUseCase {

 constructor(private userRepository: IUserRepository) {}

 async execute(email: string): Promise<Result<User>> {
  return await this.userRepository.findByEmail(email);
 }

}

