const IS_PROD = import.meta.env.PROD;
const APP_BASE_URL = import.meta.env.PUBLIC_APP_URL || (IS_PROD ? "https://app.van360.com.br" : "http://localhost:8080");

export const LINKS = {
  PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.tibis.van360",
  PLAY_STORE_BADGE_URL: "https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png",
  WHATSAPP_SUPPORT_URL: "https://wa.me/5511962508068",
  APP_LOGIN_URL: `${APP_BASE_URL}/login`,
  APP_REGISTER_URL: `${APP_BASE_URL}/cadastro`
};
