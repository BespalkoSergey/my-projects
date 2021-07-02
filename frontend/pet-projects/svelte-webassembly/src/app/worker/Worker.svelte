<script context="module">
    import { BehaviorSubject } from "rxjs";
    export const workerSubject = new BehaviorSubject(false);
</script>

<script>
    import Timer from "./../timer/Timer.svelte";
    import ProgressBar from "./../progressBar/ProgressBar.svelte";
</script>

<Timer />

<ProgressBar />

<h1>Worker works!</h1>
