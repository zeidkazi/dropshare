import express from "express";
import cors from "cors";
import { env } from "./config/env";
import apiRoutes from "./routes/routes";

//express instance
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", apiRoutes);

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
