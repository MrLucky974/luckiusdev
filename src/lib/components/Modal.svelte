<!-- Modal.svelte -->
<script>
    export let data;
    export let text = "";
    export let visible = false;

    export function handleOpen() {
        visible = true;
    }

    export function handleClose() {
        visible = false;
    }
</script>

{#if visible}
    <div class="modal">
        <div class="modal-content">
        {#if data}
            <h1>{data.title}</h1>
            {@html data.content}
        {:else}
            <slot></slot>
        {/if}
        <br>
        <button on:click={handleClose}>Close</button>
        </div>
    </div>
{/if}

<button on:click={handleOpen} class="text-button">{text}</button>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .modal-content {
        background-color: #fff;
        padding: 20px;
        min-width: 400px;
        border-radius: 5px;
    }

    .text-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1em;
        text-decoration:underline double blue;
        font-family: 'Open Sans', sans-serif;
        padding: 0;
    }
</style>
