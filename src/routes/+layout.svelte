<!-- HEAD -->
<svelte:head>
	<!-- BOOTSTRAP -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
		crossorigin="anonymous"
	/>
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
		crossorigin="anonymous"
	></script>
</svelte:head>

<!-- MAIN CONTENT -->
<main>
	<slot />
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
		background-color: rgb(54, 54, 54) !important;
		color: aliceblue;
	}
</style>
