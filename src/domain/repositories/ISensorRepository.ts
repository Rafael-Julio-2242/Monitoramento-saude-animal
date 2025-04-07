import { Result } from "../../shared/core/Result";
import { Sensor } from "../entities/Sensor";

export interface ISensorRepository {
 create(sensor: Sensor): Promise<Result<Sensor>>;
 update(sensor: Sensor): Promise<Result<Sensor>>;
 delete(id: number): Promise<Result<void>>;
 findById(id: number): Promise<Result<Sensor>>;
 findByAnimalId(animalId: number): Promise<Result<Sensor[]>>;
}
