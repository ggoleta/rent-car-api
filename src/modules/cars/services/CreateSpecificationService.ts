import {
  ISpecificationsRepository,
  ISpecifcationDTO,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ISpecifcationDTO): void {
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
