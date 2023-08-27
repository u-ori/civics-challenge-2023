<script>
    import Map from "./lib/map.svelte";
    import Details from "./lib/details.svelte";

    let showing = false;
    let state;
    let d = (e) => {
        if (state == e.detail.state && showing) {
            showing = false
        } else {
            showing = true;
        }
        state = e.detail.state;
    }
</script>

<Map on:showDetails={d}/>
{#if showing}
    <Details {state} />
{/if}