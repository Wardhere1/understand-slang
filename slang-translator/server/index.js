import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);


app.post("/slang", async function (req, res) {
    console.log('hitting /slang url')
  const { prompt } = req.body;

  const slangPrompt = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 1000,
  });
  console.log(slangPrompt)
  res.send(slangPrompt.data.choices[0].text);
});

app.get("/", async function (req, res) {    
    res.send('hello world');
  });

app.listen(8080, function () {
  console.log("server listening on port 8080");
});
