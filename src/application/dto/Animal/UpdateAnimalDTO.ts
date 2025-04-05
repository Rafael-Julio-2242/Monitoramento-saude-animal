import { Species } from "../../../domain/valueObjects/Species";

export interface UpdateAnimalDTO {
  id: number;
  name?: string;
  identification?: string;
  species?: Species;
  breed?: string;
  birthDate?: Date;
  vaccinationHistory?: string;
  treatments?: string;
}