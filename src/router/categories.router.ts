import { Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = categoriesRepository.findByName(name);

  if (category) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  categoriesRepository.create({ name, description });
  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepository.list();
  return response.status(201).json(categories);
});

export { categoriesRouter };
