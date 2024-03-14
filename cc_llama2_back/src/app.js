import express, {json} from 'express';
import cors from 'cors';
import {fileURLToPath} from "url";
import path from "path";
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";

const app = express();

app
.use(cors())
.use(json())

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const Path =  __dirname.substring(0, __dirname.length - 3);

const model = new LlamaModel({
    modelPath: path.join(Path, "model", "greennodelm-7b-v4leo.Q4_K_M.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});

app.post("/prompt", async (req,res)=>{
    
    const response = await session.prompt(req.body.body)
    res.send({"body": response}).status(200)    
})   

const port = +process.env.PORT || 8000

app.listen(port,  ()=> {
    console.log(`Server up and running on port ${port}`)
})