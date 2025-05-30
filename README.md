# 🧑‍💼 InternSpot - Job Portal Backend Project

Live Demo: 🌐 [https://internspot.onrender.com](https://internspot.onrender.com)

This is a full-stack job portal web application built with **Node.js**, **Express**, **MongoDB Atlas**, and **Handlebars**. Employers can post and manage job listings; job seekers can browse and apply seamlessly.

---

## 📁 Project Structure

```
InternSpot/
├── models/               # Mongoose models (User , Job, Application)
├── routes/               # Express routes (auth, jobs, employer, user)
├── views/                # Handlebars templates for frontend rendering
├── public/               # Static files (CSS, JS)
├── server.js             # Main server entry point
├── .env                  # Environment variables (not committed)
├── .gitignore            # Ignores .env, node_modules, etc.
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

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
git clone https://github.com/sulabhsaluja/Internspot-Job-Portal-.git
cd Internspot-Job-Portal-
npm install
```

### Configuration

Create a `.env` file in the root folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/jobportal?retryWrites=true&w=majority
```

> Replace `<username>`, `<password>`, and `<cluster>` with your actual Atlas credentials. Make sure to encode special characters in the password.


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

Feel free to reach out if you need further modifications or additional information!
