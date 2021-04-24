import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoriesController = new ListSpecificationsController();

specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listCategoriesController.handle);

export { specificationRouter };
