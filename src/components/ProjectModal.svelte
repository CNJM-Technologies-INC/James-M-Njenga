<script>
    import { fade, slide } from 'svelte/transition';
    import { onMount, createEventDispatcher } from 'svelte';
    
    export let project;
    
    const dispatch = createEventDispatcher();
    let currentSlide = 0;
    let modalElement;
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % project.screenshots.length;
    };
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + project.screenshots.length) % project.screenshots.length;
    };
    
    const handleKeydown = (e) => {
      if (e.key === 'Escape') dispatch('close');
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    const closeModal = () => {
      dispatch('close');
    };
    
    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      modalElement?.focus();
      document.body.style.overflow = 'hidden';
      
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = '';
      };
    });
  </script>
  
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
  class="modal-backdrop"
  transition:fade
  on:click={closeModal}
  role="dialog"
  aria-labelledby="modal-title"
  bind:this={modalElement}
  tabindex="-1"
  data-portal
>
    <div 
      class="modal-content"
      on:click|stopPropagation
      role="document"
    >
      <button 
        class="close-btn"
        on:click={closeModal}
        aria-label="Close modal"
      >
        ×
      </button>
      
      <h2 id="modal-title">{project.title}</h2>
      
      <div class="carousel" aria-label="Project screenshots">
        {#each project.screenshots as screenshot, index}
          <div
            class="slide"
            class:active={index === currentSlide}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={screenshot}
              alt="Project screenshot {index + 1}"
              loading="lazy"
            />
          </div>
        {/each}
        
        {#if project.screenshots.length > 1}
          <button
            class="carousel-btn prev"
            on:click={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            class="carousel-btn next"
            on:click={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
          
          <div class="carousel-indicators" role="tablist">
            {#each project.screenshots as _, index}
              <!-- svelte-ignore element_invalid_self_closing_tag -->
              <button
                class="indicator"
                class:active={index === currentSlide}
                on:click={() => currentSlide = index}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label="Show slide {index + 1}"
              />
            {/each}
          </div>
        {/if}
      </div>
      
      <div class="project-details">
        <div class="details-section">
          <h3>Project Overview</h3>
          <p>{project.detailedDescription}</p>
        </div>
        
        <div class="details-section">
          <h3>Key Features</h3>
          <ul>
            {#each project.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </div>
        
        <div class="tech-stack">
          <h3>Technologies Used</h3>
          <div class="tech-tags">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .modal-content {
      background: var(--dark-bg);
      padding: 2rem;
      border-radius: 15px;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      color: var(--text-color);
    }
    
    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      color: var(--gold);
      font-size: 2rem;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
      border-radius: 50%;
      transition: background-color 0.2s;
    }
    
    .close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    
    .carousel {
      position: relative;
      margin: 2rem 0;
      overflow: hidden;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
    }
    
    .slide {
      display: none;
      position: relative;
      transition: transform 0.5s ease;
    }
    
    .slide.active {
      display: block;
    }
    
    .slide img {
      width: 100%;
      height: 400px;
      object-fit: contain;
      border-radius: 8px;
    }
    
    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      padding: 1rem;
      cursor: pointer;
      font-size: 1.5rem;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }
    
    .carousel-btn:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    
    .prev { left: 1rem; }
    .next { right: 1rem; }
    
    .carousel-indicators {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
    }
    
    .indicator {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      border: none;
      cursor: pointer;
      padding: 0;
      transition: background-color 0.2s;
    }
    
    .indicator.active {
      background: var(--gold);
    }
    
    .project-details {
      display: grid;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .details-section h3 {
      color: var(--gold);
      margin-bottom: 1rem;
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-tag {
      background: var(--gold);
      color: var(--royal-blue);
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
  </style>