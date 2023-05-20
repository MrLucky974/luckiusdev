<script>
    import { onMount } from 'svelte';
    import { env } from '$lib/js/env'

    let videoId = "";

    let videos;

    async function getLatestVideo() {
        const apiKey = env.YOUTUBE_API_KEY;
        const channelId = env.YOUTUBE_CHANNEL_ID;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();

        videos = data.items;
        if (videos && videos.length > 0) {
            videoId = videos[0].id.videoId;
        }
    }

    //getLatestVideo();

    onMount(async () => {
        //await getLatestVideo();
    });
</script>

<title>LuckiusDev - Home</title>

<h1><span><i class="fas fa-home"></i></span> LuckiusDev</h1>

<div class="centered">
    <!-- content goes here -->
    <div class="centered-content">
        <div class="outline">
            <!--{#if videoId.length > 0}
                <iframe src={`https://www.youtube.com/embed/${videoId}`} title="Latest Video" frameborder="0" allowfullscreen></iframe>
            {/if}-->
            <iframe src='https://www.youtube.com/embed/VHAEuuPiu38' title="Latest Video" frameborder="0" allowfullscreen></iframe>
        </div>
        <h2>Latest video from my YouTube channel</h2>
        <p><a class="social-button" id="youtube" href="https://www.youtube.com/@LuckiusDev"><i class="fa-brands fa-youtube"></i> YouTube</a></p>
    </div>
</div>

<style>
    * {
        --youtube-button-background-color-r: 255;
        --youtube-button-background-color-g: 0;
        --youtube-button-background-color-b: 0;
    }

    .outline {
        background-color: black;
        border: 6px solid white;
        width: 640px;
        height: 360px
    }

    .outline iframe {
        width: 100%;
        height: 100%;
    }

    #youtube {
        background-color: rgb(
            calc(var(--youtube-button-background-color-r) * var(--button-link-default-color-multiplier)), 
            calc(var(--youtube-button-background-color-g) * var(--button-link-default-color-multiplier)), 
            calc(var(--youtube-button-background-color-b) * var(--button-link-default-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--youtube-button-background-color-r) * var(--button-link-hover-color-multiplier)), 
            calc(var(--youtube-button-background-color-g) * var(--button-link-hover-color-multiplier)), 
            calc(var(--youtube-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
    }

    #youtube:hover {
        background-color: rgb(
            calc(var(--youtube-button-background-color-r) * var(--button-link-hover-color-multiplier)),
            calc(var(--youtube-button-background-color-g) * var(--button-link-hover-color-multiplier)),
            calc(var(--youtube-button-background-color-b) * var(--button-link-hover-color-multiplier))
        );
        box-shadow: 0px 8px rgb(
            calc(var(--youtube-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--youtube-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--youtube-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }

    #youtube:active {
        background-color: rgb(
            calc(var(--youtube-button-background-color-r) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--youtube-button-background-color-g) * var(--button-link-pressed-color-multiplier)), 
            calc(var(--youtube-button-background-color-b) * var(--button-link-pressed-color-multiplier))
        );
    }
</style>