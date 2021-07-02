<script context="module">
    import { BehaviorSubject } from "rxjs";
    export const btnSubject = new BehaviorSubject(false);
</script>

<script>
    import { onMount } from "svelte";

    onMount(() => btnSubject.subscribe(changeState));

    const btnEnum = (() => {
        const start = "Start";
        const calculating = "Calculating...";
        return { start, calculating };
    })();

    $: isActive = false;
    $: innerBtn = btnEnum.start;

    function changeState(bool) {
        isActive = !!bool;
        innerBtn = isActive ? btnEnum.calculating : btnEnum.start;
    }
</script>

<style>
    .count_disable {
        --state-rgb: rgb(73, 115, 255);
        --state-rgba: rgba(73, 115, 255, 0.6);
    }
    .count_able {
        --state-rgb: rgb(255, 118, 117);
        --state-rgba: rgba(255, 118, 117, 0.6);
    }
    .wrapper {
        width: 100%;
        min-height: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wave-btn {
        border: none;
        width: 280px;
        height: 60px;
        display: flex;
        overflow: hidden;
        position: relative;
        transition: all 0.8s ease 0s;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 10px 10px;
        text-decoration: none;
        outline: none;
    }

    .wave-btn:hover {
        border-radius: 10px;
        transition: all 0.8s ease 0.2s;
        box-shadow: 0 0 40px var(--state-rgba);
    }
    .wave-btn:hover .wave-btn-waves {
        top: -50px;
    }

    .wave-btn-text {
        font-family: inherit;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 8px;
        position: relative;
        z-index: 1;
    }
    .wave-btn-waves {
        position: absolute;
        width: 280px;
        height: 280px;
        background-color: var(--state-rgb);
        top: 0;
        left: 0;
        box-shadow: inset 0 0 50px rgba(53, 53, 53, 0.5);
        transition: all 0.8s ease 0s;
    }

    .wave-btn-waves:after,
    .wave-btn-waves:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 250%;
        height: 250%;
        transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
    }

    .wave-btn-waves:before {
        background-color: rgb(53, 53, 53);
        border-radius: 48%;
        animation: waves 5s infinite linear;
    }
    .wave-btn-waves:after {
        background-color: rgba(53, 53, 53, 0.5);
        border-radius: 44%;
        animation: waves 10s infinite linear;
    }

    @keyframes waves {
        0% {
            transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
            -moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
            -ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
            -webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
            -o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
        }
        100% {
            transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
            -moz-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
            -ms-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
            -webkit-transform: translate3d(-50%, -96%, 0) rotate(360deg)
                scale(1);
            -o-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
        }
    }
</style>

<div class="wrapper">
    <button
        on:click={changeState}
        disabled={isActive}
        class="wave-btn {isActive ? 'count_able' : 'count_disable'}">
        <span class="wave-btn-text">{innerBtn}</span>
        <span class="wave-btn-waves" />
    </button>
</div>
