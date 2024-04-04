<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	// FORM SUBMISSION RESPONSE
	// export let form: ActionData;
</script>

<!-- MAIN CONTENT -->
<div class="container">
	<div class="row pt-5">
		<!-- CREATE BILL FORM -->
		<div class="col-12">
			<form class="mx-auto" method="POST" use:enhance action="?/createBill">
				<h4 class="mb-4">Create Bill</h4>
				<!-- NAME -->
				<div class="mb-3">
					<label for="name" class="form-label">Name</label>
					<input type="text" class="form-control" id="name" name="name" />
				</div>
				<!-- VALUE -->
				<div class="mb-3">
					<label for="value" class="form-label">Value</label>
					<input type="text" class="form-control" id="value" name="value" />
				</div>
				<!-- PAYMENT DATE -->
				<div class="mb-5">
					<label for="value" class="form-label">Payment date</label>
					<input type="date" class="form-control" id="value" name="date" />
				</div>

				<button type="submit" class="btn text-dark fw-bold w-100">Create</button>
			</form>
		</div>
	</div>
</div>

<style lang="scss">
	form {
		max-width: 350px;
	}

	.btn {
		background-color: rgb(255, 145, 0);
		border: none;
	}

	.btn:hover {
		background-color: white;
	}
</style>
