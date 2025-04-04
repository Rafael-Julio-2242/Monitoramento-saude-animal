import { IPasswordService } from "../../domain/services/IPasswordService";
import { Result } from "../../shared/core/Result";
import bcrypt from 'bcrypt';
import logger from "../../infrastructure/logger/Logger";


export class PasswordService implements IPasswordService {
 private saltRounds: number;
 
 constructor(saltRounds: number = 10) {
  this.saltRounds = saltRounds
 }

 async generateHash(password: string): Promise<Result<string>> {
   try {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

   return Result.success(hashedPassword);
   } catch (e: any) {
    logger.error('Error generating hash', { error: e.message });
    return Result.failure(e.message);
   }
 }

 async passwordValidation(password: string, hash: string): Promise<Result<boolean>> {
  try {
   const isValid = await bcrypt.compare(password, hash);

  return Result.success(isValid);
  } catch (e: any) {
    logger.error('Error validating password', { error: e.message });
   return Result.failure(e.message);
  }
 }
 
}
