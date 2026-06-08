// ============================================================
// PERSONEL BİLDİRİM AYARLARI (Garson çağır + Rezervasyon)
// ============================================================
const WAITER_CONFIG = {
  // Bildirim alacak telefon (ülke kodu ile, + olmadan)
  phone: '905314521550',

  // --- ntfy.sh (ÜCRETSİZ anlık telefon bildirimi) ---
  // Garson "ntfy" uygulamasını indirir → Konuya abone olur → Bildirim gelir
  // Uygulama: https://ntfy.sh/app (iOS & Android)
  ntfyTopic: 'sushisea-garson-xK9mP2vQ',
  ntfyEnabled: true,

  // --- CallMeBot WhatsApp (OTOMATİK WhatsApp mesajı) ---
  // API: https://api.callmebot.com/whatsapp.php?phone=905314521550&text=MESAJ&apikey=7893879
  // Durdurmak için WhatsApp'tan "Stop" | Tekrar açmak için "Resume"
  callMeBotApiKey: '7893879',
  callMeBotEnabled: true,
};
