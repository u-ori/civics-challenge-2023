<script>
    // import { tweened } from 'svelte/motion';
    // import { cubicOut } from 'svelte/easing';
    // import USA from "../assets/usa.svelte"; 
    // import Paper from "../assets/paper.jpg";
    import State from './state.svelte';

    import AK from "../assets/states/AK.svelte";
    import AL from "../assets/states/AL.svelte";
    import AR from '../assets/states/AR.svelte';
    import AZ from '../assets/states/AZ.svelte';
    import CA from '../assets/states/CA.svelte';
    import CO from '../assets/states/CO.svelte';
    import CT from '../assets/states/CT.svelte';
    import DC from '../assets/states/DC.svelte';
    import DE from '../assets/states/DE.svelte';
    import FL from '../assets/states/FL.svelte';
    import GA from '../assets/states/GA.svelte';
    import HI from '../assets/states/HI.svelte';
    import IA from '../assets/states/IA.svelte';
    import ID from '../assets/states/ID.svelte';
    import IL from '../assets/states/IL.svelte';
    import IN from '../assets/states/IN.svelte';
    import KS from '../assets/states/KS.svelte';
    import KY from '../assets/states/KY.svelte';
    import LA from '../assets/states/LA.svelte';
    import MA from '../assets/states/MA.svelte';
    import MD from '../assets/states/MD.svelte';
    import ME from '../assets/states/ME.svelte';
    import MI from '../assets/states/MI.svelte';
    import MN from '../assets/states/MN.svelte';
    import MO from '../assets/states/MO.svelte';
    import MS from '../assets/states/MS.svelte';
    import MT from '../assets/states/MT.svelte';
    import NC from '../assets/states/NC.svelte';
    import ND from '../assets/states/ND.svelte';
    import NE from '../assets/states/NE.svelte';
    import NH from '../assets/states/NH.svelte';
    import NJ from '../assets/states/NJ.svelte';
    import NM from '../assets/states/NM.svelte';
    import NV from '../assets/states/NV.svelte';
    import NY from '../assets/states/NY.svelte';
    import OH from '../assets/states/OH.svelte';
    import OK from '../assets/states/OK.svelte';
    import OR from '../assets/states/OR.svelte';
    import PA from '../assets/states/PA.svelte';
    import RI from '../assets/states/RI.svelte';
    import SC from '../assets/states/SC.svelte';
    import SD from '../assets/states/SD.svelte';
    import TN from '../assets/states/TN.svelte';
    import TX from '../assets/states/TX.svelte';
    import UT from '../assets/states/UT.svelte';
    import VA from '../assets/states/VA.svelte';
    import VT from '../assets/states/VT.svelte';
    import WA from '../assets/states/WA.svelte';
    import WI from '../assets/states/WI.svelte';
    import WV from '../assets/states/WV.svelte';
    import WY from '../assets/states/WY.svelte';

    let scale = .75,
        panning = false,
        x = 0,
        y = -100,
        start = { x: 0, y: 0 }

    let md = (e) => {
        // e.preventDefault();
        start = { x: e.clientX - x, y: e.clientY - y };
        panning = true;
    }
    let mu = (_e) => {
        panning = false;
    }
    let mm = (e) => {
        // e.preventDefault();
        if (!panning) {
            return;
        }
        x = (e.clientX - start.x);
        y = (e.clientY - start.y);
    }
    let w = (e) => {
        // e.preventDefault();
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
    on:wheel={w}>
    <svg viewBox="0 0 675 460" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative; left: -0.5px;" transform="matrix(1.2547,0,0,1.2547,-0.3196,-0.3196)">
        <State svg={AK} name="Alaska"></State>
        <State svg={AL} name="Alabama"></State>
        <State svg={AR} name="Arkansas"></State>
        <State svg={AZ} name="Arizona"></State>
        <State svg={CA} name="California"></State>
        <State svg={CO} name="Colorado"></State>
        <State svg={CT} name="Connecticut"></State>
        <State svg={DC} name="District of Columbia"></State>
        <State svg={DE} name="Delaware"></State>
        <State svg={FL} name="Florida"></State>
        <State svg={GA} name="Georgia"></State>
        <State svg={HI} name="Hawaii"></State>
        <State svg={IA} name="Iowa"></State>
        <State svg={ID} name="Idaho"></State>
        <State svg={IL} name="Illinois"></State>
        <State svg={IN} name="Indiana"></State>
        <State svg={KS} name="Kansas"></State>
        <State svg={KY} name="Kentucky"></State>
        <State svg={LA} name="Louisiana"></State>
        <State svg={MA} name="Massachusetts"></State>
        <State svg={MD} name="Maryland"></State>
        <State svg={ME} name="Maine"></State>
        <State svg={MI} name="Michigan"></State>
        <State svg={MN} name="Minnesota"></State>
        <State svg={MO} name="Missouri"></State>
        <State svg={MS} name="Mississippi"></State>
        <State svg={MT} name="Montana"></State>
        <State svg={NC} name="North Carolina"></State>
        <State svg={ND} name="North Dakota"></State>
        <State svg={NE} name="Nebraska"></State>
        <State svg={NH} name="New Hampshire"></State>
        <State svg={NJ} name="New Jersey"></State>
        <State svg={NM} name="New Mexico"></State>
        <State svg={NV} name="Nevada"></State>
        <State svg={NY} name="New York"></State>
        <State svg={OH} name="Ohio"></State>
        <State svg={OK} name="Oklahoma"></State>
        <State svg={OR} name="Oregon"></State>
        <State svg={PA} name="Pennsylvania"></State>
        <State svg={RI} name="Rhode Island"></State>
        <State svg={SC} name="South Carolina"></State>
        <State svg={SD} name="South Dakota"></State>
        <State svg={TN} name="Tennessee"></State>
        <State svg={TX} name="Texas"></State>
        <State svg={UT} name="Utah"></State>
        <State svg={VA} name="Virginia"></State>
        <State svg={VT} name="Vermont"></State>
        <State svg={WA} name="Washington"></State>
        <State svg={WI} name="Wisconsin"></State>
        <State svg={WV} name="West Virginia"></State>
        <State svg={WY} name="Wyoming"></State>
    </svg>
</div>

<style>
    div {
        width: 100%;
        transform-origin: 0px 0px;
        background-image: url("../assets/paper.jpg");
        background-size: cover;
    }
</style>