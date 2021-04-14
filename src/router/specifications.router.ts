import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  return response.status(201).json({ message: "Need to create a service." });
});

export { specificationRouter };
