# Eventora - Full-Stack Event Booking Platform

Eventora is a full-stack MERN application that allows users to seamlessly browse, register, and pay natively without any third party tools. It features an administrative dashboard for event organizers to create and manage free and paid events. All bookings can be managed manually by an admin to handle payments directly.


## Features
- **User Authentication**: Secure login & registration with JWT and bcrypt.
- **OTP-Based Verification**:
  - Email OTP to verify and activate your account at registration (also sent if an unverified user tries to log in).
  - Email OTP to confirm and secure every event ticket booking.
- **Role-Based Access**: 
  - **Admin**: Create, edit, and delete events. Confirm and reject all incoming booking requests, mark them as 'Paid' or 'Not Paid'. Access is strictly locked to database-flagged users only.
  - **User**: Browse events, submit ticket booking requests via OTP, view personal dashboard pending status, and cancel bookings.
- **Event Management**: Create free and paid events with detailed descriptions, external image URLs, dates, categories, and seating capacity.
- **Smart Booking System**:
  - Email OTP verification to authorize a booking request.
  - All booking requests (both free and paid) enter a secure 'Pending' queue for Admin verification.
  - Seat availability accurately updates and securely validates against overbooking logic.
- **Admin Analytics Dashboard**: Track live data such as Pending Requests, Total Revenue, and Total Confirmed Paid Clients directly from the admin panel.
- **Email Notifications**: Automated OTP and booking confirmation emails delivered through the Brevo API.
- **Sleek UI/UX**: Built entirely with React, Tailwind CSS, and polished with micro-interactions.

---

## 🚀 Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
You will also need a MongoDB database (e.g., [MongoDB Atlas Free Tier](https://www.mongodb.com/cloud/atlas/register)).


### 1. Environment Variables Configuration
Navigate to `server/.env` and fill in the necessary keys:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_brevo_sender_email
EMAIL_FROM_NAME=Eventora
PORT=5000
```
> **Note**: Emails are sent using the [Brevo](https://www.brevo.com) API. Create a free account, verify a sender email, generate an API key, and add them in `server/.env`.


### 2. Install Dependencies
Open two separate terminals for the backend and frontend.

**Backend Terminal:**
```bash
cd server
npm install --legacy-peer-deps
```

**Frontend Terminal:**
```bash
cd client
npm install
```

### 3. Run the Application Local Servers
**Run Backend:**
```bash
cd server
npm run dev
```
*(Server will run on `http://localhost:5000`)*

**Run Frontend:**
```bash
cd client
npm run dev
```
*(Client will run on a local port provided by Vite, typically `http://localhost:5173`)*

---

## Live Demo
**https://eventora-bookmyevent.vercel.app**

> Hosted on Vercel (frontend), Render (backend) and MongoDB Atlas.