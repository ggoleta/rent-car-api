import { Specification } from "../../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecifcationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private spefications: Specification[];

  constructor() {
    this.spefications = [];
  }

  create({ name, description }: ICreateSpecifcationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.spefications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.spefications.find((spec) => spec.name === name);
    return specification;
  }
}

export { SpecificationsRepository };
