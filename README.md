# 🎵 MoodBeats — Music Streaming App

A modern music streaming web application built with React, Node.js, and Express.

![MoodBeats](https://img.shields.io/badge/MoodBeats-Music%20Streaming-8b5cf6?style=for-the-badge&logo=music)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

- 🎵 **Music Player** — Play, Pause, Next, Previous, Shuffle, Repeat
- 🔍 **Search** — Real-time song and artist search
- 📂 **Categories** — Recently Played, Trending, New Releases, 90s Hits, Bhakti & Bhajan, Retro Classics
- 🌍 **Jamendo API** — Copyright-free live music streaming
- 💜 **Liked Songs & Playlists** — Create and manage your playlists
- 🎨 **Premium UI** — Deep purple/blue gradient design
- 📱 **Responsive** — Works on all screen sizes

---

## 🛠️ Tech Stack

| Frontend | Backend | API |
|----------|---------|-----|
| React (Vite) | Node.js | Jamendo Music API |
| CSS3 | Express.js | Font Awesome Icons |
| JavaScript | REST API | Google Fonts |

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm installed

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/divya97027/moodbeats-music-app.git
cd moodbeats-music-app
```

**2. Install Server dependencies**
```bash
cd server
npm install
```

**3. Install Client dependencies**
```bash
cd ../client
npm install
```

### Running the App

**Start Backend Server** (Terminal 1)
```bash
cd server
node server.js
```

**Start Frontend** (Terminal 2)
```bash
cd client
npm run dev
```

Open `http://localhost:5173` in your browser 🎵

---
## 📁 Project Structure
moodbeats-music-app/
├── client/                 # React Frontend
│   ├── public/
│   │   └── assets/         # Images & Audio files
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Cards.jsx
│   │   │   └── MusicPlayer.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
├── server/                 # Node.js Backend
│   ├── data/
│   │   └── songs.json
│   ├── routes/
│   │   └── songs.js
│   └── server.js
└── README.md

---

## 🎨 Screenshots

### 🏠 Home Page
![Home](./screenshots/home.png)

### 🔥 Trending & Categories
![Trending](./screenshots/trending.png)

### 🎵 Music Player
![Player](./screenshots/bhajan.png)

---

## 🌐 Live Demo

> Deployed on Vercel — Link coming soon!

---

## 👩‍💻 Developer

Made with 💜 by **Divya**

[![GitHub](https://img.shields.io/badge/GitHub-divya97027-181717?style=for-the-badge&logo=github)](https://github.com/divya97027)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


## 📁 Project Structure
