import { Router } from "express";

import { categoriesRouter } from "./categories.router";
import { specificationRouter } from "./specifications.router";
import { userRouter } from "./users.router";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/users", userRouter);

export { router };
