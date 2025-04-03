export interface AnimalResponseDTO {
 id: number;
 identification: string;
 name: string;
 species: string;
 breed: string | undefined;
 birthDate: Date;
 vaccinationHistory: string;
 treatments: string;
}