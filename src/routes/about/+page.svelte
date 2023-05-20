<script>
    import CircleLink from '$lib/components/CircleLink.svelte';

    import logo from '$lib/assets/carré.png';
</script>

<title>LuckiusDev - About</title>

<h1><span><i class="fas fa-user"></i></span> About Me</h1>

<div class="centered">
    <!-- content goes here -->
    <div class="centered-content">
        <div class="outline">
            <h1>Juan Bouillon</h1>
            <h2>Luckius_</h2>
            <p>
                Hey! I'm Juan. I make video games since I'm 16 years old and play them since way younger than that. It started as a hobby, but
                quickly became my dream job : just making games for people that likes them WITH people that likes them.
                <br>
                <br>
                I'm studying I.T in college, while doing some personal projects I sometimes share on my socials. You can find some of my work
                on <a href="/portfolio">here</a>, and follow me on :
            </p>
            <div class="circle">
                <img src={logo} alt="Juan Bouillon"/>
            </div>
            <div class="footer">
                <CircleLink text="YouTube" link="https://www.youtube.com/@LuckiusDev">
                    <span class="circle-icon">
                        <i class='fa-brands fa-youtube'></i>
                    </span>
                </CircleLink>
                <CircleLink text="Instagram" link="https://www.instagram.com/luckiusdev/">
                    <span class="circle-icon">
                        <i class='fa-brands fa-instagram'></i>
                    </span>
                </CircleLink>
                <CircleLink text="Twitter" link="https://twitter.com/luckiusdev">
                    <span class="circle-icon">
                        <i class='fa-brands fa-twitter'></i>
                    </span>
                </CircleLink>
                <CircleLink text="Mastodon" link="https://mastodon.gamedev.place/@luckiusdev">
                    <span class="circle-icon">
                        <i class='fa-brands fa-mastodon'></i>
                    </span>
                </CircleLink>
                <CircleLink text="TikTok" link="https://www.tiktok.com/@luckiusdev_">
                    <span class="circle-icon">
                        <i class='fa-brands fa-tiktok'></i>
                    </span>
                </CircleLink>
                <CircleLink text="itch.io" link="https://luckiusdev.itch.io/">
                    <span class="circle-icon">
                        <i class='fa-brands fa-itch-io'></i>
                    </span>
                </CircleLink>
            </div>
        </div>
    </div>
</div>

<style>
    .outline {
        background-color: white;
        width: 640px;
        min-height: 360px;
        position: relative;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        border-radius: 5px; /* Add border-radius to round the corners */
        padding: 10px; /* Add padding */
        display: flex; /* Add display flex to center the content */
        flex-direction: column; /* Set flex direction to column */
        justify-content: center; /* Vertically center the content */
        align-items: center; /* Align content to the center */
        text-align: center; /* Center the text horizontally */
    }

    .outline > h1, h2, p {
        margin-bottom: 0;
    }

    .circle {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8); /* Add an inset shadow */
    }

    .circle img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .footer {
        z-index: 1;
        position: relative;
        bottom: 0;
        display: flex; /* Add display flex to make a row of elements */
        justify-content: center; /* Center elements horizontally */
        margin-top: 20px; /* Add a margin between the content and the footer */
    }

    /* Icons custom colors on hovering */
    .circle-link:hover > .circle-icon .fa-youtube {
        color: red;
    }

    .circle-link:hover > .circle-icon .fa-twitter {
        color: #1c9aef;
    }

    .circle-link:hover > .circle-icon .fa-instagram {
        /* Create a linear gradient background */
        background: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);

        /* Set the text color to transparent */
        color: transparent;

        /* Set the background-clip property to text */
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
    }

    .circle-link:hover > .circle-icon .fa-tiktok {
        /* Create a linear gradient background */
        background: linear-gradient(to right, #f72585, #b5179e, #7209b7, #560bad, #480ca8, #3a0ca3, #3f37c9, #4361ee, #4895ef, #4cc9f0);

        /* Set the text color to transparent */
        color: transparent;

        /* Set the background-clip property to text */
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
    }
    
    .circle-link:hover > .circle-icon .fa-itch-io {
        color: #fa5c5c;
    }

    .circle-link:hover > .circle-icon .fa-mastodon {
        color: #5b4be1;
    }
</style>