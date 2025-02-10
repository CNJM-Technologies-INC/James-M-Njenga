<!-- Header.svelte -->
<script>
    import { slide } from 'svelte/transition';
    
    let isMenuOpen = false;
    const toggleMenu = () => isMenuOpen = !isMenuOpen;
</script>

<nav class="header">
    <div class="header-content">
        <!-- Logo -->
        <a href="/" class="logo-link">
            <img 
                src="/favicon.png" 
                alt="JM Logo" 
                class="logo"
            />
            <span class="logo-text">James M. Njenga</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links">
            <a href="/" class="nav-item">Home</a>
            <a href="#projects" class="nav-item">Projects</a>
            <a href="#skills" class="nav-item">Skills</a>
            <a href="#experience" class="nav-item">Experience</a>
            <a href="/contacts" class="nav-item">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
            class="menu-toggle" 
            on:click={toggleMenu}
            aria-label="Toggle navigation menu"
        >
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="hamburger" class:open={isMenuOpen} />
        </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
        <div class="mobile-nav" transition:slide>
            <a href="/" class="nav-item">Home</a>
            <a href="/#projects" class="nav-item">Projects</a>
            <a href="/#skills" class="nav-item">Skills</a>
            <a href="/#experience" class="nav-item">Experience</a>
            <a href="/contacts" class="nav-item">Contact</a>
        </div>
    {/if}
</nav>

<style>
    .header {
        background: var(--royal-blue);
        padding: 1rem 2rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    .header-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
    }

    .logo {
        height: 40px;
        width: auto;
        transition: transform 0.3s ease;
    }

    .logo:hover {
        transform: rotate(-15deg);
    }

    .logo-text {
        color: var(--gold);
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .nav-item {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        transition: all 0.3s ease;
        position: relative;
    }

    .nav-item:hover {
        color: var(--gold);
        background: rgba(255,255,255,0.1);
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .hamburger {
        width: 30px;
        height: 2px;
        background: white;
        position: relative;
        transition: all 0.3s ease;
    }

    .hamburger::before,
    .hamburger::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: white;
        transition: all 0.3s ease;
    }

    .hamburger::before {
        top: -8px;
    }

    .hamburger::after {
        top: 8px;
    }

    .hamburger.open {
        background: transparent;
    }

    .hamburger.open::before {
        transform: rotate(45deg);
        top: 0;
    }

    .hamburger.open::after {
        transform: rotate(-45deg);
        top: 0;
    }

    .mobile-nav {
        display: none;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background: var(--royal-blue);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }

        .menu-toggle {
            display: block;
        }

        .mobile-nav {
            display: flex;
        }

        .logo-text {
            font-size: 1.2rem;
        }

        .logo {
            height: 35px;
        }
    }

    @media (max-width: 480px) {
        .header {
            padding: 1rem;
        }

        .logo-text {
            display: none;
        }
    }
</style>