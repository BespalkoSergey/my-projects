<script>
    import Worker, { workerSubject } from "./worker/Worker.svelte";
    import AssemblyScript, {
        aSSubject,
    } from "./asseblyScript/AssemblyScript.svelte";
    import Btn, { btnSubject } from "./btn/Btn.svelte";
    import { zip } from "rxjs";

    zip(workerSubject, aSSubject).subscribe((res) =>
        btnSubject.next(!!res[0] && !!res[1])
    );
</script>

<style>
    .row {
        display: flex;
    }
    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .basis-40 {
        flex-basis: 40%;
    }
    .basis-20 {
        flex-basis: 20%;
    }
</style>

<div class="row">
    <div class="col basis-40">
        <Worker />
    </div>
    <div class="col basis-20">
        <Btn />
    </div>
    <div class="col basis-40">
        <AssemblyScript />
    </div>
</div>
