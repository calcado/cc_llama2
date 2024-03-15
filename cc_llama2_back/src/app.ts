import express, { json, Response, Request } from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";
import httpStatus from "http-status";
import { BodyParams } from "./protocols";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors()).use(json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDir = path.resolve(__dirname, "..");
const model = new LlamaModel({
  modelPath: path.join(parentDir, "model", "greennodelm-7b-v4leo.Q4_K_M.gguf"),
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ context });

app.post("/prompt", async (req: Request, res: Response) => {
  const { question } = req.body as BodyParams;

  const response = await session.prompt(question);

  res.send({ body: response }).status(httpStatus.OK);
});

const port = +process.env.PORT! || 8000;

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
