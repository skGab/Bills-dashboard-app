import type { Actions } from './$types';

export const actions = {
	createBill: async ({ request }) => {
		// GETTING  FORM DATA
		const formData = await request.formData();

		// CREATING THE PAYLOAD
		const billPayload = {
			name: formData.get('name'),
			value: formData.get('value'),
			date: formData.get('date')
		};

		// SENDIND DATA TO THE MANAGEMENT SERVICE
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify(billPayload),
			headers: {
				'content-type': 'application/json'
			}
		});

		const formResponse = await response.json();

		// RETURNING RESPONSE TO THE FORM
		return formResponse;
	}
} satisfies Actions;
   