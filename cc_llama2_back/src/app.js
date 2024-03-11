import express, {json} from 'express';
import cors from 'cors';
import {fileURLToPath} from "url";
import path from "path";
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";

const app = express();

app
.use(json())
.use(cors())

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const Path =  __dirname.substring(0, __dirname.length - 3);

const model = new LlamaModel({
    modelPath: path.join(Path, "model", "greennodelm-7b-v4leo.Q4_K_M.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});

const port = +process.env.PORT || 8000

app.listen(port,  ()=> {
    console.log(`Server up and running on port ${port}`)
})