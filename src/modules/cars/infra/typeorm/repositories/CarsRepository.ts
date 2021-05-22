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

  async findAllAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("brand = :brand", { brand });
    }

    if (category_id) {
      carsQuery.andWhere("category_id = :category_id", { category_id });
    }

    if (name) {
      carsQuery.andWhere("name = :name", { name });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
