import { PrismaClient } from "@prisma/client";
import { ISensorDataRepository } from "../../domain/repositories/ISensorDataRepository";
import { SensorData } from "../../domain/entities/SensorData";
import { Result } from "../../shared/core/Result";
import logger from "../logger/Logger";

export class SensorDataRepository implements ISensorDataRepository {
  constructor(private prisma: PrismaClient) {}

  async create(sensorData: SensorData): Promise<Result<SensorData>> {
    const sensorDataInfo = sensorData.toDTO();    
    let createSensorData;
    
    try {
      createSensorData = await this.prisma.sensorData.create({
       data: {
        sensor: {
         connect: {
          id: sensorDataInfo.sensorId
         }
        },
        measurementType: sensorDataInfo.measurementType,
        recordedAt: sensorDataInfo.recordedAt,
        value: sensorDataInfo.value,
        unit: sensorDataInfo.unit,
        latitude: sensorDataInfo.latitude,
        longitude: sensorDataInfo.longitude,
        quality: sensorDataInfo.quality,
        rawData: sensorDataInfo.rawData
       }
      });
    } catch (e: any) {
      logger.error("Error on Creating SensorData (repository)", { error: e.message });
      return Result.failure("Error on Creating SensorData (repository): " + e.message);
    }

    const createdSensorData = new SensorData(
      createSensorData.id,
      createSensorData.sensorId,
      createSensorData.recordedAt,
      createSensorData.value,
      createSensorData.measurementType,
      createSensorData.unit,
      createSensorData.latitude,
      createSensorData.longitude,
      createSensorData.quality,
      createSensorData.rawData
    );
    
    return Result.success(createdSensorData);
  }

  async update(sensorData: SensorData): Promise<Result<SensorData>> {
    const sensorDataInfo = sensorData.toDTO();
    let updateSensorData;

    try {
     updateSensorData = await this.prisma.sensorData.update({
      data: {
       latitude: sensorDataInfo.latitude,
       longitude: sensorDataInfo.longitude,
       measurementType: sensorDataInfo.measurementType,
       quality: sensorDataInfo.quality,
       rawData: sensorDataInfo.rawData,
       recordedAt: sensorDataInfo.recordedAt,
       unit: sensorDataInfo.unit,
       value: sensorDataInfo.value
      },
      where: {
       id: sensorDataInfo.id
      }
     });
    } catch (e: any) {
     logger.error("Error on Updating Sensor Data (repository)", { error: e.message });
     return Result.failure("Error on Updating Sensor Data (repository): " + e.message);
    }

    const updatedSensorData = new SensorData(
     updateSensorData.id,
     updateSensorData.sensorId,
     updateSensorData.recordedAt,
     updateSensorData.value,
     updateSensorData.measurementType,
     updateSensorData.unit,
     updateSensorData.latitude,
     updateSensorData.longitude,
     updateSensorData.quality,
     updateSensorData.rawData
    );
    
    return Result.success(updatedSensorData);
  }

  async delete(id: number): Promise<Result<void>> {
    try {
      await this.prisma.sensorData.delete({
       where: {
        id
       }
      });
    } catch (e: any) {
      logger.error("Error on Deleting Sensor Data (repository)", { error: e.message });
      return Result.failure("Error on Deleting Sensor Data (repository): " + e.message);
    }

    return Result.success();
  }

  async findById(id: number): Promise<Result<SensorData>> {
   try {
    await this.prisma.sensorData.findUnique({
     where: {
      id
     }
    });
   } catch (e: any) {
    logger.error("Error on Trying to find Sensor Data by Id", { error: e.message });
    return Result.failure("Error on Trying to find Sensor Data by Id: " + e.message);
   }
   return Result.success();
  }

  async findBySensorId(sensorId: number): Promise<Result<SensorData[]>> {
    try {
     await this.prisma.sensorData.findMany({
      where: {
       sensorId
      }
     });
    } catch (e: any) {
     logger.error("Error on Trying to find Sensor Data by Sensor Id", { error: e.message });
     return Result.failure("Error on Trying to find Sensor Data by Sensor Id: " + e.message);
    }
    return Result.success();
  }

}

