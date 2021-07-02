<script>
    let progressBarWidth = 0;
    let progressBarState = false;
    $: isActive = progressBarState;
    $: width = progressBarWidth;

    const time = setTimeout(() => {
        const intr = setInterval(() => {
            if (!progressBarState) progressBarState = true;
            progressBarWidth += 0.1;
            console.log(progressBarWidth);
            if (progressBarWidth >= 100) {
                clearInterval(intr);
                progressBarState = false;
            }
        }, 10);
    }, 5000);
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
        padding-left: 20%;
        padding-right: 20%;
    }
    .chart {
        width: 100%;
        font-size: 1em;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-backface-visibility: visible;
        backface-visibility: visible;
    }
    .bar {
        font-size: 1em;
        position: relative;
        height: 10em;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        -webkit-transform: rotateX(60deg) rotateY(0deg);
        transform: rotateX(60deg) rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .bar .top {
        -webkit-transform: rotateX(0deg) rotateY(0) translateX(0em)
            translateY(4em) translateZ(2em);
        transform: rotateX(0deg) rotateY(0) translateX(0em) translateY(4em)
            translateZ(2em);
    }
    .bar .face {
        font-size: 2em;
        position: relative;
        width: 100%;
        height: 2em;
        background-color: rgba(254, 254, 254, 0.18);
    }
    .bar.white .side-a,
    .bar.white .growing-bar {
        background-color: var(--state-rgba);
    }
    .growing-bar {
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: rgba(236, 0, 140, 0.6);
        width: 100%;
        height: 2em;
    }
    .bar .side-0 {
        -webkit-transform: rotateX(90deg) rotateY(0) translateX(0)
            translateY(1em) translateZ(-1em);
        transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em)
            translateZ(-1em);
    }
    .bar .floor {
        -webkit-box-shadow: 0 0.1em 0.6em rgba(0, 0, 0, 0.3),
            0.6em -0.5em 3em rgba(0, 0, 0, 0.3), 1em -1em 8em var(--state-rgb);
        box-shadow: 0 0.1em 0.6em rgba(0, 0, 0, 0.3),
            0.6em -0.5em 3em rgba(0, 0, 0, 0.3), 1em -1em 8em var(--state-rgb);
    }
    .bar .side-a {
        -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(2em)
            translateY(1em) translateZ(1em);
        transform: rotateX(90deg) rotateY(-90deg) translateX(2em)
            translateY(1em) translateZ(1em);
    }
    .bar .face.side-a,
    .bar .face.side-b {
        width: 2em;
    }
    .bar .side-b {
        -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(4em)
            translateY(1em) translateZ(-1em);
        transform: rotateX(90deg) rotateY(-90deg) translateX(4em)
            translateY(1em) translateZ(-1em);
        position: absolute;
        right: 0;
    }
    .face.side-b {
        width: 2em;
    }
    .bar .side-1 {
        -webkit-transform: rotateX(90deg) rotateY(0) translateX(0)
            translateY(1em) translateZ(3em);
        transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em)
            translateZ(3em);
    }
</style>

<div class="wrapper {isActive ? 'count_able' : 'count_disable'}">
    <div class="chart">
        <div class="bar white">
            <div class="face top">
                <div class="growing-bar" style="width: {width}%;" />
            </div>
            <div class="face side-0">
                <div class="growing-bar" style="width: {width}%;" />
            </div>
            <div class="face floor">
                <div class="growing-bar" style="width: {width}%;" />
            </div>
            <div class="face side-a" />
            <div class="face side-b" />
            <div class="face side-1">
                <div class="growing-bar" style="width: {width}%;" />
            </div>
        </div>
    </div>
</div>
