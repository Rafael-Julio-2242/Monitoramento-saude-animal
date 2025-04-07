import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";

export class DeleteUserUseCase {
 constructor(private userRepository: IUserRepository) {}

 async execute(id: number): Promise<Result<void>> {
  return await this.userRepository.delete(id);
 }

}
