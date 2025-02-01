<!-- HireMe.svelte -->
<script>
    import { fly, slide } from 'svelte/transition';
    import Header from '../../components/Header.svelte';
    import Footer from '../../components/Footer.svelte';
  
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let showSuccess = false;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Encode the email components
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const fullSubject = encodeURIComponent(subject || 'Job Opportunity');
      
      // Create mailto link
      const mailtoLink = `mailto:camreshjames@gmail.com?subject=${fullSubject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      showSuccess = true;
      setTimeout(() => showSuccess = false, 5000);
      
      // Clear form
      name = email = subject = message = '';
    };
  </script>
  
  <Header />
  <section class="hire-section">
    <div class="container">
      <h1 transition:fly={{ y: 50 }}>Let's Work Together</h1>
      
      <form on:submit={handleSubmit} class="hire-form">
        <div class="form-group">
          <input
            type="text"
            id="name"
            bind:value={name}
            required
            placeholder="Your Name"
          />
        </div>
  
        <div class="form-group">
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            placeholder="Your Email"
          />
        </div>
  
        <div class="form-group">
          <input
            type="text"
            id="subject"
            bind:value={subject}
            placeholder="Subject (optional)"
          />
        </div>
  
        <div class="form-group">
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <textarea
            id="message"
            bind:value={message}
            required
            placeholder="Your Message"
            rows="6"
          />
        </div>
  
        <button type="submit" class="cta-button">
          Open Email Draft
        </button>
      </form>
  
      {#if showSuccess}
        <div transition:slide class="success-message">
          ✓ Redirecting to your email client...
        </div>
      {/if}
  
      <div class="alternative-contact">
        <h2>Other Ways to Connect</h2>
        <div class="contact-options">
          <a href="https://linkedin.com/in/jamesmwangi-njenga-23694726" target="_blank" class="contact-card">
            <span class="icon">💼</span>
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
          </a>
          
          <a href="https://github.com/CamreshJames" target="_blank" class="contact-card">
            <span class="icon">👨💻</span>
            <h3>GitHub</h3>
            <p>View my code</p>
          </a>
          
          <a href="/JAMESMWANGICV.pdf" download class="contact-card">
            <span class="icon">📄</span>
            <h3>Download CV</h3>
            <p>Get my resume</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  
  <style>
    .hire-section {
      padding: 4rem 2rem;
      min-height: 100vh;
      background: linear-gradient(45deg, var(--royal-blue), var(--dark-bg));
    }
  
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
  
    h1 {
      text-align: center;
      color: var(--gold);
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
  
    .hire-form {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 3rem;
    }
  
    .form-group {
      margin-bottom: 1.5rem;
    }
  
    input, textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
  
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
    }
  
    .cta-button {
      background: var(--gold);
      color: var(--royal-blue);
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      transition: transform 0.3s ease;
    }
  
    .cta-button:hover {
      transform: translateY(-2px);
    }
  
    .success-message {
      background: #4CAF50;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      margin: 1rem 0;
    }
  
    .alternative-contact {
      text-align: center;
      margin-top: 3rem;
    }
  
    .contact-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  
    .contact-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 15px;
      transition: transform 0.3s ease;
      text-decoration: none;
      color: white;
    }
  
    .contact-card:hover {
      transform: translateY(-5px);
      background: rgba(212, 175, 55, 0.1);
    }
  
    .contact-card .icon {
      font-size: 2rem;
      display: block;
      margin-bottom: 1rem;
    }
  
    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
      
      .contact-options {
        grid-template-columns: 1fr;
      }
    }
  </style>