<script>
  import { Input, Spinner } from 'flowbite-svelte'
  import { appStatusInfo, setAppStatusError } from '../store'
  const { url, pages, id } = $appStatusInfo

  let loading = false
  let answer = ''

  const numOfImagesToShow = Math.min(pages, 4) // max 4 images
  const images = Array.from({ length: numOfImagesToShow }, (_, i) => {
    const page = i+1
    return url
      .replace('/upload/', `/upload/w_400,h_540_c_fill,pg_${page}/`)
      .replace('.pdf', '.jpg')
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    loading = true
    
    const question = event.target.question.value

    const searchParams = new URLSearchParams()
    searchParams.append('id', id)
    searchParams.append('question', question)

    try {
      const res = await fetch(`/api/ask?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      loading = false
      console.error('Error asking question')
      return
    }

    } catch (error) {
      setAppStatusError()

    } finally {
      loading = false
    }

    const { response } = await res.json()
    answer = response // Svelte automatically detects changes in variables and updates their values quickly w/o requiring any hooks (even between components). So cool!
  }

</script>

<div class="grid grid-cols-4 gap-2">
  {#each images as image}
    <img src={image} alt="PDF page" class="rounded-xl w-full h-auto aspect-[400/540]">
  {/each}
</div>



<form class="mt-8" on:submit={handleSubmit}>
  <div class='mb-6'>
    <label for="question" class="block mb-2">Deja aquí tu pregunta</label>
    <Input required id='question' type='email' placeholder='¿De qué trata este documento?'>
      
    </Input>
  </div>
</form>

{#if loading}
  <div class="flex flex-col mt-8 justify-center items-center gap-y-2">
    <Spinner />
    <p class="opacity-75">Esperando la respuesta...</p>
  </div>
{/if}

{#if answer}
  <div class="mt-8">
    <p class="font-medium">Respuesta:</p>
    <p>{answer}</p>
  </div>
{/if}