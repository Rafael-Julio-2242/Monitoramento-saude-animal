import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { Result } from "../../shared/core/Result";
import logger from "../logger/Logger";

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(user: User): Promise<Result<User>> {
    const userData = user.toDTO();
    let createUser;


    // Não posso criar um usuário com email repetido

    try {
      const resultFindUser = await this.findByEmail(userData.email);
      if (resultFindUser.isSuccess) {
        return Result.failure("User already exists");
      }
    } catch (e: any) {
      logger.error("Error on Creating User (repository)", { error: e.message });
      return Result.failure("Error on Creating User (repository): " + e.message);
    }

    try {
      createUser = await this.prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }
      })
    } catch (e: any) {
      logger.error("Error on Creating User (repository)", { error: e.message });
      return Result.failure("Error on Creating User (repository): " + e.message);
    }

    const createdUser = new User(
      createUser.id,
      createUser.name,
      createUser.email,
      createUser.password,
      createUser.createdAt,
      createUser.updatedAt
    );

    return Result.success(createdUser);
  }

  async update(user: User): Promise<Result<User>> {
    const userData = user.toDTO();
    let updateUser;

    try {
      updateUser = await this.prisma.user.update({
        data: {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          updatedAt: new Date()
        },
        where: {
          id: userData.id
        }
      });
    } catch (e: any) {
      logger.error("Error on Updating User (repository)", { error: e.message });
      return Result.failure("Error on Updating User (repository): " + e.message);
    }

    const updatedUser = new User(
      updateUser.id,
      updateUser.name,
      updateUser.email,
      updateUser.password,
      updateUser.createdAt,
      updateUser.updatedAt
    );

    return Result.success(updatedUser);
  }

  async delete(id: number): Promise<Result<void>> {
    try {
      await this.prisma.user.delete({
        where: {
          id
        }
      });
    } catch (e: any) {
      logger.error("Error on Deleting User", { error: e.message });
      return Result.failure("Error on Deleting user (repository): " + e.message);
    }

    return Result.success();
  }

  async findById(id: number): Promise<Result<User>> {
    let findUser;

    try {
      findUser = await this.prisma.user.findUnique({
        where: {
          id
        }
      });
    } catch (e: any) {
      logger.error("Error on Trying to find User by Id", { error: e.message });
      return Result.failure(e.message);
    }

    if (!findUser) {
      return Result.failure("User not found");
    }

    const user = new User(
      findUser.id,
      findUser.name,
      findUser.email,
      findUser.password,
      findUser.createdAt,
      findUser.updatedAt
    );

    return Result.success(user);
  }

  async findByEmail(email: string): Promise<Result<User>> {
    let findUser;

    try {
      findUser = await this.prisma.user.findUnique({
        where: {
          email
        }
      });
    } catch (e: any) {
      logger.error("Error on Trying to find User by Email", { error: e.message });
      return Result.failure(e.message);
    }

    if (!findUser) {
      return Result.failure("User not found");
    }

    const user = new User(
      findUser.id,
      findUser.name,
      findUser.email,
      findUser.password,
      findUser.createdAt,
      findUser.updatedAt
    );

    return Result.success(user);
  }

}
