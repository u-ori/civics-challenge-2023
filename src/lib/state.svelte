<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let svg;
    export let name;
    export let shortName = "DN";
    let c = () => {
        dispatch('showDetails', {
			state: name
		});
    }
</script>

<g on:click={c}>
    <svelte:component this={svg}/>
</g>

<style>
    g:hover {
        fill: #ffffff2b;
        transform: translate(-1px, -1px);
        filter: drop-shadow(2px 2px 2px rgb(0 0 0));
    }
    g {
        fill: #00000000;
        transition: fill .1s ease-in-out, transform .1s ease-in-out, filter .1s ease-in-out;
        cursor: pointer;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-family: 'Times New Roman', Times, serif;
        font-weight: bolder;
        text-anchor: middle;
        font-size: 10px;
        stroke-width: 0.8049624060150375;
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / .8));
        user-select: none;
    }
</style>