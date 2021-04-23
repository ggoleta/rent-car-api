import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecifcationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private spefications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.spefications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
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

  list(): Specification[] {
    return this.spefications;
  }
}

export { SpecificationsRepository };
