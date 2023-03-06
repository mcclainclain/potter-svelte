<script lang="ts">
	export let spell;

  function printSomething() {
    console.log("HEllo");
  }
</script>

<div class="card card-glass-surface h-auto w-auto m-4 p-4 text-center" >
  <br>
  <h1 class="font-bold">{spell.name}</h1>
  <br>
  <h5>{spell.description}</h5>
</div>
