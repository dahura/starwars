import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import Redis from "redis";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const person = await response.json();

  res.json(person);
}
