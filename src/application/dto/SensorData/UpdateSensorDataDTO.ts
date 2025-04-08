export interface UpdateSensorDataDTO {
 id: number,
 sensorId?: number,
 recordedAt?: Date,
 value?: number,
 measurementType?: string,
 unit?: string,
 latitude?: number | null,
 longitude?: number | null,
 quality?: number | null,
 rawData?: any
}