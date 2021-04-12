import {
  ISpecificationsRepository,
  ICreateSpecifcationDTO,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecifcationDTO): void {
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
