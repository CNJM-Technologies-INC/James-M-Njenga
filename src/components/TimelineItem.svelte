<script>
    export let experience;
</script>

<div class="timeline-item">
    <div class="timeline-content">
        <h3>{experience.title}</h3>
        <p class="company">{experience.company}</p>
        <p class="duration">{experience.duration}</p>
        <ul class="achievements">
            {#each experience.achievements as achievement}
                <li>{achievement}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .timeline-item {
        position: relative;
        padding: 2rem;
        margin: 2rem 0;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border-left: 3px solid var(--gold);
    }
    
    .company {
        color: var(--gold);
        font-weight: 600;
    }
    
    .duration {
        color: var(--purple);
        font-size: 0.9rem;
    }
    
    .achievements {
        padding-left: 1.5rem;
    }
    
    .achievements li {
        margin: 0.5rem 0;
    }
</style>