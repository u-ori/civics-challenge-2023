<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import USA from "../assets/usa.svelte"; 
    import Paper from "../assets/paper.jpg"
    let scale = .75,
        panning = false,
        x = 0,
        y = -100,
        start = { x: 0, y: 0 }

    let md = (e) => {
        e.preventDefault();
        start = { x: e.clientX - x, y: e.clientY - y };
        panning = true;
    }
    let mu = (_e) => {
        panning = false;
    }
    let mm = (e) => {
        e.preventDefault();
        if (!panning) {
            return;
        }
        x = (e.clientX - start.x);
        y = (e.clientY - start.y);
    }
    let w = (e) => {
        e.preventDefault();
        var xs = (e.clientX - x) / scale,
            ys = (e.clientY - y) / scale,
            delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        // (delta > 0) ? (scale *= 1.1) : (scale /= 1.1);
        if (delta > 0) {
            if (scale < 3) {
                scale *= 1.2;
            }
        } else {
            if (scale > .75) {
                scale /= 1.2;
            }
        }
        x = e.clientX - xs * scale;
        y = e.clientY - ys * scale;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    style="transform: translate({x}px, {y}px) scale({scale});"
    on:mousedown={md}
    on:mouseup={mu}
    on:mousemove={mm}
    on:wheel={w}
>
    <svelte:component this={USA}/>
</div>

<style>
    div {
        width: 100%;
        transform-origin: 0px 0px;
        background-image: url("../assets/paper.jpg");
        background-size: cover;
    }
</style>