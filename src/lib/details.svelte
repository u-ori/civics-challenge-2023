<script>
    import { fly } from 'svelte/transition';
    import stateDetails from './buildings.json'

    export let state;
    $: type = Object.values(stateDetails).includes(state.toLowerCase()) ? stateDetails[state.toLowerCase()].type : "NOT FOUND";
    let resource;
</script>

<div transition:fly={{ x: 300, duration: 500}} >
    <h1>{state}</h1>
    {type}
    {Object.values(stateDetails).includes(state.toLowerCase()) ? stateDetails[state.toLowerCase()].product : "NOT FOUND"}
</div>

<style>
    div {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        height: 100vh;
        width: 20rem;
        background-color: white;
    }
    h1 {
        background-color: antiquewhite;
        padding-left: 1rem;
    }
</style>