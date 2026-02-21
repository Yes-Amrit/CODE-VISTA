# 🚀 CODE VISTA
<img width="1761" height="1045" alt="image" src="https://github.com/user-attachments/assets/ce628082-d924-4b92-a6ae-764c405981c4" />
<img width="1755" height="596" alt="image" src="https://github.com/user-attachments/assets/694d062f-3f92-4672-851f-e58a041b4480" />
<img width="1914" height="1045" alt="Screenshot 2026-02-18 224457" src="https://github.com/user-attachments/assets/507da9f1-cdee-4d33-9b8b-3473a68c1cd1" />
<img width="1911" height="1051" alt="Screenshot 2026-02-19 150736" src="https://github.com/user-attachments/assets/47dc11cf-cc38-459b-b3d7-649c1640aefc" />


## Real-Time Video Interview & Live Coding Platform

CODE VISTA is a full-stack MERN application that enables real-time video interviews with an integrated live coding environment and chat system. It is built for conducting seamless technical interviews and collaborative coding sessions.

---

## 🌟 Features

### 🎥 Real-Time Video Calling
- 1-on-1 video interview sessions
- Secure session-based joining
- Host & participant roles
- Powered by Stream Video SDK

### 💬 Real-Time Chat
- In-session messaging
- Role-based permissions
- Secure token authentication
- Powered by Stream Chat API

### 💻 Live Coding Environment
- Integrated code editor
- Multiple language support (configurable)
- Real-time execution ready
- Designed for technical interviews

### 🔐 Authentication & Security
- Secure login system
- JWT-based authentication
- Protected backend routes
- Role-based access control

### 📦 Backend Architecture
- RESTful API
- MVC structure
- Middleware-based protection
- Modular and scalable design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- Stream Video SDK
- Stream Chat SDK

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stream Node SDK

---

## 📂 Project Structure

<img width="788" height="718" alt="image" src="https://github.com/user-attachments/assets/39a45a43-3440-4af3-9602-9f31bb996421" />



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Yes-Amrit/code-vista.git
cd code-vista
```

### 2️⃣ Install Backend Dependencies
```bash
cd backend
npm install
```

### 3️⃣ Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4️⃣ Environment Variables
```bash
Create a .env file inside backend:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```
### 5️⃣ Run the Application
#### Start backend:
```bash
cd backend
npm run dev
```
#### Start frontend:
```bash
cd frontend
npm run dev
```
---

## 🔐 Stream Integration

This project integrates Stream services for real-time communication:

- **Stream Chat** – Handles in-session messaging between host and participant.
- **Stream Video** – Powers real-time video interview sessions.
- Users are dynamically upserted with role-based permissions to securely manage channel access.
- Secure token generation is handled in the backend.

---

## 🚀 Future Improvements

- Multi-participant video rooms  
- Screen sharing support  
- Interview session recording  
- Real-time collaborative code editing  
- Interview analytics dashboard  
- Whiteboard integration  
- Scheduling & calendar integration  
- AI-based interview evaluation  

---

## 🤝 Contributing

Contributions are welcome and appreciated!
To contribute:
1. Fork the repository  
2. Clone your fork locally  
3. Create a new branch  
   ```bash
   git checkout -b feature/your-feature-name
    ```
4. Make your changes
5. Commit your updates
```bash
git commit -m "Add your feature"
```
6. Push to your branch
```bash
git push origin feature/your-feature-name
```
7. Open a Pull Request

## ⭐ Support the Project

If you found this project helpful:
⭐ Give it a star
🍴 Fork it
🧑‍💻 Use it in your own projects
📢 Share it with others

## Your support motivates further improvements!
