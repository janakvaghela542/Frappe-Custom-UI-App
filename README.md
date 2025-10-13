# 🎨 Frappe Custom UI App

A flexible and developer-friendly **Frappe app** designed to enhance the **user interface and user experience (UI/UX)** of your ERPNext or Frappe applications.  
This app enables **role-based UI customization**, **custom ListView actions**, and **reusable interface components**, making it easy for developers to **extend and experiment** with Frappe’s front-end features.

---

## 🚀 Key Features

- 🔐 **Role-Based UI Control** – Dynamically show or hide form fields based on user roles or permissions.  
- ⚡ **Custom ListView Actions** – Add context-specific buttons and actions directly in ListView for quick operations.  
- 🧩 **Reusable UI Components** – Extend Frappe Desk with reusable and styled interface components.  
- 🧠 **Hook & Template Extensions** – Modify or override Frappe’s default behavior using customizable hooks and templates.  
- 💅 **Custom JS/CSS Scaffolding** – Quickly prototype and inject custom front-end behavior and styling.  

---

## 📦 Installation

1. Navigate to your **bench** directory:  
   ```bash
   cd ~/frappe-bench
   ```

2. **Get the app** from GitHub:  
   ```bash
   bench get-app frappe_custom_ui_app https://github.com/janakvaghela542/Frappe-Custom-UI-App.git
   ```

3. **Install the app** on your site:  
   ```bash
   bench --site your-site-name install-app frappe_custom_ui_app
   ```

4. **Restart the bench**:  
   ```bash
   bench restart
   ```

---

## 🧰 Usage

Once installed, you can:
- Customize visibility of form fields via role-based configurations.  
- Add or override ListView buttons using custom scripts.  
- Extend Desk pages or modals with your own UI components.  
- Modify templates and hooks to experiment with Frappe’s behavior.  

For examples, explore the `/frappe_custom_ui_app/public/` and `/frappe_custom_ui_app/hooks.py` directories.

---

## 🧑‍💻 Developer Notes

This app is built to **experiment, extend, and learn** Frappe’s UI system.  
Developers can easily integrate new JS, CSS, or Python hooks without altering the core framework.

---

## 🧾 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute it.

---

## 💡 Author

**Janak Vaghela**  
🔗 [GitHub Profile](https://github.com/janakvaghela542)
