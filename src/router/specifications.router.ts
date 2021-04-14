import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationRouter };
