const express = require("express");
const router = express.Router();
const Job = require("../models/job");
router.get("/applied-jobs", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login"); // Block if not logged in
  }

  try {
    const userId = req.session.user.id;
    const jobs = await Job.find({ "applications.user": userId }).lean();

    const appliedJobs = jobs.flatMap((job) =>
      job.applications
        .filter((app) => app.user.toString() === userId)
        .map((app) => ({
          title: job.title,
          company: job.company,
          location: job.location,
          coverLetter: app.coverLetter,
          status: app.status,
        }))
    );

    res.render("applied-jobs", { appliedJobs, user: req.session.user });
  } catch (err) {
    console.error("Error fetching applied jobs:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
