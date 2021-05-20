import { AppError } from "../../../../shared/errors/AppError";
import { CarRepositoryInMemory } from "../../repositories/in-memory/CarRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("Create a new car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car name",
      description: "Car description",
      daily_rate: 12,
      license_plate: "Car license_plate",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with the same license plate to another car that already exists.", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car name1",
        description: "Car description",
        daily_rate: 1,
        license_plate: "EGV 5988",
        fine_amount: 1,
        brand: "Car brand",
        category_id: "000002",
      });
      await createCarUseCase.execute({
        name: "Car name2",
        description: "Car description",
        daily_rate: 1,
        license_plate: "EGV 5988",
        fine_amount: 1,
        brand: "Car brand",
        category_id: "000002",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car available",
      description: "Car description",
      daily_rate: 12,
      license_plate: "EGV 2658",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "000003",
    });
    expect(car.available).toBe(true);
  });
});
