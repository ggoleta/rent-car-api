import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[];
  constructor() {
    this.users = [];
  }
  async create({
    name,
    password,
    driver_license,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, { name, password, driver_license, email });
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async findById(user_id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === user_id);
    return user;
  }
}

export { UsersRepositoryInMemory };
