import { Result } from "../../shared/core/Result";
import { Alert } from "../entities/Alert";

export interface IAlertRepository {
 create(alert: Alert): Promise<Result<Alert>>;
 update(alert: Alert): Promise<Result<Alert>>;
 delete(id: number): Promise<Result<void>>;
 findById(id: number): Promise<Result<Alert>>;
 findByAnimalId(animalId: number): Promise<Result<Alert[]>>;
 findBySensorId(sensorId: number): Promise<Result<Alert[]>>;
 findBySensorDataId(sensorDataId: number): Promise<Result<Alert[]>>;
}
