// TODO Implement

import { PrismaClient } from "@prisma/client";
import { ISensorDataRepository } from "../../domain/repositories/ISensorDataRepository";
import { SensorData } from "../../domain/entities/SensorData";
import { Result } from "../../shared/core/Result";


export class SensorDataRepository implements ISensorDataRepository {
  constructor(private prisma: PrismaClient) {}

  async create(sensorData: SensorData): Promise<Result<SensorData>> {
    throw new Error("Method not implemented");
  }

}

