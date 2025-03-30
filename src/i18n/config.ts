import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "En",
  uk: "Uk",
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hello_world: "Hello, World!",
          category: "Category",
          tech_store: "Tech Store. All rights reserved.",
          placing_order: "Placing an order",
          contact_details: "Your contact details",
          phone_number: "Phone number",
          email: "E-mail",
          name: "Name",
          surname: "Surname",
          submit: "Submit",
          reset: "Reset",
          delivery: "Delivery",
          pickup: "Pickup from our stores",
          within: "Within 5-7 days",
          free: "For free",
          nova_post: "Self-pickup from Nova Poshta post offices",
          nova: "Pickup from Nova Poshta",
          courier : "Nova Poshta courier",
          average: "Average delivery time 2 days",
          payment: "Payment",
          receipt: "Payment upon receipt of goods",
          pay_now: "Pay now",
          seller: "Payment to the seller's account",
          prepayment: "Prepayment to the merchant card",
          credit: "Credit and installment payments",
          loans: "Loans from partner banks",
          postpaid: "The postpaid service is paid separately, according to the carrier's tariffs.",
          receiver: "Receiver",
          comment: "Comment",
          god: "Oh my god! 404",
          kill: "You killed the page! You bastard!",
          home: "Go Home",
          product_data: "Enter product data",
          name_of_product: "Name",
          desc: "Description",
          choose_file: "Choose file",
          add_product: "Add product",
          price: "Price",
          field_required: "This field is required",
          "order": {
            "total": "Total",
            "item_count": "1 item for",
            "delivery_cost": "Delivery cost",
            "carrier_rates": "According to carrier rates",
            "to_pay": "To pay",
            "confirm_button": "Confirm order",
            "terms_acceptance": "By confirming the order, I accept the terms:",
            "privacy_policy": "Privacy policy",
            "user_agreement": "User agreement"
          }
        },
      },
      uk: {
        translation: {
          hello_world: "Привіт, світ!",
          category: "Категорія",
          tech_store: "Технологічний магазин. Всі права захищені",
          placing_order: "Оформлення замовлення",
          contact_details: "Ваші контактні дані",
          phone_number: "Мобільний телефон",
          email: "Електронна пошта",
          name: "Ім'я",
          surname: "Прізвище",
          submit: "Відправити",
          reset: "Скинути",
          delivery: "Доставка",
          pickup: "Самовивіз з наших магазинів",
          within: "Впродовж 5-7 днів",
          free: "Безкоштовно",
          nova_post: "Самовивіз з поштоматів Нової Пошти",
          nova: "Самовивіз з Нової Пошти",
          courier : "Кур'єр Нової Пошти",
          average: "Середній термін доставки 2 дні",
          payment: "Оплата",
          receipt: "Оплата під час отримання товару",
          pay_now: "Оплатити зараз",
          seller: "Оплата на рахунок продавця",
          prepayment: "Передплата на картку продавця",
          credit: "Кредит та оплата частинами",
          loans: "Оформлення кредитів у банках партнерів",
          postpaid: "Послуга післяплати оплачується окремо, за тарифами перевізника",
          receiver: "Отримувач",
          comment: "Коментар",
          god: "Боже мій! 404",
          kill: "Вони вбили сторінку, покидьки!",
          home: "Іди додому",
          product_data: "Введіть інформацію про продукт",
          name_of_product: "Назва",
          desc: "Опис",
          choose_file: "Оберіть файл",
          add_product: "Додати продукт",
          price: "Ціна",
          field_required: "Це поле обов'язкове для заповнення",
          "order": {
            "total": "Разом",
            "item_count": "1 товар на суму",
            "delivery_cost": "Вартість доставки",
            "carrier_rates": "за тарифами перевізника",
            "to_pay": "До сплати",
            "confirm_button": "Замовлення підтверджую",
            "terms_acceptance": "Підтверджуючи замовлення, я приймаю умови:",
            "privacy_policy": "положення про обробку і захист персональних даних",
            "user_agreement": "угоди користувача"
          }
        },
        
      },
    },
  });

export default i18n;
