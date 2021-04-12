import {
  ISpecificationsRepository,
  ICreateSpecifcationDTO,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecifcationDTO): void {
    const specification = this.specificationsRepository.findByName(name);
    if (specification) {
      throw new Error("Specification already exists!");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
