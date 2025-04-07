import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Result } from "../../../shared/core/Result";
import { UpdateUserDTO } from "../../dto/User/UpdateUserDTO";

export class UpdateUserUseCase {

 constructor(private userRepository: IUserRepository) {}

 async execute(user: UpdateUserDTO): Promise<Result<User>> {

  const searchUserToUpdate = await this.userRepository.findById(user.id);

  if (searchUserToUpdate.isFailure) {
   return Result.failure("User not found!");
  }
 
  const userToUpdate = searchUserToUpdate.value;

  if (user.name) {
   const updateNameResult = userToUpdate.changeName(user.name);

   if (updateNameResult.isFailure) {
    return Result.failure("Failed on Updating name: " + updateNameResult.message);
   }
  }

  if (user.email) {
   const updateEmailResult = userToUpdate.changeEmail(user.email);

   if (updateEmailResult.isFailure) {
    return Result.failure("Failed on Updating Email: " + updateEmailResult.message);
   }
  }

  if (user.password) {
   const updatePasswordResult = await userToUpdate.changePassword(user.password);

   if (updatePasswordResult.isFailure) {
    return Result.failure("Failed on Updating Passwor: " + updatePasswordResult.message);
   }
  }

  const updateUser = await this.userRepository.update(userToUpdate);

  if (updateUser.isFailure) {
   return Result.failure("Failed on Updating the User on Database! " + updateUser.message);
  }

  return Result.success(userToUpdate);
 }

}
