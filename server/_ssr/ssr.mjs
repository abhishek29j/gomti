import { o as __toESM } from "../_runtime.mjs";
import { t as require_main } from "../_libs/dotenv.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import { dirname, resolve } from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_main = /* @__PURE__ */ __toESM(require_main());
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
import_main.default.config();
var LEADS_STORAGE_PATH = resolve(process.cwd(), "data", "leads.json");
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CriIeMOs.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
async function persistLead(payload) {
	try {
		await mkdir(dirname(LEADS_STORAGE_PATH), { recursive: true });
		let existing = [];
		try {
			const existingText = await readFile(LEADS_STORAGE_PATH, "utf8");
			existing = JSON.parse(existingText);
		} catch {
			existing = [];
		}
		existing.push({
			...payload,
			submittedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		await writeFile(LEADS_STORAGE_PATH, JSON.stringify(existing, null, 2), "utf8");
	} catch (error) {
		console.error("Failed to persist lead locally", error);
	}
}
async function parseLeadPayload(request) {
	try {
		const contentType = request.headers.get("content-type") ?? "";
		if (contentType.includes("application/json")) {
			const rawBody = await request.text();
			if (!rawBody?.trim()) return {};
			return JSON.parse(rawBody);
		}
		if (contentType.includes("multipart/form-data")) {
			const formData = await request.formData();
			return {
				name: formData.get("name")?.toString().trim() || void 0,
				phone: formData.get("phone")?.toString().trim() || void 0,
				email: formData.get("email")?.toString().trim() || void 0,
				date: formData.get("date")?.toString().trim() || void 0,
				message: formData.get("message")?.toString().trim() || void 0
			};
		}
		const rawBody = await request.text();
		if (!rawBody?.trim()) return {};
		try {
			return JSON.parse(rawBody);
		} catch {
			const params = new URLSearchParams(rawBody);
			return {
				name: params.get("name") ?? void 0,
				phone: params.get("phone") ?? void 0,
				email: params.get("email") ?? void 0,
				date: params.get("date") ?? void 0,
				message: params.get("message") ?? void 0
			};
		}
	} catch {
		return {};
	}
}
function getRuntimeEnvValue(name, runtimeEnv) {
	if (runtimeEnv && typeof runtimeEnv === "object") {
		const value = runtimeEnv[name];
		if (typeof value === "string" && value.trim()) return value.trim();
	}
	return process.env[name]?.trim();
}
async function sendLeadViaResend(details, apiKey, fromAddress, targetEmail) {
	await new Resend(apiKey).emails.send({
		from: fromAddress,
		to: [targetEmail],
		subject: "New Site Visit Request - Gomti Homes",
		text: details
	});
}
async function sendLeadViaSendGrid(details, apiKey, fromAddress, targetEmail) {
	const body = {
		personalizations: [{
			to: [{ email: targetEmail }],
			subject: "New Site Visit Request - Gomti Homes"
		}],
		from: { email: fromAddress },
		content: [{
			type: "text/plain",
			value: details
		}]
	};
	const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${apiKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
	if (!response.ok) throw new Error(`SendGrid email delivery failed: ${response.status} ${await response.text()}`);
}
async function sendLeadViaSmtp(details, smtpConfig, fromAddress, targetEmail) {
	await import_nodemailer.default.createTransport({
		host: smtpConfig.host,
		port: smtpConfig.port,
		secure: smtpConfig.secure,
		auth: {
			user: smtpConfig.user,
			pass: smtpConfig.pass
		}
	}).sendMail({
		from: fromAddress,
		to: targetEmail,
		subject: "New Site Visit Request - Gomti Homes",
		text: details
	});
}
async function handleLeadSubmission(request, runtimeEnv) {
	try {
		const payload = await parseLeadPayload(request);
		const details = [
			`Name: ${payload.name?.trim() || "Not provided"}`,
			`Phone: ${payload.phone?.trim() || "Not provided"}`,
			`Email: ${payload.email?.trim() || "Not provided"}`,
			`Preferred Visit Date: ${payload.date?.trim() || "Not provided"}`,
			`Message: ${payload.message?.trim() || "No additional message provided"}`
		].join("\n");
		const smtpHost = getRuntimeEnvValue("SMTP_HOST", runtimeEnv);
		const smtpPortValue = getRuntimeEnvValue("SMTP_PORT", runtimeEnv);
		const smtpUser = getRuntimeEnvValue("SMTP_USER", runtimeEnv);
		const smtpPass = getRuntimeEnvValue("SMTP_PASS", runtimeEnv);
		const smtpSecureValue = getRuntimeEnvValue("SMTP_SECURE", runtimeEnv);
		const resendApiKey = getRuntimeEnvValue("RESEND_API_KEY", runtimeEnv);
		const resendFrom = getRuntimeEnvValue("RESEND_FROM", runtimeEnv);
		const sendGridApiKey = getRuntimeEnvValue("SENDGRID_API_KEY", runtimeEnv);
		const sendGridFrom = getRuntimeEnvValue("SENDGRID_FROM", runtimeEnv);
		const targetEmail = getRuntimeEnvValue("LEAD_EMAIL_TO", runtimeEnv) || "abhishek9621444444@gmail.com";
		const fromAddress = getRuntimeEnvValue("SMTP_FROM", runtimeEnv) || sendGridFrom || resendFrom || "onboarding@resend.dev";
		const smtpPort = smtpPortValue ? Number(smtpPortValue) : void 0;
		const smtpSecure = smtpSecureValue === "true";
		const smtpConfigured = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);
		const resendConfigured = Boolean(resendApiKey && resendFrom);
		const sendGridConfigured = Boolean(sendGridApiKey && sendGridFrom);
		console.log("Lead submission runtime env", {
			hasSmtp: smtpConfigured,
			hasResend: resendConfigured,
			hasSendGrid: sendGridConfigured,
			targetEmail,
			fromAddress
		});
		let smtpSuccess = false;
		let resendSuccess = false;
		let sendGridSuccess = false;
		const methods = [];
		const attemptedMethods = [];
		if (smtpConfigured) {
			attemptedMethods.push("smtp");
			try {
				await sendLeadViaSmtp(details, {
					host: smtpHost,
					port: smtpPort,
					secure: smtpSecure,
					user: smtpUser,
					pass: smtpPass
				}, fromAddress, targetEmail);
				smtpSuccess = true;
				methods.push("smtp");
			} catch (error) {
				console.error("Lead email delivery failed with SMTP", error);
			}
		} else console.warn("SMTP email not sent because SMTP credentials are not configured.");
		if (!smtpSuccess && resendConfigured) {
			attemptedMethods.push("resend");
			try {
				await sendLeadViaResend(details, resendApiKey, fromAddress, targetEmail);
				resendSuccess = true;
				methods.push("resend");
			} catch (error) {
				console.error("Lead email delivery failed with Resend", error);
			}
		} else if (!smtpSuccess) console.warn("Resend email not sent because Resend is not configured.");
		if (!smtpSuccess && !resendSuccess && sendGridConfigured) {
			attemptedMethods.push("sendgrid");
			try {
				await sendLeadViaSendGrid(details, sendGridApiKey, fromAddress, targetEmail);
				sendGridSuccess = true;
				methods.push("sendgrid");
			} catch (error) {
				console.error("Lead email delivery failed with SendGrid", error);
			}
		}
		if (smtpSuccess || resendSuccess || sendGridSuccess) return new Response(JSON.stringify({
			success: true,
			delivered: true,
			methods,
			attemptedMethods,
			debug: {
				smtpConfigured,
				resendConfigured,
				sendGridConfigured
			}
		}), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
		await persistLead(payload);
		return new Response(JSON.stringify({
			success: true,
			fallback: true,
			message: "Lead captured successfully. We will follow up shortly.",
			debug: {
				attemptedMethods,
				methods,
				smtpConfigured,
				resendConfigured,
				sendGridConfigured
			}
		}), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
	} catch (error) {
		console.error("Lead submission failed", error);
		return new Response(JSON.stringify({
			success: false,
			error: "Failed to process your request."
		}), {
			status: 500,
			headers: { "content-type": "application/json" }
		});
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const normalizedPathname = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
		if (request.method === "POST" && normalizedPathname === "/api/submit-lead") return handleLeadSubmission(request, env);
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
