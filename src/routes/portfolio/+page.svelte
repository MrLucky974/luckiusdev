<title>LuckiusDev - Portfolio</title>

<h1><span><i class="fa-solid fa-suitcase"></i></span> Portfolio</h1>

<div class="centered">
    <!-- content goes here -->
    <div class="centered-content">
        <p class="header">My projects</p>
        <p class="links">
            <a class="social-button" id="itch" href="https://luckiusdev.itch.io/"><i class="fa-brands fa-itch-io"></i> itch.io</a> 
            • 
            <a class="social-button" id="github" href="https://github.com/MrLucky974?tab=repositories"><i class="fa-brands fa-github"></i> Github</a>
        </p>
    </div>
</div>

<style>
    * {
        --itch-button-background-color-r: 250;
        --itch-button-background-color-g: 92;
        --itch-button-background-color-b: 92;

        --github-button-background-color-r: 60;
        --github-button-background-color-g: 76;
        --github-button-background-color-b: 97;
    }

    .header {
        font-size: 3em;
        font-family: 'Sigmar', cursive;
    }

    .links {
        font-family: 'Raleway', sans-serif;
        margin: 0;
    }

    #itch {
        background-color: rgb(
            calc(var(--itch-button-background-color-r) * var(--button-link-default-color-multiplier)), 
            calc(var(--itch-button-background-color-g) * var(--button-link-default-color-multiplier)), 
            calc(var(--itch-button-background-color-b) * var(--button-link-default-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--itch-button-background-color-r) * var(--button-link-hover-color-multiplier)), 
            calc(var(--itch-button-background-color-g) * var(--button-link-hover-color-multiplier)), 
            calc(var(--itch-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
    }

    #itch:hover {
        background-color: rgb(
            calc(var(--itch-button-background-color-r) * var(--button-link-hover-color-multiplier)),
            calc(var(--itch-button-background-color-g) * var(--button-link-hover-color-multiplier)),
            calc(var(--itch-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--itch-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--itch-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--itch-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #itch:active {
        background-color: rgb(
            calc(var(--itch-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--itch-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--itch-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #github {
        background-color: rgb(
            calc(var(--github-button-background-color-r) * var(--button-link-default-color-multiplier)), 
            calc(var(--github-button-background-color-g) * var(--button-link-default-color-multiplier)), 
            calc(var(--github-button-background-color-b) * var(--button-link-default-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--github-button-background-color-r) * var(--button-link-hover-color-multiplier)), 
            calc(var(--github-button-background-color-g) * var(--button-link-hover-color-multiplier)), 
            calc(var(--github-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
    }

    #github:hover {
        background-color: rgb(
            calc(var(--github-button-background-color-r) * var(--button-link-hover-color-multiplier)),
            calc(var(--github-button-background-color-g) * var(--button-link-hover-color-multiplier)),
            calc(var(--github-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--github-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--github-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--github-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #github:active {
        background-color: rgb(
            calc(var(--github-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--github-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--github-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
        box-shadow: 0 0 black;
    }
</style>