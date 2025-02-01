<script>
    import { fly } from 'svelte/transition';
    import ProjectModal from './ProjectModal.svelte';
    import Portal from './Portal.svelte';
    
    export let project;
    
    let showModal = false;
    
    const openModal = () => showModal = true;
    const closeModal = () => showModal = false;
  </script>
  
  <div class="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div class="tech-stack">
      {#each project.technologies as tech}
        <span class="tech-tag">{tech}</span>
      {/each}
    </div>
    <button on:click={openModal} class="project-link">View Details →</button>
  </div>
  
  {#if showModal}
    <Portal>
      <ProjectModal {project} on:close={closeModal} />
    </Portal>
  {/if}
  
  <style>
    .project-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 15px;
      transition: transform 0.3s ease;
      border: 1px solid rgba(212, 175, 55, 0.2);
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    
    .tech-tag {
      background: var(--gold);
      color: var(--royal-blue);
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
    
    .project-link {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      font: inherit;
      color: var(--gold);
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.2s;
    }
    
    .project-link:hover {
      opacity: 0.8;
    }
  </style>