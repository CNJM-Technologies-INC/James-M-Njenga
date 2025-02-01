<script>
    import { fly, slide, scale } from 'svelte/transition';
    import Header from '../../components/Header.svelte';
    import Footer from '../../components/Footer.svelte';
  
    let name = '';
    let email = '';
    let message = '';
    
    
    // Form submission handler
    function handleSubmit() {
      // Add your form submission logic here
      alert('Message sent successfully!');
    }
  </script>
  
  <Header />
  <section class="contact-section" in:fly={{ y: 100, duration: 800 }}>
    <div class="contact-container">
      <h1 class="contact-title" in:slide={{ delay: 200 }}>Let's Connect</h1>
      
      <div class="contact-grid">
        <!-- Contact Information -->
        <div class="contact-info" in:slide={{ direction: 'right', delay: 400 }}>
          <div class="info-card" transition:scale>
            <div class="icon">📧</div>
            <h3>Email Me</h3>
            <p>camreshjames@gmail.com</p>
          </div>
          
          <div class="info-card" transition:scale={{ delay: 200 }}>
            <div class="icon">📱</div>
            <h3>Call Me</h3>
            <p>+254 741 593 506</p>
          </div>
          
          <div class="info-card" transition:scale={{ delay: 400 }}>
            <div class="icon">📍</div>
            <h3>Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
  
        <!-- Contact Form -->
        <form class="contact-form" on:submit|preventDefault={handleSubmit} in:slide={{ direction: 'left', delay: 600 }}>
          <div class="form-group" transition:fly={{ y: 20 }}>
            <input
              type="text"
              id="name"
              bind:value={name}
              required
              placeholder=" "
            />
            <label for="name">Your Name</label>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="underline" />
          </div>
  
          <div class="form-group" transition:fly={{ y: 20, delay: 100 }}>
            <input
              type="email"
              id="email"
              bind:value={email}
              required
              placeholder=" "
            />
            <label for="email">Your Email</label>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="underline" />
          </div>
  
          <div class="form-group" transition:fly={{ y: 20, delay: 200 }}>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <textarea
              id="message"
              bind:value={message}
              required
              placeholder=" "
            />
            <label for="message">Your Message</label>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="underline" />
          </div>
  
          <button type="submit" class="submit-btn" transition:scale={{ delay: 300 }}>
            Send Message
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="hover-effect" />
          </button>
        </form>
      </div>
  
      <!-- Social Media Links -->
      <div class="social-links" in:fly={{ y: 50, delay: 800 }}>
        <a href="https://github.com/CamreshJ" target="_blank" class="social-icon">
          <span class="icon">🐙</span>
          GitHub
        </a>
        <a href="https://linkedin.com/in/jamesmwangi-njenga-23694726" target="_blank" class="social-icon">
          <span class="icon">💼</span>
          LinkedIn
        </a>
        <a href="mailto:camreshjames@gmail.com" class="social-icon">
          <span class="icon">📨</span>
          Email
        </a>
      </div>
  
      <!-- Map Integration -->
      <div class="map-container" in:fly={{ y: 50, delay: 1000 }}>
        <!-- svelte-ignore a11y_missing_attribute -->
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.691665940342!2d36.8214533159327!3d-1.286466535975267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d71cd68913%3A0x4b1cda452737e8f2!2sNairobi!5e0!3m2!1sen!2ske!4v1622022345678!5m2!1sen!2ske"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
  <Footer />
  
  <style lang="postcss">
    .contact-section {
      padding: 4rem 2rem;
      background: linear-gradient(45deg, var(--royal-blue), var(--dark-bg));
      min-height: 100vh;
    }
  
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .contact-title {
      font-size: 3rem;
      text-align: center;
      color: var(--gold);
      margin-bottom: 4rem;
      position: relative;
      font-family: 'Playfair Display', serif;
    }
  
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 4rem;
  
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  
    .contact-info {
      display: grid;
      gap: 2rem;
    }
  
    .info-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      transition: transform 0.3s ease;
      border: 1px solid rgba(212, 175, 55, 0.2);
  
      &:hover {
        transform: translateY(-5px);
      }
  
      .icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        display: block;
      }
  
      h3 {
        color: var(--gold);
        margin-bottom: 0.5rem;
      }
  
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  
    .contact-form {
      .form-group {
        margin-bottom: 2rem;
        position: relative;
  
        input, textarea {
          width: 100%;
          padding: 1rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
  
          &:focus {
            outline: none;
            border-color: var(--gold);
          }
  
          &:placeholder-shown + label {
            transform: translateY(0);
            opacity: 0.5;
          }
  
          &:not(:placeholder-shown) + label,
          &:focus + label {
            transform: translateY(-1.5rem);
            font-size: 0.8rem;
            opacity: 1;
            color: var(--gold);
          }
        }
  
        textarea {
          height: 150px;
          resize: vertical;
        }
  
        label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          pointer-events: none;
          transition: all 0.3s ease;
          color: white;
        }
  
        .underline {
          height: 2px;
          background: var(--gold);
          width: 0;
          transition: width 0.3s ease;
          position: absolute;
          bottom: 0;
        }
  
        input:focus ~ .underline,
        textarea:focus ~ .underline {
          width: 100%;
        }
      }
    }
  
    .submit-btn {
      background: var(--gold);
      color: var(--royal-blue);
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
  
      .hover-effect {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: left 0.6s;
      }
  
      &:hover {
        transform: translateY(-3px);
  
        .hover-effect {
          left: 100%;
        }
      }
    }
  
    .social-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
  
      .social-icon {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        transition: all 0.3s ease;
  
        &:hover {
          color: var(--gold);
          transform: translateY(-3px);
          background: rgba(212, 175, 55, 0.1);
        }
  
        .icon {
          font-size: 1.5rem;
        }
      }
    }
  
    .map-container {
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      opacity: 0.9;
      transition: all 0.3s ease;
  
      &:hover {
        opacity: 1;
        transform: translateY(-5px);
      }
    }
  
    @media (max-width: 768px) {
      .contact-title {
        font-size: 2rem;
      }
  
      .contact-form {
        .form-group {
          margin-bottom: 1.5rem;
        }
      }
  
      .social-links {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>