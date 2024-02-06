import type { APIRoute } from "astro";

export const POST: APIRoute = async({ request }) => {
  const formData = await request.formData()
  const file = formData.get('file') as File

  console.log(file)

  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulating a deloy of 3s

  return new Response('Hello World!')
}