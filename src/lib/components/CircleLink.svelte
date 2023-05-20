<script>
    export let text = "YouTube";
    export let link = "https://www.youtube.com/@LuckiusDev";
</script>

<div class="circle-link-container">
    <a href={link} target="_blank" class="circle-link">
        <slot></slot>
    </a>
    <p class="circle-link-paragraph">{text}</p>
</div>

<style>
    .circle-link-container {
        position: relative;
    }

    .circle-link-paragraph {
        margin: 0;
        left: 0;
        right: 0;
        position: absolute;
        display: none;
        z-index: 1;
        text-align: center;
    }

    .circle-link:hover + .circle-link-paragraph {
        display: block;
    }
</style>

<!--<style>
    .circle-link {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #d6d6d6;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
        margin: 0 5px;
        overflow: hidden;
        text-decoration: none;
        transition: transform 0.3s ease, margin-top 0.3s ease; /* add transition for scale and margin-top */
    }

    .circle-link:hover {
        transform: scale(1.2); /* make it bigger on hover */
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
        margin-top: -5px; /* move it up by 5px on hover */
    }
</style>-->
