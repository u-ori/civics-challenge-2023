<script>
    export let svg;
    export let name = "Defualt Name";
    export let shortName = "DN";
    let c = () => {
        console.log(name);
    }
</script>

<g on:click={c}>
    <svelte:component this={svg}/>
</g>

<style>
    g:hover {
        fill: #ffffff3f;
    }
    g {
        fill: #00000000;
        transition: fill .1s ease-in-out;
        cursor: pointer;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-family: 'Times New Roman', Times, serif;
        font-weight: bolder;
        text-anchor: middle;
        font-size: 10px;
        stroke-width: 0.8049624060150375;
    }
</style>