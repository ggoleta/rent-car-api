import { inject, injectable } from "tsyringe";

import {
  ISpecificationsRepository,
  ICreateSpecifcationDTO,
} from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: ICreateSpecifcationDTO): Promise<void> {
    const specification = await this.specificationsRepository.findByName(name);
    if (specification) {
      throw new Error("Specification already exists!");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
