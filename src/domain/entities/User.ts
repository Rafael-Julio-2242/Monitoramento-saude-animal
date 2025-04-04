import { UserResponseDTO } from "../../application/dto/UserResponseDTO";
import { Result } from "../../shared/core/Result";
import z from 'zod';

export class User {


  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: Date,
    private updatedAt: Date
  ) {}

  changeName(newName: string): Result<void> {
    if (newName.length <= 0) {
      return Result.failure('Name cannot be empty');
    }
    this.name = newName;
    return Result.success();
  }

  changeEmail(newEmail: string): Result<void> {

    if (z.string().email().safeParse(newEmail).success === false) {
      return Result.failure('Invalid email');
    }

    this.email = newEmail;
    return Result.success();
  }

  changePassword(newPassword: string): Result<void> { // TODO Adicionar mais validações de senha
    if (newPassword.length <= 0) {
      return Result.failure('Password cannot be empty');
    }

    this.password = newPassword;
    return Result.success();
  }

  toDTO(): UserResponseDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

}
