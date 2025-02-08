<script>
  import { fly, slide } from 'svelte/transition';
  import { projects, skills, experiences, education, leadership } from '../data.js';
  import ProjectCard from '../components/ProjectCard.svelte';
  import SkillCategory from '../components/SkillCategory.svelte';
  import TimelineItem from '../components/TimelineItem.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import InteractiveCube from '../components/InteractiveCube.svelte';
  
  let activeSection = 'home';
</script>
<Header />
<section id="home" class="hero">
  <div class="hero-content" in:fly={{ y: 100 }}>
    <div class="hero-grid">
      <div class="cube-container">
        <InteractiveCube />
      </div>
      <div class="hero-text">
        <h1>James Mwangi Njenga</h1>
        <h2>Full Stack Developer | AI/ML Engineer</h2>
        <div class="cta-container">
          <a href="/HireMe" class="cta-button">Hire Me</a>
          <a href="/JAMESMWANGICV.pdf" download class="cta-button secondary">Download CV</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="section">
  <h2 class="section-title">Featured Projects</h2>
  <div class="projects-grid">
      {#each projects as project}
          <div in:slide>
              <ProjectCard {project} />
          </div>
      {/each}
  </div>
</section>

<section id="skills" class="section">
  <h2 class="section-title">Technical Skills</h2>
  {#each skills as category}
      <SkillCategory {category} />
  {/each}
</section>

<section id="experience" class="section">
  <h2 class="section-title">Professional Experience</h2>
  <div class="timeline">
      {#each experiences as exp}
          <TimelineItem experience={exp} />
      {/each}
  </div>
</section>

<section id="education" class="section">
  <h2 class="section-title">Education</h2>
  {#each education as education}
  <div class="education-card">
      <h3>{education.degree}</h3>
      <p class="university">{education.university}</p>
      <p class="duration">{education.duration}</p>
      <div class="achievements">
          {#each education.achievements as achievement}
              <span class="achievement-tag">{achievement}</span>
          {/each}
      </div>
  </div>
  {/each}
</section>

<section id="leadership" class="section">
  <h2 class="section-title">Leadership & Activities</h2>
  <div class="leadership-grid">
      {#each leadership as item}
          <div class="leadership-item" transition:fly>
              <div class="icon">★</div>
              <p>{item}</p>
          </div>
      {/each}
  </div>
</section>
<Footer />
<style>
  :root {
    --royal-blue: #2A2356;
    --gold: #D4AF37;
    --purple: #6C5B7B;
    --dark-bg: #1A1A2E;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .cube-container {
    position: relative;
    width: 300px;
    height: 300px;
  }

  .hero-text {
    text-align: left;
  }

  @media (max-width: 768px) {
    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .cube-container {
      margin: 0 auto;
    }

    .hero-text {
      text-align: center;
    }
  }
  .section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    color: var(--gold);
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--gold);
  }

  /* Hero section */
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(
      135deg,
      var(--royal-blue),
      var(--purple),
      var(--dark-bg)
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    padding: 2rem;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .hero-content {
    max-width: 800px;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: white;
    font-family: 'Playfair Display', serif;
  }

  .hero h2 {
    font-size: 1.5rem;
    color: var(--gold);
    margin-bottom: 2rem;
    font-weight: 400;
  }

  /* Projects section */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }

  /* Education section */
  .education-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    max-width: 800px;
    margin: 10px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .education-card h3 {
    color: var(--gold);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .university {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 0.5rem;
  }

  .duration {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
  }

  .achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .achievement-tag {
    background: var(--purple);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }

  .achievement-tag:hover {
    transform: translateY(-2px);
  }

  /* Leadership section */
  .leadership-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .leadership-item {
    text-align: center;
    padding: 1.5rem;
    background: rgba(212, 175, 55, 0.1);
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .leadership-item:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  /* CTA buttons */
  .cta-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .cta-button {
    background: var(--gold);
    color: var(--royal-blue);
    padding: 1rem 2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid var(--gold);
  }

  .cta-button.secondary {
    background: transparent;
    color: var(--gold);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }

    .hero h2 {
      font-size: 1.2rem;
    }

    .section {
      padding: 3rem 1rem;
    }

    .cta-container {
      flex-direction: column;
      gap: 1rem;
    }

    .projects-grid,
    .leadership-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .hero h1 {
      font-size: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .education-card {
      padding: 1.5rem;
    }
  }
</style>