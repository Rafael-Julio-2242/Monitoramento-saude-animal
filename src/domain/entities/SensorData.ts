import { SensorDataDTO } from "../../application/dto/SensorData/SensorDataDTO";
import { Result } from "../../shared/core/Result";

export class SensorData {
 constructor(
  private id: number,
  private sensorId: number,
  private recordedAt: Date,
  private value: number,
  private measurementType: string,
  private unit: string,
  private latitude?: number | null,
  private longitude?: number | null,
  private quality?: number | null,
  private rawData?: any
 ) {}

 changeSensor(sensorId: number): Result<void> {
  if (sensorId <= 0) {
   return Result.failure("Sensor ID must be greater than 0");
  }

  this.sensorId = sensorId;
  return Result.success();
 }

 changeValue(value: number): Result<void> {
  this.value = value;
  return Result.success();
 }

 changeMeasurementType(measurementType: string): Result<void> {
  if (measurementType.length === 0) {
   return Result.failure("Measurement type cannot be empty");
  }
   
  this.measurementType = measurementType;
  return Result.success();
 }

 changePlace({ latitude, longitude }: { latitude?: number, longitude?: number }): Result<void> {
  this.latitude = latitude;
  this.longitude = longitude;
  return Result.success();
 }

 changeUnit(unit: string): Result<void> {
  if (unit.length === 0) {
   return Result.failure("Unit cannot be empty");
  }

  this.unit = unit;
  return Result.success();
 }

 changeQuality(quality: number): Result<void> {
  if (quality < 0 || quality > 100) {
   return Result.failure("Quality must be between 0 and 100");
  }

  this.quality = quality;
  return Result.success();
 }

 changeRawData(rawData: any): Result<void> {
  this.rawData = rawData !== undefined ? rawData : null;
  return Result.success();
 }

 changeRecordedAt(recordedAt: Date): Result<void> {
  this.recordedAt = recordedAt;
  return Result.success();
 }

 toDTO(): SensorDataDTO {
  return {
   id: this.id,
   sensorId: this.sensorId,
   recordedAt: this.recordedAt,
   value: this.value,
   measurementType: this.measurementType,
   unit: this.unit,
   latitude: this.latitude,
   longitude: this.longitude,
   quality: this.quality,
   rawData: this.rawData
  }
 }

}
