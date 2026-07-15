# ✂️ Rely Tailors — A Modern Tailoring Management System

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://rely-tailors.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)
[![Made with React](https://img.shields.io/badge/frontend-React.js-61DAFB?logo=react)](https://react.dev/)
[![Made with Node.js](https://img.shields.io/badge/backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/database-MongoDB-47A248?logo=mongodb)](https://www.mongodb.com/)

Rely Tailors is a comprehensive, high-performance web application designed to streamline operations for custom garment businesses. By replacing traditional, fragmented record-keeping with a centralized digital ecosystem, the platform manages complex user data, dynamic order states, and transaction tracking — end to end, from measurement intake to invoice settlement.

Engineered with a focus on **modularity, responsive web design, and scalable RESTful APIs**, Rely Tailors serves as a robust proof-of-concept for handling complex, state-heavy workflows akin to modern **e-commerce and transactional (Fintech) applications**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features--technical-implementations)
- [Skills & Concepts Demonstrated](#-skills--concepts-demonstrated)
- [Architecture & Modularity](#️-architecture--modularity)
- [Live Demo](#-live-demo)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#️-getting-started)
- [API Design Approach](#-api-design-approach)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

---

## 🔎 Overview

Custom tailoring businesses typically rely on paper ledgers, spreadsheets, and memory to track customer measurements, order progress, and payments — a process that doesn't scale and is error-prone. Rely Tailors solves this by providing a **single source of truth**: a component-driven frontend backed by a modular, API-first backend, so shop owners can manage the full order lifecycle from a responsive dashboard on any device.

The project was built to mirror real-world **transactional/Fintech-style engineering challenges** — precise state transitions, payment status tracking, and data integrity — while staying lightweight enough to run as a solo full-stack build.

## ✨ Key Features & Technical Implementations

- **Responsive Web Interfaces (Mobile-First):** Built with fluid, mobile-first design principles ensuring the UI/UX remains interactive and performant across desktop, tablet, and mobile.
- **UI/UX → Functional Feature Conversion:** Interactive components (order forms, measurement inputs, dashboards) built with HTML5, modern CSS, and JavaScript, translating design intent directly into working features.
- **Complex Data & State Management:** Robust handling of heavily nested customer profiles and precise measurement data, using efficient data structures for fast retrieval and updating.
- **Order & State Tracking:** Dynamic order lifecycle management (`Pending → In Progress → Completed`), reflecting real-time state changes seamlessly between the frontend and database.
- **Billing & Transaction Tracking:** A dedicated module for tracking payment statuses (`Paid`, `Unpaid`, `Partial`) and generating invoices — demonstrating an understanding of financial data flows and status handling common to Fintech systems.
- **Interactive Dashboard UI:** Converts complex backend data into intuitive, at-a-glance overviews of active orders, pending payments, and upcoming deadlines.
- **RESTful API Integration:** The client-side application consumes optimized RESTful APIs built on Node.js/Express, ensuring seamless communication between frontend and server-side logic.
- **Secure Session Management:** JWT-based authentication for safe, stateless session handling across the app.

## 🧩 Skills & Concepts Demonstrated

A quick map of hands-on experience reflected in this codebase:

| Area | Demonstrated Through |
|---|---|
| Modern JS frameworks (React.js) | Component-driven frontend, reusable UI components, hooks-based state |
| Responsive & mobile-first design | Fluid layouts tested across breakpoints (desktop/tablet/mobile) |
| Data structures, algorithms & OOP | Efficient handling of nested customer/measurement data; class-based, reusable, object-oriented service and model design |
| Backend proficiency (Node.js) | Express.js REST API layer, route/controller/service separation |
| Building & consuming RESTful APIs | Full CRUD APIs for customers, orders, and payments consumed by the React client |
| NoSQL databases | MongoDB + Mongoose schema modeling for flexible, nested tailoring data |
| Relational DB readiness | Schema design follows normalized, relation-friendly patterns — portable to MySQL/PostgreSQL with minimal remodeling |
| Version control (Git) | Feature-branch workflow, structured commit history on GitHub |
| Modular, microservice-friendly architecture | Core API/infrastructure decoupled and reused to spin up a second product (see below) |
| Fintech-style transactional logic | Payment status state machine (`Paid`/`Unpaid`/`Partial`) and invoice generation |

## 🏗️ Architecture & Modularity

A core focus during development was writing **clean, reusable, object-oriented code**. The application is built using a component-driven frontend and a **microservice-friendly backend structure** — routes, controllers, services, and models are cleanly separated so pieces can be extracted or swapped independently.

**Proof of Modularity:** The architecture of Rely Tailors was designed to be highly decoupled. This allowed the core infrastructure and API layer to be successfully extracted, modified, and deployed as a separate, distinct vertical platform known as **Rriwaaz**, which focuses specifically on women's ethnic wear. This demonstrates the ability to **deliver modular pieces of projects that scale across different business needs** — the same mindset needed to contribute to multiple microservices within a larger ecosystem.

## 🚀 Live Demo

Check out the live version of the application here: **[Rely Tailors Demo](https://rely-tailors.vercel.app/)**

## 🛠️ Tech Stack

This project is built using a modern JavaScript ecosystem:

- **Frontend:** React.js, modern CSS/UI libraries, HTML5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL) with Mongoose for flexible schema modeling
- **Authentication:** JWT (JSON Web Tokens) for secure state and session management
- **Version Control:** Git & GitHub
- **Deployment:** Vercel (Frontend)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16 or higher)
- npm / Yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tabishfarhan7/rely-tailors.git
   cd rely-tailors
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `/server` directory and add the following environment variables:

```env
# Server Configuration
PORT=5000

# Database Connection
MONGO_URI=your_mongodb_connection_string

# JWT Secret for Authentication
JWT_SECRET=your_super_secret_key
```

### Running the Application

1. Start the backend server (from the `/server` directory):

   ```bash
   npm run dev
   ```

2. Start the frontend development server (from the `/client` directory):

   ```bash
   npm run dev
   ```

Your application should now be running locally at `http://localhost:3000` (or the port specified in your frontend configuration).

## 🔌 API Design Approach

The backend exposes resource-oriented REST endpoints (e.g. `/api/customers`, `/api/orders`, `/api/payments`), following consistent conventions for status codes, error handling, and payload shape. Controllers stay thin and delegate to service modules — the same layering pattern used to keep individual microservices independently testable and deployable as the product grows.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. If you have an idea for a new feature or a more efficient way of handling the current logic, feel free to pitch it — new perspectives on existing workflows are always encouraged.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🗺️ Roadmap

- [ ] Add relational (PostgreSQL) reporting module for financial analytics
- [ ] Extract billing module into a standalone microservice
- [ ] Add role-based access control (Admin / Staff)
- [ ] Add automated test coverage (Jest/Supertest)

## 📄 License

This project is distributed under the MIT License. See `LICENSE.txt` for more information.

## 📧 Contact

**Mohammad Tabish**

- GitHub: [@tabishfarhan7](https://github.com/tabishfarhan7)
- Project Link: [https://rely-tailors.vercel.app/](https://rely-tailors.vercel.app/)
