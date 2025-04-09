import { PrismaClient } from "@prisma/client";
import { IAlertRepository } from "../../domain/repositories/IAlertRepository";
import { Alert } from "../../domain/entities/Alert";
import { Result } from "../../shared/core/Result";
import logger from "../logger/Logger";

export class AlertRepository implements IAlertRepository {
  constructor(private prisma: PrismaClient) {}

  async create(alert: Alert): Promise<Result<Alert>> {
    const alertData = alert.toDTO();
    let createAlert;

    try {
      createAlert = await this.prisma.alert.create({
        data: {
          id: alertData.id,
          animalId: alertData.animalId,
          alertMessage: alertData.alertMessage,
          alertType: alertData.alertType,
          status: alertData.status,
          createdAt: alertData.createdAt,
          sensorId: alertData.sensorId,
          sensorDataId: alertData.sensorDataId,
        },
      });
    } catch (e: any) {
      logger.error("Error on Creating Alert (repository)", {
        error: e.message,
      });
      return Result.failure(
        "Error on Creating Alert (repository): " + e.message
      );
    }

    const createdAlert = new Alert(
      createAlert.id,
      createAlert.animalId,
      createAlert.alertMessage,
      createAlert.alertType,
      createAlert.status,
      createAlert.createdAt,
      createAlert.sensorId,
      createAlert.sensorDataId
    );

    return Result.success(createdAlert);
  }

  async update(alert: Alert): Promise<Result<Alert>> {
    const alertData = alert.toDTO();
    let updateAlert;

    try {
      updateAlert = await this.prisma.alert.update({
        where: {
          id: alertData.id,
        },
        data: {
          id: alertData.id,
          animalId: alertData.animalId,
          alertMessage: alertData.alertMessage,
          alertType: alertData.alertType,
          status: alertData.status,
          createdAt: alertData.createdAt,
          sensorId: alertData.sensorId,
          sensorDataId: alertData.sensorDataId,
        },
      });
    } catch (e: any) {
      logger.error("Error on Updating Alert (repository)", {
        error: e.message,
      });
      return Result.failure(
        "Error on Updating Alert (repository): " + e.message
      );
    }

    const updatedAlert = new Alert(
      updateAlert.id,
      updateAlert.animalId,
      updateAlert.alertMessage,
      updateAlert.alertType,
      updateAlert.status,
      updateAlert.createdAt,
      updateAlert.sensorId,
      updateAlert.sensorDataId
    );

    return Result.success(updatedAlert);
  }

  async delete(id: number): Promise<Result<void>> {
    try {
      await this.prisma.alert.delete({
        where: {
          id,
        },
      });
    } catch (e: any) {
      logger.error("Error on Deleting Alert", { error: e.message });
      return Result.failure(
        "Error on Deleting Alert (repository): " + e.message
      );
    }

    return Result.success();
  }

  async findById(id: number): Promise<Result<Alert>> {
    let findAlert;

    try {
      findAlert = await this.prisma.alert.findUnique({
        where: {
          id,
        },
      });
    } catch (e: any) {
      logger.error("Error on Trying to find Alert by Id", { error: e.message });
      return Result.failure(
        "Error on Trying to find Alert by Id: " + e.message
      );
    }

    if (!findAlert) {
      return Result.failure("Alert not found");
    }

    const alert = new Alert(
      findAlert.id,
      findAlert.animalId,
      findAlert.alertMessage,
      findAlert.alertType,
      findAlert.status,
      findAlert.createdAt,
      findAlert.sensorId,
      findAlert.sensorDataId
    );

    return Result.success(alert);
  }

  async findByAnimalId(animalId: number): Promise<Result<Alert[]>> {
    let findAlerts;

    try {
      findAlerts = await this.prisma.alert.findMany({
       where: {
        animal: {
         id: animalId
        }
       }
      });
    } catch (e: any) {
      logger.error("Error on Trying to find Alerts by Animal Id", {
        error: e.message,
      });
      return Result.failure(
        "Error on Trying to find Alerts by Animal Id: " + e.message
      );
    }

    if (findAlerts.length <= 0) {
      return Result.failure("This animal has no alerts");
    }

    const alerts = findAlerts.map(alert => {
      return new Alert(
        alert.id,
        alert.animalId,
        alert.alertMessage,
        alert.alertType,
        alert.status,
        alert.createdAt,
        alert.sensorId,
        alert.sensorDataId
      );
    });

    return Result.success(alerts);
  }

  async findBySensorId(sensorId: number): Promise<Result<Alert[]>> {
    let findAlerts;

    try {
     findAlerts = await this.prisma.alert.findMany({
      where: {
       sensor: {
        id: sensorId
       }
      }
     });
    } catch(e: any) {
     logger.error( "Error on Trying to find Alerts by Sensor Id", {
       error: e.message
     });
     return Result.failure("Error on Trying to find Alerts by Sensor Id: " + e.message);
    }

    if (findAlerts.length <= 0) {
     return Result.failure("This sensor has no alerts");
    }

    const alerts = findAlerts.map(alert => {
     return new Alert(
       alert.id,
       alert.animalId,
       alert.alertMessage,
       alert.alertType,
       alert.status,
       alert.createdAt,
       alert.sensorId,
       alert.sensorDataId
     );
    });

    return Result.success(alerts);
  }

  async findBySensorDataId(sensorDataId: number): Promise<Result<Alert[]>> {
    let findAlerts;

    try {
     findAlerts = await this.prisma.alert.findMany({
      where: {
       sensorData: {
        id: sensorDataId
       }
      }
     });
    } catch (e: any) {
      logger.error( "Error on Trying to find Alerts by Sensor Data Id", {
        error: e.message
      });
      return Result.failure("Error on Trying to find Alerts by Sensor Data Id: " + e.message);
    }

    if (findAlerts.length <= 0) {
     return Result.failure("This sensor data has no alerts");
    }

    const alerts = findAlerts.map(alert => {
     return new Alert(
       alert.id,
       alert.animalId,
       alert.alertMessage,
       alert.alertType,
       alert.status,
       alert.createdAt,
       alert.sensorId,
       alert.sensorDataId
     );
    });

    return Result.success(alerts);
  }
}
