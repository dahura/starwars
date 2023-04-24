import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export const config = {
  runtime: "edge",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await fetch(`https://swapi.dev/api/people/`);
  const person = await response.json();
  return new Response(JSON.stringify(person));
}
