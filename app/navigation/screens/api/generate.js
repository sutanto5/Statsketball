import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: "org-UQ169QEJi4OGsmZlFrhWLjoH",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { name } = req.body;
  const prompt = generatePrompt(player)
  console.log(prompt)
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(player) {
  return `analyze ${player}$'s playstyle in 40 words.`;
}   