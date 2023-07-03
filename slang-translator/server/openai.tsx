import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/slang", async function (req: any, res: any) {
  const { prompt } = req.body;
  const slangPrompt = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 512,
  });
  res.send(slangPrompt.data.choices[0].text);
});

app.listen(8080, function () {
  console.log("server listening on port 8080");
});
