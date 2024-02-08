import { sendMail } from "$lib/server/gmail/gmail";
import { invalid } from '@sveltejs/kit';

export const actions = {
	default: async (event: any) => {
		const data = await event.request.formData();
		const companyName = data.get('companyName');
		const email = data.get('email');
		const message = data.get('message');
		const messageId = await sendMail({
			remoteAddress: event.getClientAddress(),
			to: 'contato@rogueunit.gg',
			cc: `${email}`,
			subject: `Rogue Unit | Contato — ${companyName}`,
			html: `
					<h1>Contato Rogue Unit</h1>
					<p>Mensagem: ${message}</p>
					<br>
					<hr/>
					<p>Empresa: ${companyName}</p>
					<p>Email: ${email}</p>
				`,
			text: `
					Contato Rogue Unit
					Mensagem: ${message}
					Empresa: ${companyName}
					Email: ${email}
				`,
			attachments: [],
			replyTo: email
		});
		if (messageId) return { success: true };
		return invalid(400, { success: false, error: 'Você já enviou seu contato recentemente. Por favor, tente novamente mais tarde.' });
	}
};