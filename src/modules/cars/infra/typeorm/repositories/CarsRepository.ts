import { ICreateCarDTO } from "src/modules/cars/dtos/ICreateCarDTO";
import { ICarRepository } from "src/modules/cars/repositories/ICarRepository";
import { getRepository, Repository } from "typeorm";

import { Car } from "../entities/Car";

class CarsRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }
  findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.repository.findOne({ license_plate });
    return car;
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }
}

export { CarsRepository };
