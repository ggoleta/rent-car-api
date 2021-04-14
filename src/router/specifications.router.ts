import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRouter = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRouter.get("/", (request, response) => {
  return response.status(201).json({ message: "Need to create a service." });
});

export { specificationRouter };
