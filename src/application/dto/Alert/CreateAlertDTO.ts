export interface CreateAlertDTO {
 animalId: number,
 alertMessage: string,
 alertType: string,
 status: string,
 sensorId?: number | null,
 sensorDataId?: number | null,
 updatedAt?: Date | null
}