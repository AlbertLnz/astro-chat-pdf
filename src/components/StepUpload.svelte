<script>
  import { setAppStatusLoading } from "../store";
  import Dropzone from "svelte-file-dropzone";

  let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];

    if (acceptedFiles.length > 0) {
      setAppStatusLoading()
    }
  }
</script>

<Dropzone 
  on:drop={handleFilesSelect}
  multiple={false}
  accept={'application/pdf'}
>
    Arrastra y suelta aquí tu PDF
</Dropzone>
<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>