export class Result<T> {
 public isSuccess: boolean;
 public isFailure: boolean;
 public message: string;
 private _value?: T;

 constructor(isSuccess: boolean, message: string, value?: T) {
  this.isSuccess = isSuccess;
  this.isFailure = !isSuccess;
  this.message = message;
  this._value = value;
 }

 public get value(): T {
  if (!this.isSuccess) {
   throw new Error('Cannot get the value of a failed result');
  }

  return this._value!;
 }
 
 static success<T>(value?: T): Result<T> {
  return new Result<T>(true, "Success", value);
 }

 static failure<T>(message: string): Result<T> {
  return new Result<T>(false, message);
 }

}