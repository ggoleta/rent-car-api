import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRouter } from "./categories.router";
import { specificationRouter } from "./specifications.router";
import { userRouter } from "./users.router";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/users", userRouter);
router.use(authenticateRoutes);

export { router };
