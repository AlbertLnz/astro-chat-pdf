import type { APIRoute } from "astro";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
  cloud_name: 'dxgurhzge', 
  api_key: '945854376749222', 
  api_secret: import.meta.env.env.API_SECRET_CLOUDINARY
});

export const POST: APIRoute = async({ request }) => {
  const formData = await request.formData()
  const file = formData.get('file') as File

  console.log(file)

  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulating a deloy of 3s

  return new Response('Hello World!')
}