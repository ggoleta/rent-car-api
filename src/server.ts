import express from "express";

import { categoriesRouter } from "./router/categories.router";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);

app.listen(3333, () => console.log("😎 Server is running!"));
