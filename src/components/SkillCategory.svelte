<script>
    export let category;
</script>

<div class="skill-category">
    <h3>{category.category}</h3>
    <div class="skills-list">
        {#each category.items as skill}
            <div class="skill-item">
                <span class="skill-name">{skill.name}</span>
                <div class="progress-bar">
                    <!-- svelte-ignore element_invalid_self_closing_tag -->
                    <div class="progress" style="width: {skill.level}%;" />
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .skill-category {
        margin-bottom: 2rem;
    }
    
    .skill-item {
        margin: 1rem 0;
    }
    
    .progress-bar {
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
    }
    
    .progress {
        height: 100%;
        background: linear-gradient(90deg, var(--gold), var(--purple));
        transition: width 1s ease;
    }
    
    .skill-name {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--gold);
    }
</style>