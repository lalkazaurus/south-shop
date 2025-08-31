# 🛒 South Shop

A React-based e-commerce web application inspired by **Rozetka**, featuring multilingual support, shopping cart management, product catalog, order form, and backend integration for product and order storage.

## 🚀 Features

* **Product Catalog**: Browse products fetched from a backend API.
* **Cart Management**: Add, remove, and update product quantities using Zustand state management.
* **Order Form**: Place orders with customer details, delivery, and payment options.
* **Product Management**: Admin can add new products with images.
* **Internationalization (i18n)**: Supports multiple languages with `react-i18next`.
* **Error Page**: Friendly error page with South Park theme.
* **Persistent Cart**: Cart data is persisted in `localStorage`.
* **React Query**: Efficient server state management with caching and mutations.

## 🛠️ Tech Stack

* **Frontend:** React 18, TypeScript, React Router DOM, React Hook Form, React Query
* **State Management:** Zustand (with persistence)
* **Styling:** CSS Modules
* **Internationalization:** i18next + react-i18next
* **Icons:** react-icons
* **Backend API:** Express/NestJS (assumed, not included in this repo)
* **HTTP Client:** Axios
* **Build Tool:** Vite

## 📂 Project Structure

```
src/
 ├── Router/           # App routing
 ├── layout/           # Header and Footer components
 ├── pages/            # Main, Products, Cart, AddProduct, Form, Error
 ├── i18n/             # Localization config & switcher
 ├── store/            # Zustand store for cart
 ├── type/             # TypeScript interfaces
 ├── data/             # Static category data
 └── index.tsx         # App entry point
```

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rozetka-clone.git
   cd rozetka-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview production build:

   ```bash
   npm run preview
   ```

## 🔗 API Endpoints (Expected Backend)

The frontend expects a backend running at `http://localhost:5000/api` with endpoints:

* `GET /products` → Fetch all products
* `POST /products` → Add a new product
* `POST /orders` → Submit a new order

## 🌍 Internationalization

Languages supported:

* 🇬🇧 English
* 🇺🇦 Ukrainian

Users can switch language via the **Locale Switcher** in the header.

## 📸 Screenshots (Optional)

*Add screenshots of main pages (catalog, cart, order form).*

## 📜 License

This project is for educational purposes and not intended for commercial use.

---

👨‍💻 Developed with ❤️ using React, TypeScript, and Zustand.
