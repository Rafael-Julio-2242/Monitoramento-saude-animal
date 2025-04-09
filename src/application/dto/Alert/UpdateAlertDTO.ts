export interface UpdateAlertDTO {
 id: number,
 animalId?: number,
 alertMessage?: string,
 alertType?: string,
 status?: string,
 createdAt?: Date,
 sensorId?: number | null,
 sensorDataId?: number | null,
 updatedAt?: Date | null
}