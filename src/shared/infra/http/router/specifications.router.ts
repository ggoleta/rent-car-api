import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../../../../modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoriesController = new ListSpecificationsController();

specificationRouter.use(ensureAuthenticated);
specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listCategoriesController.handle);

export { specificationRouter };
