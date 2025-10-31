
# 🌌 **Snipora – Code & Notes Saver App**

**Snipora** is a modern and minimal **React.js web application** that lets users save, organize, and manage **code snippets and notes** efficiently.
Designed for developers and learners, it combines simplicity, speed, and a responsive UI for seamless productivity.
All your snippets are stored securely in your browser using **LocalStorage**.

🌐 Live Demo: [https://snipora-app.vercel.app](https://snipora-app.vercel.app/)
---

## ✨ **Features**

* 🧾 Full **CRUD operations** for notes and code snippets
* 🔍 **Instant Search** by title or content
* 📋 **Copy to Clipboard** functionality
* 💾 **Persistent Storage** with LocalStorage
* 🔔 **Toast Notifications** for key actions
* 🌈 **Responsive UI** built with Tailwind CSS
* ⚡ **Global State Management** using Redux Toolkit

---

## 🧰 **Tech Stack**

| Technology         | Purpose                    |
| ------------------ | -------------------------- |
| **React.js**       | Frontend framework         |
| **Redux Toolkit**  | State management           |
| **Tailwind CSS**   | Styling and responsiveness |
| **LocalStorage**   | Data persistence           |
| **react-hot-toast** | Notifications              |
| **Figma**          | UI/UX design prototype     |

---

## ⚙️ **Installation and Setup**

1️⃣ **Clone the repository**

```bash
git clone https://github.com/mrunalisa/snipora.git
cd snipora
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the app**

```bash
npm start
```

Your app will run locally at **[http://localhost:5173](http://localhost:5173)**

---

## 🗂️ **Folder Structure**

```
snipora/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   ├── redux/           # Redux store and slices
│   │   ├── pasteSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💡 **How to Use**

1. 📝 Add a **note/snippet** with title and content.
2. ✏️ Edit or delete any existing note.
3. 🔍 Use **search** to quickly find your snippets.
4. 📋 Copy snippets with one click.
5. 💾 Data stays saved in **LocalStorage**.

---

## 🌠 **Future Enhancements**

* 🧩 Code syntax highlighting
* 🌓 Dark/Light mode toggle
* ☁️ Cloud sync and user authentication
* 🗂️ Folder-based organization
* 🤖 AI-based note suggestions

---

## 🧑‍💻 **Author**

**Developed by:** [Mrunali Badgujar]

**GitHub:** [mrunalisa](https://github.com/mrunalisa)

**Email:** [mrucoder@gmail.com](mailto:mrucoder@gmail.com)

---

## 📜 **License**

This project is licensed under the **MIT License** — free to use and modify.

---

> *“Snipora — Illuminate your ideas, store your snippets.”* 🌌

---
