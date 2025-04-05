import { UserResponseDTO } from "../../application/dto/User/UserResponseDTO";
import { Result } from "../../shared/core/Result";
import z from 'zod';
import { IPasswordService } from "../services/IPasswordService";

export class User {

  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: Date,
    private updatedAt: Date,
    private passwordService: IPasswordService
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

  async changePassword(newPassword: string): Promise<Result<void>> {
    if (newPassword.length <= 0) {
      return Result.failure('Password cannot be empty');
    }

    const hashResult = await this.passwordService.generateHash(newPassword);
    if (hashResult.isFailure) {
      return Result.failure(hashResult.message);
    }

    this.password = hashResult.value;
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
