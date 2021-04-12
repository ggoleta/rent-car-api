import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
