# 📱 Mobile Finder App

A modern full-stack application for comparing, listing, buying, and selling mobile phones. Built for **Web (Next.js 14)** and **Android (React Native)** platforms with real-time chat and powerful filtering.

## 🚀 Preview

> _Coming Soon: Demo links & screenshots_

---

## 🧩 Features

### 🔐 Authentication
- Email/password login (JWT or Firebase)
- Google OAuth (optional)
- Role-based access: **Buyer**, **Seller**, **Admin**
- Password reset & secure token storage

### 📱 Listings System
- Sellers can add listings with:
  - Brand, model, price, condition
  - Specifications: RAM, storage, screen, battery
  - Multiple images via Cloudinary
  - Location and description
- Buyers can filter/search listings
- Status options: `Available`, `Sold`, `Pending`

### 📊 Phone Comparison Tool
- Compare two or more phones by specs and price
- Save favorites or recent comparisons

### 💬 Buy/Sell & Messaging
- Real-time chat via **Socket.io**
- Offer system: propose/accept/reject offers
- Notifications for messages, offers, and updates

### 📱 Android Mobile App (React Native)
- Full feature parity with web version
- Push notifications (Expo)
- Fast and responsive design

---

## 🧰 Tech Stack

| Layer            | Technology                         |
|------------------|-------------------------------------|
| Frontend (Web)   | Next.js 14 (App Router), TailwindCSS |
| Frontend (Mobile)| React Native (Expo)                 |
| Backend          | Next.js API Routes, REST            |
| Auth             | Firebase Auth or JWT                |
| DB/ORM           | PostgreSQL + Prisma ORM             |
| Real-time        | Socket.io                           |
| Media            | Cloudinary (image hosting)          |
| State/Validation | React Context, Zod or Yup           |

---

## 📁 Folder Structure

