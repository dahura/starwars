import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = `https://swapi.dev/`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(response.status).json(data);
}
