export interface SensorDataDTO {
 id: number,
 sensorId: number,
 recordedAt: Date,
 value: number,
 measurementType: string,
 unit: string,
 latitude?: number,
 longitude?: number,
 quality?: number,
 rawData?: any
}