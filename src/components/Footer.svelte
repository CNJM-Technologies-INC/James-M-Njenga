<!-- Footer.svelte -->
<script>
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="footer">
    <div class="social-links">
      <a 
        href="https://github.com/CamreshJames" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-icon"
      >GitHub</a>
      <a 
        href="https://linkedin.com/in/jamesmwangi-njenga-23694726" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-icon"
      >LinkedIn</a>
      <a 
        href="mailto:camreshjames@gmail.com" 
        class="social-icon"
      >Email</a>
    </div>
    <p class="copyright">© {currentYear} James Mwangi. All rights reserved.</p>
  </footer>
  
  <style>
    .footer {
      background: var(--royal-blue);
      padding: 2rem;
      text-align: center;
      margin-top: auto;
    }
  
    .social-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 1rem;
    }
  
    .social-icon {
      color: var(--gold);
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: 1px solid transparent;
    }
  
    .social-icon:hover {
      color: white;
      transform: translateY(-2px);
      border-color: var(--gold);
    }
  
    .copyright {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
  
    @media (max-width: 480px) {
      .social-links {
        flex-direction: column;
        gap: 1rem;
      }
  
      .footer {
        padding: 1.5rem;
      }
    }
  </style>