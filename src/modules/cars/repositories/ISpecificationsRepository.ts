interface ISpecifcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecifcationDTO): void;
}

export { ISpecificationsRepository, ISpecifcationDTO };
