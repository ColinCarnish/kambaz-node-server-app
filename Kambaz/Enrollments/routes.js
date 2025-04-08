import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const result = dao.enrollUserInCourse(userId, courseId);
    res.json(result);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const result = dao.unenrollUserFromCourse(userId, courseId);
    res.json(result);
  });

  app.get("/api/enrollments/user/:userId", (req, res) => {
    res.json(dao.findCoursesForUser(req.params.userId));
  });

  app.get("/api/enrollments/course/:courseId", (req, res) => {
    res.json(dao.findUsersForCourse(req.params.courseId));
  });
}