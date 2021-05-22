import { CarRepositoryInMemory } from "../../repositories/in-memory/CarRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carRepositoryInMemory: CarRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List all cars", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    await carRepositoryInMemory.create({
      name: "Car 1",
      description: "Car 1 description",
      daily_rate: 12,
      license_plate: "ABC 0001",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id",
    });

    await carRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      daily_rate: 12,
      license_plate: "ABC 0002",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id",
    });

    await carRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 12,
      license_plate: "ABC 0003",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id",
    });

    const listCars = await listAvailableCarsUseCase.execute({
      brand: "Car brand",
    });

    expect(listCars[2].name).toBe("Car 3");
  });

  it("should be able to list all available cars by name", async () => {
    await carRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 12,
      license_plate: "ABC 0003",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    expect(cars[0].name).toBe("Car 3");
  });

  it("should be able to list all available cars by category_id", async () => {
    await carRepositoryInMemory.create({
      name: "Car 5",
      description: "Car description",
      daily_rate: 12,
      license_plate: "ABC 0003",
      fine_amount: 12,
      brand: "Car brand",
      category_id: "Car category_id Testing",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Car category_id Testing",
    });

    expect(cars[0].category_id).toBe("Car category_id Testing");
  });

  it("should be able to list all available cars by brand", async () => {
    await carRepositoryInMemory.create({
      name: "Car 5",
      description: "Car description",
      daily_rate: 12,
      license_plate: "ABC 0003",
      fine_amount: 12,
      brand: "Mercedez Benz",
      category_id: "Car category_id Testing",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Mercedez Benz",
    });

    expect(cars[0].brand).toBe("Mercedez Benz");
  });
});
