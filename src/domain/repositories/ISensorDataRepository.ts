import { Result } from "../../shared/core/Result";
import { SensorData } from "../entities/SensorData";

export interface ISensorDataRepository {
 create(sensorData: SensorData): Promise<Result<SensorData>>;
 update(sensorData: SensorData): Promise<Result<SensorData>>;
 delete(id: number): Promise<Result<void>>;
 findById(id: number): Promise<Result<SensorData>>;
 findBySensorId(sensorId: number): Promise<Result<SensorData[]>>; // Order by recordedAt
}
