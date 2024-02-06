import type { APIRoute } from "astro";

export const POST: APIRoute = async({ request }) => {
  const formData = await request.formData()
  const file = formData.get('file') as File

  console.log(file)

  return new Response('Hello World!')
}