<?php
/**
 * Telegram lead notifier for webraf.com
 * ------------------------------------------------------------------
 * The website contact forms POST here (same origin) and this forwards the
 * lead to YOUR Telegram via a bot. The visitor never needs Telegram.
 *
 * The bot token + chat id live in telegram-secret.php — a SEPARATE file that is
 * gitignored and must NEVER be committed. Copy telegram-secret.sample.php to
 * telegram-secret.php (same folder) and paste your real values there.
 */

$BOT_TOKEN = '';
$CHAT_ID   = '';
$secretFile = __DIR__ . '/telegram-secret.php';
if (file_exists($secretFile)) {
    require $secretFile;
}

header('Content-Type: application/json; charset=utf-8');

if ($BOT_TOKEN === '' || $CHAT_ID === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Telegram not configured']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Honeypot: silently drop bots that tick the hidden field.
if (!empty($_POST['botcheck'])) {
    echo json_encode(['success' => true]);
    exit;
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$message = trim($_POST['message'] ?? '');
$page    = trim($_POST['page']    ?? '');

// Basic guard against empty spam hits.
if ($email === '' && $phone === '' && $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Empty submission']);
    exit;
}

// Plain text (no parse_mode) so user input with * or _ can't break formatting.
$text  = "🔔 Nuevo contacto en webraf.com\n\n";
if ($name    !== '') { $text .= "👤 Nombre: {$name}\n"; }
if ($email   !== '') { $text .= "📧 Correo: {$email}\n"; }
if ($phone   !== '') { $text .= "📱 Teléfono: {$phone}\n"; }
if ($message !== '') { $text .= "💬 Mensaje: {$message}\n"; }
if ($page    !== '') { $text .= "\n📄 Origen: {$page}"; }

$apiUrl  = 'https://api.telegram.org/bot' . $BOT_TOKEN . '/sendMessage';
$payload = http_build_query([
    'chat_id' => $CHAT_ID,
    'text'    => $text,
]);

$ok = false;
$detail = '';

if (function_exists('curl_init')) {
    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    $detail   = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $ok = ($httpCode === 200);
} else {
    // Fallback if cURL is disabled on the host.
    $ctx = stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $payload,
            'timeout' => 15,
        ],
    ]);
    $detail = @file_get_contents($apiUrl, false, $ctx);
    $ok = ($detail !== false && strpos($detail, '"ok":true') !== false);
}

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    echo json_encode(['success' => false, 'message' => 'Telegram error']);
}
