import { Result } from "../../shared/core/Result";
import { User } from "../entities/User";


export interface IUserRepository {
  create(user: User): Promise<Result<User>>;
  update(user: User): Promise<Result<User>>;
  delete(id: number): Promise<Result<void>>;
  findById(id: number): Promise<Result<User>>;
  findByEmail(email: string): Promise<Result<User>>;
}
