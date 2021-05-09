import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("Specification already exists!", 401);
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
