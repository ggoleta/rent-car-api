import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRouter } from "./categories.router";
import { specificationRouter } from "./specifications.router";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/users", usersRouter);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export { router };
