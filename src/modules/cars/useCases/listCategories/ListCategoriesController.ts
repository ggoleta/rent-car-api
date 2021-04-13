import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    console.log("opa");
    const categories = this.listCategoriesUseCase.execute();
    return response.status(201).json(categories);
  }
}

export { ListCategoriesController };
