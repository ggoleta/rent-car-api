interface ICreateSpecifcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifcationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecifcationDTO };
