import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecifcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifcationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecifcationDTO };
