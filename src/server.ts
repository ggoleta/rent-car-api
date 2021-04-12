import express from "express";

import { categoriesRouter } from "./router/categories.router";
import { specificationRouter } from "./router/specifications.router";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/specifications", specificationRouter);

app.listen(3333, () => console.log("😎 Server is running!"));
