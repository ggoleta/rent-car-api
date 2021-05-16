import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  // verificar se recebemos o token
  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "87439788b9a488eeb5fac43f7c69a853"
    ) as IPayload;

    // validando o id
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User does not exists.", 401);
    }

    // add user id into request
    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
