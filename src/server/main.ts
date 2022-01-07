import cors from "cors";
import express from "express";
import { join } from "path";
import { cwd } from "process";
import { routes } from "./routes";

const ENV = process.env.NODE_ENV || 'development';
const PORT = parseInt(process.env.PORT || "60000");

const app = express();

app.use(cors());

app.use(routes);

app.use(express.static(join(cwd(), 'src', 'client', 'public')));

app.listen(PORT, "0.0.0.0", function () {
  console.log(`A ${""} server is listening on port ${PORT}`);
});
