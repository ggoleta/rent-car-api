import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUser {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUser): Promise<void> {
    const userlAlreadyExist = await this.userRepository.findByEmail(email);

    if (userlAlreadyExist) {
      throw new AppError("User already exists!", 401);
    }
    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
