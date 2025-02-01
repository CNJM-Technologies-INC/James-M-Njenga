<script>
    import { onMount } from 'svelte';
    let target;
  
    onMount(() => {
      target = document.body;
      return () => {
        target = null;
      };
    });
  </script>
  
  {#if target}
    {@html '<!--Portal Start-->'}
    <slot />
    {@html '<!--Portal End-->'}
  {/if}
  
  <style>
    :global(body > [data-portal]) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }
  </style>