<script>
  import { Alert } from 'flowbite-svelte'
  import { APP_STATUS, appStatus } from '../store.ts'
</script>

{#if $appStatus === APP_STATUS.INIT}
  <p>La página incial</p>

{:else if $appStatus === APP_STATUS.LOADING}
  <p>Loading...</p>

{:else if $appStatus === APP_STATUS.CHAT_MODE}
  <p>Chatting</p>

{:else if $appStatus === APP_STATUS.ERROR}
  <Alert>
    <span class="font-medium">Error!</span>
    ¡La aplicación tiene algún tipo de error!
  </Alert>

{:else}
  <Alert color="red">
    <span class="font-medium">Acción no reconocida!</span>
    ¡Este estado de la aplicación no está reconocido!
  </Alert>

{/if}