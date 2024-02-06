import type { APIRoute } from "astro";

export const POST: APIRoute = async({ request }) => {
  return new Response('Hello World!')
}