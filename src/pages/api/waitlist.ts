import type { APIRoute } from "astro";

// Waitlist capture (brief §7.5). Stores entries in the WAITLIST KV namespace.
// Setup (one time): `npx wrangler kv namespace create WAITLIST`, then add the
// returned id under "kv_namespaces" in wrangler.json. Until then this returns
// 503 and the page falls back to a mailto link, so nothing is silently lost.
export const prerender = false;

type KV = {
	put(key: string, value: string): Promise<void>;
};

export const POST: APIRoute = async ({ request, locals }) => {
	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: "bad_json" }, 400);
	}

	// Honeypot: real people never fill the hidden "company" field.
	if (typeof body.company === "string" && body.company.trim() !== "") {
		return json({ ok: true });
	}

	const email = String(body.email ?? "").trim().toLowerCase();
	const zip = String(body.zip ?? "").trim();
	const ref = String(body.ref ?? "").slice(0, 200);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
		return json({ ok: false, error: "invalid_email" }, 400);
	}
	if (!/^\d{5}$/.test(zip)) {
		return json({ ok: false, error: "invalid_zip" }, 400);
	}

	const env = (locals.runtime?.env ?? {}) as { WAITLIST?: KV };
	if (!env.WAITLIST) {
		return json({ ok: false, error: "storage_not_configured" }, 503);
	}

	const record = { email, zip, ref, ts: new Date().toISOString() };
	await env.WAITLIST.put(`zip:${zip}:${email}`, JSON.stringify(record));
	return json({ ok: true });
};

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "content-type": "application/json" },
	});
}
