// Contact-form delivery. The site is fully static (no server runtime), so form
// submissions are delivered by email through Web3Forms (https://web3forms.com).
//
// WEB3FORMS_ACCESS_KEY is a PUBLIC key by design — it is safe in client code and
// only routes submissions to the email configured in the Web3Forms dashboard.
// Get yours free at web3forms.com (enter contact@webraf.com as the destination),
// then paste it below.
export const WEB3FORMS_ACCESS_KEY = 'ae4605c8-d31c-4fb1-b7a3-20a9385c3d13';

// Business WhatsApp number, shared by the "message us on WhatsApp" fallback buttons.
export const BUSINESS_WHATSAPP = '584144735431';

// Same-origin PHP endpoint that forwards the lead to the owner's Telegram. The bot
// token lives in that PHP file on the server — never in the browser. Best-effort: a
// Telegram failure must never block the email (the email is the source of truth).
export const TELEGRAM_ENDPOINT = '/telegram-notify.php';

function notifyTelegram(fields) {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.append(key, value == null ? '' : value);
  }
  // Fire-and-forget; swallow every error (offline, 404 during local dev, etc.).
  return fetch(TELEGRAM_ENDPOINT, { method: 'POST', body: fd }).catch(() => {});
}

// POST the form fields to Web3Forms as multipart FormData (the approach Web3Forms'
// own examples use). FormData keeps it a CORS "simple request" — no preflight — which
// is more robust than a JSON body. Also pings Telegram (best-effort). Resolves on
// success; throws on failure so the caller can show an error state.
export async function sendContactEmail(fields) {
  // Instant Telegram ping — does not block or fail the email.
  notifyTelegram(fields);

  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', 'Nuevo contacto desde webraf.com');
  formData.append('from_name', fields.name || fields.email || 'webraf.com');
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value == null ? '' : value);
  }
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });
  const data = await res.json().catch(() => ({ success: false }));
  if (!data.success) throw new Error(data.message || 'submit failed');
  return data;
}
