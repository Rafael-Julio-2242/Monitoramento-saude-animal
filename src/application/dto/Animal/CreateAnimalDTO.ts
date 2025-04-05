import { Species } from "../../../domain/valueObjects/Species";

export interface CreateAnimalDTO {
 name: string;
 userId: number;
 identification: string;
 species: Species;
 breed: string;
 birthDate: Date;
 vaccinationHistory: string;
 treatments: string;
}