<script>
  import { fade } from 'svelte/transition';
</script>

  <main in:fade={{ duration: 300 }}>
    <slot />
  </main>