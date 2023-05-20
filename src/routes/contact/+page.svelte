<title>LuckiusDev - Contact</title>

<h1><span><i class="fas fa-envelope"></i></span> Contact</h1>

<div class="centered">
    <!-- content goes here -->
    <div class="centered-content">
        <p class="mail">contact@luckius.fr</p>
        <p class="contact">
            <a class="social-button" id="linkedin" href="https://www.linkedin.com/in/bouillonjuan/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a> 
            • 
            <a class="social-button" id="twitter" href="https://twitter.com/luckiusdev"><i class="fa-brands fa-twitter"></i> Twitter</a>
        </p>
    </div>
</div>

<style>
    * {
        --linkedin-button-background-color-r: 0;
        --linkedin-button-background-color-g: 0;
        --linkedin-button-background-color-b: 255;

        --twitter-button-background-color-r: 64;
        --twitter-button-background-color-g: 120;
        --twitter-button-background-color-b: 192;
    }

    .mail {
        font-size: 3em;
        font-family: 'Sigmar', cursive;
    }

    .contact {
        font-family: 'Raleway', sans-serif;
        margin: 0;
    }

    #linkedin {
        background-color: rgb(
            calc(var(--linkedin-button-background-color-r) * var(--button-link-default-color-multiplier)), 
            calc(var(--linkedin-button-background-color-g) * var(--button-link-default-color-multiplier)), 
            calc(var(--linkedin-button-background-color-b) * var(--button-link-default-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--linkedin-button-background-color-r) * var(--button-link-hover-color-multiplier)), 
            calc(var(--linkedin-button-background-color-g) * var(--button-link-hover-color-multiplier)), 
            calc(var(--linkedin-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
    }

    #linkedin:hover {
        background-color: rgb(
            calc(var(--linkedin-button-background-color-r) * var(--button-link-hover-color-multiplier)),
            calc(var(--linkedin-button-background-color-g) * var(--button-link-hover-color-multiplier)),
            calc(var(--linkedin-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--linkedin-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--linkedin-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--linkedin-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #linkedin:active {
        background-color: rgb(
            calc(var(--linkedin-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--linkedin-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--linkedin-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #twitter {
        background-color: rgb(
            calc(var(--twitter-button-background-color-r) * var(--button-link-default-color-multiplier)), 
            calc(var(--twitter-button-background-color-g) * var(--button-link-default-color-multiplier)), 
            calc(var(--twitter-button-background-color-b) * var(--button-link-default-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--twitter-button-background-color-r) * var(--button-link-hover-color-multiplier)), 
            calc(var(--twitter-button-background-color-g) * var(--button-link-hover-color-multiplier)), 
            calc(var(--twitter-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
    }

    #twitter:hover {
        background-color: rgb(
            calc(var(--twitter-button-background-color-r) * var(--button-link-hover-color-multiplier)),
            calc(var(--twitter-button-background-color-g) * var(--button-link-hover-color-multiplier)),
            calc(var(--twitter-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--twitter-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--twitter-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--twitter-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #twitter:active {
        background-color: rgb(
            calc(var(--twitter-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--twitter-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--twitter-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }
</style>