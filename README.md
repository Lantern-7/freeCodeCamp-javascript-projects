# 🌟 freeCodeCamp — JavaScript Certification Projects

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-Certified-0a0a23?style=for-the-badge&logo=freecodecamp&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  A curated collection of all 5 certification projects completed for the <b>freeCodeCamp JavaScript</b> curriculum. 
  <br />
  From regular expression parsers and interactive audio engines to OOP banking systems and asynchronous REST API weather apps.
</p>

[Explore Projects](#-projects-overview) • [Directory Structure](#-repository-structure) • [How to Run](#-getting-started) • [Key Concepts](#-core-competencies)

---

</div>

## 📑 Table of Contents
- [Overview](#-overview)
- [Projects Overview](#-projects-overview)
- [Deep Dive into Projects](#-deep-dive-into-projects)
  - [1. Markdown to HTML Converter](#1--markdown-to-html-converter)
  - [2. Drum Machine](#2--drum-machine)
  - [3. Voting System](#3--voting-system)
  - [4. Bank Account Management Program](#4--bank-account-management-program)
  - [5. Weather App](#5--weather-app)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
- [Core Competencies](#-core-competencies)
- [Author & Acknowledgments](#-author--acknowledgments)

---

## 📌 Overview

This repository contains solutions for the 5 hands-on certification projects required by **freeCodeCamp**. Each project targets fundamental computer science principles and real-world JavaScript programming techniques, emphasizing clean code, modern ES6+ standards, modular structure, and test suite compliance.

---

## 🚀 Projects Overview

| # | Project Name | Focus & Concepts | Interface | Source |
|---|---|---|---|---|
| **01** | [Markdown to HTML Converter](#1--markdown-to-html-converter) | RegEx Parsing, Live DOM Updates, String Manipulation | Web UI | [View Folder](./Project%201%20-%20Build%20a%20Markdown%20to%20HTML%20Converter/) |
| **02** | [Drum Machine](#2--drum-machine) | Audio API, Keyboard & Mouse Events, Dynamic State | Web UI | [View Folder](./Project%202%20-%20Build%20a%20Drum%20Machine/) |
| **03** | [Voting System](#3--voting-system) | ES6 `Map` & `Set`, Data Validation, Unique Tracking | Script / Engine | [View Folder](./Project%203%20-%20Build%20a%20Voting%20System/) |
| **04** | [Bank Account Management](#4--bank-account-management-program) | ES6 OOP Classes, Encapsulation, Transaction Ledgers | Script / OOP | [View Folder](./Project%204%20-%20Build%20a%20Bank%20Account%20Management%20Program/) |
| **05** | [Weather App](#5--weather-app) | `async`/`await`, `fetch` REST API, Error Handling, DOM Injection | Web UI | [View Folder](./Project%205%20-%20Build%20a%20Weather%20App/) |

---

## 🔍 Deep Dive into Projects

### 1. 📝 Markdown to HTML Converter
> A real-time markdown parser and renderer built from scratch using pure JavaScript and Regular Expressions.

- **Objective:** Convert raw Markdown input dynamically into sanitized HTML strings and render an interactive live preview.
- **Key Highlights:**
  - Headings conversion (`#`, `##`, `###` to `<h1>`, `<h2>`, `<h3>`)
  - Emphasis formatting (bold `**text**` / `__text__`, italic `*text*` / `_text_`)
  - Media & link resolution (`![alt](url)` and `[text](url)`)
  - Blockquotes styling (`> quote`)
  - Live split-view showing both raw HTML code and rendered output simultaneously.
- **Tech Stack:** HTML5, JavaScript (Regex, String manipulation, Event handling).

---

### 2. 🥁 Drum Machine
> An interactive electronic drum kit supporting both keyboard hotkeys and tactile mouse interactions.

- **Objective:** Build an audio soundboard responding instantaneously to user input with matching sound clips and visual triggers.
- **Key Highlights:**
  - 9 responsive drum pads mapped to keys: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`.
  - Dual interaction handling: supports mouse clicks and keyboard event listeners (`keydown`).
  - Rapid audio re-triggering via `audio.currentTime = 0`.
  - Dynamic display updating the currently triggered sound sample name (e.g., Heater 1, Clap, Kick).
  - Smooth CSS visual active states upon playback.
- **Tech Stack:** HTML5 Audio API, CSS3 Grid/Flexbox, Event Listeners.

---

### 3. 🗳️ Voting System
> A robust polling engine leveraging modern ES6 collection data structures.

- **Objective:** Manage poll candidates and votes while ensuring data integrity and preventing duplicate voting.
- **Key Highlights:**
  - Backed by **ES6 `Map`** for storing candidates and associated voter data.
  - Utilizes **ES6 `Set`** collections to guarantee that each voter ID can only cast a single ballot per candidate.
  - Input validation: protects against empty options, duplicate additions, and nonexistent candidate lookups.
  - Clean reporting method formatting final poll tallies sorted and trimmed to specification.
- **Tech Stack:** ES6 `Map` & `Set`, Functional Programming, Validation Logic.

---

### 4. 💳 Bank Account Management Program
> An Object-Oriented financial ledger managing balance, transactions, and audit records.

- **Objective:** Model real-world banking operations through a modular JavaScript class structure.
- **Key Highlights:**
  - ES6 `class BankAccount` encapsulation.
  - Transaction tracking: logs structured historical records `{ type, amount }` for every transaction.
  - Strict validation: forbids negative or zero deposits and denies withdrawals exceeding the current balance.
  - Query methods: retrieve balance, filter all deposits, and aggregate all withdrawals.
- **Tech Stack:** ES6 Classes, OOP Principles, Array Methods (`push`, `filter`, `join`).

---

### 5. ⛅ Weather App
> A live weather forecasting dashboard pulling real-time meteorological metrics via an external REST API.

- **Objective:** Consume an asynchronous API endpoint to present location-based temperature, humidity, wind, and conditions.
- **Key Highlights:**
  - Modern asynchronous syntax using `async` / `await` and the native `fetch()` API.
  - Graceful error handling with `try...catch` blocks and user feedback alerts.
  - Defensive DOM population: handles missing properties safely with optional chaining (`?.`) and fallback placeholders.
  - Displays dynamic temperature, "feels like" metrics, wind speed, gust levels, humidity, and condition icons.
- **Tech Stack:** Asynchronous JavaScript, REST API Integration, JSON Parsing, DOM Manipulation.

---

## 📂 Repository Structure

```text
freeCodeCamp-javascript-projects/
├── Project 1 - Build a Markdown to HTML Converter/
│   └── index.html          # Markdown input, live regex parser & preview
├── Project 2 - Build a Drum Machine/
│   ├── index.html          # Soundboard layout & audio elements
│   ├── script.js           # Audio triggers & keyboard/click bindings
│   └── styles.css          # Responsive drum pad styling & animations
├── Project 3 - Build a Voting System/
│   └── script.js           # Poll manager using ES6 Map and Set data structures
├── Project 4 - Build a Bank Account Management Program/
│   └── script.js           # OOP BankAccount class & transaction management
├── Project 5 - Build a Weather App/
│   ├── index.html          # Weather dashboard layout
│   ├── script.js           # Async API fetch and DOM injection logic
│   └── styles.css          # Weather card styling and design
└── README.md               # Repository documentation
```

---

## 💻 Getting Started

### Prerequisites
- A modern web browser (Google Chrome, Firefox, Safari, Edge)
- Optional: [Node.js](https://nodejs.org/) (if running JavaScript scripts via terminal) or VS Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

### Clone the Repository
```bash
git clone https://github.com/Lantern-7/freeCodeCamp-javascript-projects.git
cd freeCodeCamp-javascript-projects
```

### Running the Projects

#### 🌐 Web UI Projects (Projects 1, 2, and 5)
Simply open the corresponding `index.html` file in your preferred web browser:
- Double click `index.html` inside any project folder, OR
- Right-click and choose **"Open with Live Server"** in VS Code.

#### ⚙️ JavaScript Console Scripts (Projects 3 and 4)
Run them using Node.js or directly in your browser's developer console:

```bash
# Run Voting System
node "Project 3 - Build a Voting System/script.js"

# Run Bank Account Management
node "Project 4 - Build a Bank Account Management Program/script.js"
```

---

## 🧠 Core Competencies

This repository demonstrates mastery in:
- **Language Fundamentals:** ES6+ syntax, arrow functions, destructuring, template literals, optional chaining.
- **Object-Oriented Programming:** Classes, constructors, method definitions, encapsulation, state mutation.
- **Data Structures:** Hash maps (`Map`), unique collections (`Set`), arrays, objects.
- **Asynchronous Programming:** Promises, `async` / `await`, network calls with `fetch`, HTTP response checking, JSON parsing.
- **DOM & Event Architecture:** Real-time input listening, mouse click delegates, keyboard event dispatching, dynamic HTML generation.
- **String & Pattern Processing:** Complex Regular Expressions (global, multiline, case-insensitive flags), replace functions, sanitization.

---

## 📜 Acknowledgments

- **Curriculum:** Designed by [freeCodeCamp](https://www.freecodecamp.org/).
- **Author:** [Lantern-7](https://github.com/Lantern-7)
