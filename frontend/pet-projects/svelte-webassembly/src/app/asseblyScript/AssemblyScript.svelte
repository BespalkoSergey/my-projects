<script context="module">
    import { BehaviorSubject } from "rxjs";
    export const aSSubject = new BehaviorSubject(false);
</script>

<script>
    import Timer from "./../timer/Timer.svelte";
    import ProgressBar from "./../progressBar/ProgressBar.svelte";
</script>

<Timer />

<ProgressBar />

<h1>AS works!</h1>
