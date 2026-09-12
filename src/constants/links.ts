const SITE_BASE_URL = import.meta.env.PUBLIC_SITE_URL;
const APP_BASE_URL = import.meta.env.PUBLIC_APP_URL;

export const LINKS = {
  PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.tibis.van360",
  PLAY_STORE_BADGE_URL: "/assets/badge-google-play.png",
  APP_STORE_URL: "https://apps.apple.com/app/van360",
  APP_STORE_BADGE_URL: "/assets/badge-app-store.png",
  WHATSAPP_SUPPORT_URL: "https://wa.me/5511962508068?text=Oi,%20eu%20vim%20pelo%20site%20do%20Van360.",
  APP_LOGIN_URL: `${APP_BASE_URL}/login`,
  APP_REGISTER_URL: `${APP_BASE_URL}/cadastro`,
  SITE_URL: SITE_BASE_URL
};
