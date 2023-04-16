import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const response = await fetch(`https://swapi.dev/api/people/`);
  const person = await response.json();

  res.json(person);
}
