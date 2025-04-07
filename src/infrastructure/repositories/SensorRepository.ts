import { PrismaClient } from "@prisma/client";
import { ISensorRepository } from "../../domain/repositories/ISensorRepository";
import { Sensor } from "../../domain/entities/Sensor";
import { Result } from "../../shared/core/Result";
import logger from "../logger/Logger";


export class SensorRepository implements ISensorRepository {
 constructor(private prisma: PrismaClient) {}

 async create(sensor: Sensor): Promise<Result<Sensor>> {
  const sensorInfo = sensor.toDTO();
  let createSensor;

  try {
   createSensor = await this.prisma.sensor.create({
    data: {
     installationDate: sensorInfo.instalationDate,
     animal: {
      connect: {
       id: sensorInfo.animalId
      }
     },
     type: sensorInfo.type,
     createdAt: sensorInfo.createdAt,
    }
   });
  } catch (e: any) {
   logger.error("Error on Creating Sensor (repository): ", { error: e.message });
   return Result.failure("Error on Creating Sensor (repository): " + e.message);
  }
 
  const createdSensor = new Sensor(
   createSensor.id,
   createSensor.animalId,
   createSensor.type,
   createSensor.installationDate,
   createSensor.createdAt,
   createSensor.updatedAt
  );

  return Result.success(createdSensor);
 }

 async update(sensor: Sensor): Promise<Result<Sensor>> {
  const sensorInfo = sensor.toDTO();
  let updateSensor;

  try { 
   updateSensor = await this.prisma.sensor.update({
    data: {
     installationDate: sensorInfo.instalationDate,
     animal: {
      connect: {
       id: sensorInfo.animalId
      }
     },
     type: sensorInfo.type,
     updatedAt: new Date()
    },
    where: {
     id: sensorInfo.id
    }
   });
  } catch (e: any) {
   logger.error("Error on Updating Sensor (repository): ", { error: e.message });
   return Result.failure("Error on Updating Sensor (repository): " + e.message);
  } 
  
  const updatedSensor = new Sensor(
   updateSensor.id,
   updateSensor.animalId,
   updateSensor.type,
   updateSensor.installationDate,
   updateSensor.createdAt,
   updateSensor.updatedAt
  );

  return Result.success(updatedSensor);
 }

 async delete(id: number): Promise<Result<void>> {
  try {
   await this.prisma.sensor.delete({
    where: {
     id
    }
   });
  } catch (e: any) {
   logger.error("Error on Deleting Sensor (repository): ", { error: e.message });
   return Result.failure("Error on Deleting Sensor (repository): " + e.message);
  }

  return Result.success();
 }

 async findByAnimalId(animalId: number): Promise<Result<Sensor[]>> {
  let findSensors;

  try {
    findSensors = await this.prisma.sensor.findMany({
     where: {
      animal: {
       id: animalId
      }
     }
    });
  } catch (e: any) {
   logger.error("Error on Trying to find Sensors by Animal Id", { error: e.message });
   return Result.failure("Error on Trying to find Sensors by Animal ID: " + e.message);
  }

  if (findSensors.length <= 0) {
   return Result.failure("This animal has no sensors");
  }

  const sensors = findSensors.map(sensor => {
   return new Sensor(
    sensor.id,
    sensor.animalId,
    sensor.type,
    sensor.installationDate,
    sensor.createdAt,
    sensor.updatedAt
   );
  });

  return Result.success(sensors);
 }

 async findById(id: number): Promise<Result<Sensor>> {
  let findSensor;

  try {
   findSensor = await this.prisma.sensor.findUnique({
    where: {
     id
    }
   })
  } catch (e: any) {
   logger.error("Error on Trying to find Sensor by Id", { error: e.message });
   return Result.failure("Error on Trying to find Sensor by Id: " + e.message);
  }

  if (!findSensor) {
   return Result.failure("Sensor not found");
  }

  const sensor = new Sensor(
   findSensor.id,
   findSensor.animalId,
   findSensor.type,
   findSensor.installationDate,
   findSensor.createdAt,
   findSensor.updatedAt
  );

  return Result.success(sensor);
 }

}
