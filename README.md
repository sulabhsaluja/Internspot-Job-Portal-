<!-- # 🧑‍💼 InternSpot - Job Portal Backend Project

This is a backend-focused job portal web application built with **Node.js**, **Express**, **MongoDB**, and **Handlebars**. It allows employers to post jobs and manage applications, while job seekers can browse jobs and apply seamlessly.

---

## 📁 Project Structure

```

Demo Project/
├── models/               # Mongoose models (User, Job, Application)
├── routes/               # Express routes (auth, jobs, applications)
├── views/                # Handlebars templates for frontend rendering
├── public/               # Static files (CSS, JS)
├── server.js             # Main entry point
├── package.json          # Project metadata and dependencies
└── node\_modules/         # Installed npm packages

````

---

## ⚙️ Features

- User authentication with session-based login
- Role-based access (Employer vs Job Seeker)
- Employers can:
  - Post new jobs
  - View and manage applications
- Job Seekers can:
  - Browse available jobs
  - Apply with full name, email, and cover letter
- Responsive frontend with dynamic templates (Handlebars)
- MongoDB for data persistence

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14+ installed
- MongoDB running locally or via cloud (MongoDB Atlas)

### Installation

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sulabhsaluja/Job-Portal-Backend-Project.git
cd Job-Portal-Backend-Project
npm install


### Running the App

node server.js
```

Visit `http://localhost:3000` in your browser.

---

## 🧩 Dependencies

* express
* express-session
* mongoose
* hbs
* ejs (for partial view rendering)
* three, vanta (for visual enhancements)

---

## 📌 Notes

* Default port is **3000**
* Views are rendered using `.hbs` templates
* Passwords are not hashed – for demo purposes only (security improvements recommended)

--- -->










Here’s your updated **README.md** reflecting deployment on Render and MongoDB Atlas, along with `.env` best practices and new project structure notes:

---

```markdown
# 🧑‍💼 InternSpot - Job Portal Backend Project

Live Demo: 🌐 [https://internspot.onrender.com](https://internspot.onrender.com)

This is a full-stack job portal web application built with **Node.js**, **Express**, **MongoDB Atlas**, and **Handlebars**. Employers can post and manage job listings; job seekers can browse and apply seamlessly.

---

## 📁 Project Structure

```

InternSpot/
├── models/               # Mongoose models (User, Job, Application)
├── routes/               # Express routes (auth, jobs, employer, user)
├── views/                # Handlebars templates for frontend rendering
├── public/               # Static files (CSS, JS)
├── server.js             # Main server entry point
├── .env                  # Environment variables (not committed)
├── .gitignore            # Ignores .env, node\_modules, etc.
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation

````

---

## ⚙️ Features

- User authentication with session-based login
- Role-based access: Employer 👨‍💼 vs Job Seeker 🙋
- Employers can:
  - Post jobs
  - View and manage applications
- Job Seekers can:
  - Browse job listings
  - Apply with details and cover letter
- Fully responsive frontend using Handlebars
- MongoDB Atlas for cloud data storage
- Deployed live on Render.com

---

## 🚀 Getting Started (Local)

### Prerequisites

- Node.js v14+
- MongoDB Atlas account (or local MongoDB instance)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sulabhsaluja/Job-Portal-Backend-Project.git
cd Job-Portal-Backend-Project
npm install
````

### Configuration

Create a `.env` file in the root folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/jobportal?retryWrites=true&w=majority
```

> Replace `<username>`, `<password>`, and `<cluster>` with your actual Atlas credentials. Make sure to encode special characters in the password.

### Running the App

```bash
node server.js
```

Visit `http://localhost:3000` in your browser.

---

## 🧩 Dependencies

* express
* express-session
* mongoose
* hbs
* dotenv
* ejs (partial view rendering)
* vanta.js + three.js (visual effects)

---

## 🚀 Deployment (Render.com)

This project is live at: [https://internspot.onrender.com](https://internspot.onrender.com)

To deploy your own:

1. Push your code to GitHub (make sure `.env` is in `.gitignore`)
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repo
4. Set environment variable `MONGO_URI` in Render dashboard
5. Set Start Command: `node server.js`
6. Deploy and monitor logs

---

## 📌 Notes

* `.env` is ignored by Git for security
* MongoDB passwords should always be URL-encoded
* Passwords are not hashed – recommended for demo only
* Consider adding HTTPS redirects and domain mapping on Render

---

```

Let me know if you’d like a matching [badge layout](f) or a [walkthrough GIF](f) of the deployed site.
```
