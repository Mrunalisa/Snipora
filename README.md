# 🌌 **Snipora**

**Snipora** is a lightweight and modern **React application** for saving, organizing, and managing your **notes and code snippets** — all in one place.
Built for developers and learners, it combines speed, simplicity, and style.
Your snippets stay secure in your browser with **LocalStorage**, so you never lose them.

---

## ✨ **Features**

* 🧾 **Create / Read / Update / Delete (CRUD)** operations for notes and snippets
* 🔍 **Instant Search** by title or content
* 📋 **Copy to Clipboard** with a single click
* 💾 **Persistent Storage** using LocalStorage
* 🔔 **Toast Notifications** for every key action
* 🌈 **Clean and Responsive UI** with Tailwind CSS
* ⚡ **Global State Management** with Redux Toolkit

---

## 🧰 **Tech Stack**

| Technology           | Purpose                    |
| -------------------- | -------------------------- |
| **React.js**         | Frontend framework         |
| **Redux Toolkit**    | State management           |
| **Tailwind CSS**     | Styling and responsiveness |
| **LocalStorage** | Data persistence           |
| **React Toastify**   | Notifications and alerts   |

---

## ⚙️ **Installation and Setup**

1️⃣ Clone the repository

```bash
git clone https://github.com/mrunalisa/snipora.git
cd snipora
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the app

```bash
npm start
```

Your app will run locally at **[http://localhost:3000](http://localhost:3000)**

---

## 🗂️ **Folder Structure**

```
snipora/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   ├── SearchBar.jsx
│   │   └── ToastContainer.jsx
│   │
│   ├── features/
│   │   └── notes/
│   │       ├── notesSlice.js
│   │       └── selectors.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddNote.jsx
│   │   └── EditNote.jsx
│   │
│   ├── utils/
│   │   └── localStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

---

## 💡 **How to Use**

1. 📝 **Add a Note/Snippet** — Provide a title, category (optional), and content. Click **Save**.
2. ✏️ **Edit or Delete** — Modify or remove any existing note.
3. 🔍 **Search** — Instantly find what you need with the search bar.
4. 📋 **Copy Snippet** — One click copies your code to the clipboard.
5. 💾 **Auto Save** — All your data is stored safely in LocalStorage.

---

## 🌠 **Future Enhancements**

* 🧩 Code syntax highlighting
* 🌓 Dark / Light mode toggle
* ☁️ Cloud backup and user authentication
* 🗂️ Folder-based organization
* 🤖 AI note suggestions

---

## 🧑‍💻 **Author**

**Developed by:** [Mrunali Badgujar]
**GitHub:** [mrunalisa]
**Email:** [[mrucoder@gmail.com](mailto:mrucoder@gmail.com)]

---

## 📜 **License**

This project is licensed under the **MIT License** — free to use, modify, and share.

---

> *“Snipora — Illuminate your ideas, store your snippets.”* 🌌
