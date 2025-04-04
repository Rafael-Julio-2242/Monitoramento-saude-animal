import { Result } from "../../shared/core/Result";

export interface IPasswordService { 
 generateHash(password: string): Promise<Result<string>> | Result<string>;
 passwordValidation(password: string, hash: string): Promise<Result<boolean>> | Result<boolean>;
}