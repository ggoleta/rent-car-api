import { Specification } from "../model/Specification";

interface ICreateSpecifcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifcationDTO): void;
  findByName(name: string): Specification | undefined;
  list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecifcationDTO };
