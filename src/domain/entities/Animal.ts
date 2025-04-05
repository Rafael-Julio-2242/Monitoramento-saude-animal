import { AnimalResponseDTO } from "../../application/dto/Animal/AnimalResponseDTO"
import { Result } from "../../shared/core/Result"
import { Species } from "../valueObjects/Species"

class Animal {
 private id: number
 private userId: number
 private name: string
 private identification: string
 private species: Species
 private breed?: string
 private birthDate: Date
 private vaccinationHistory: string
 private treatments: string

 constructor(
  id: number,
  userId: number,
  name: string,
  identification: string,
  species: Species,
  birthDate: Date,
  vaccinationHistory: string,
  treatments: string,
  breed?: string,
 ) {
  this.id = id
  this.userId = userId
  this.name = name
  this.identification = identification
  this.species = species
  this.breed = breed
  this.birthDate = birthDate
  this.vaccinationHistory = vaccinationHistory
  this.treatments = treatments
 }

 changeName(newName: string): Result<void> {
  if (newName.length <= 0) {
    return Result.failure('Name cannot be empty!');
  }

  this.name = newName;
  return Result.success();
 }

 changeUserId(newUserId: number): Result<void> { 

  if (newUserId <= 0) {
   return Result.failure('User ID must be greater than 0');
  }

  if (newUserId === this.userId) {
   return Result.failure("User ID cannot be the same");
  }

  this.userId = newUserId;
  return Result.success();
 }

 changeIdentification(newIdentification: string): Result<void> {
  if (newIdentification.length <= 0) {
   return Result.failure('Identification cannot be empty');
  }

  this.identification = newIdentification;
  return Result.success();
 }

 changeSpecies(newSpecies: Species): Result<void> {
  if (newSpecies.getValue().length <= 0) {
   return Result.failure('Species cannot be empty');
  }

  this.species = newSpecies;
  return Result.success();
 }

 changeBreed(newBreed: string): Result<void> {
  if (newBreed.length <= 0) {
   return Result.failure('Breed cannot be empty');
  }

  this.breed = newBreed;
  return Result.success();
 }

 changeBirthDate(newBirthDate: Date): Result<void> {
  if (newBirthDate > new Date()) {
   return Result.failure('Birth date cannot be in the future');
  }

  this.birthDate = newBirthDate;
  return Result.success();
 }

 changeVaccinationHistory(newVaccinationHistory: string): Result<void> {
  if (newVaccinationHistory.length <= 0) {
   return Result.failure('Vaccination history cannot be empty');
  } 

  this.vaccinationHistory = newVaccinationHistory;
  return Result.success();
 }

 changeTreatments(newTreatments: string): Result<void> {
  if (newTreatments.length <= 0) {
   return Result.failure('Treatments cannot be empty');
  }

  this.treatments = newTreatments; 
  return Result.success();
 }

 toDTO(): AnimalResponseDTO {
  return {
   id: this.id,
   userId: this.userId,
   identification: this.identification,
   name: this.name,
   species: this.species.getValue(),
   breed: this.breed,
   birthDate: this.birthDate,
   vaccinationHistory: this.vaccinationHistory,
   treatments: this.treatments
  }
 }

}


export {
 Animal
}