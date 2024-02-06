<script>
  import { Input } from 'flowbite-svelte'
  import { appStatusInfo } from '../store'
  const { url, pages, id } = $appStatusInfo

  let loading = false

  const numOfImagesToShow = Math.min(pages, 4) // max 4 images
  const images = Array.from({ length: numOfImagesToShow }, (_, i) => {
    const page = i+1
    return url
      .replace('/upload/', `/upload/w_400,h_540_c_fill,pg_${page}/`)
      .replace('.pdf', '.jpg')
  })

  const handleSubmit = () => {

  }

</script>

<div class="grid grid-cols-4 gap-2">
  {#each images as image}
    <img src={image} alt="PDF page" class="rounded-xl w-full h-auto">
  {/each}
</div>



<form on:submit={handleSubmit}>
  <div class='mb-6'>
    <label for="question-input" class="block mb-2">Deja aquí tu pregunta</label>
    <Input required id='question-input' type='email' placeholder='¿De qué trata este documento?'>
      
    </Input>
  </div>
</form>