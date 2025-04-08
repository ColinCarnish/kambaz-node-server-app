import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const alreadyEnrolled = enrollments.find(e => e.user === userId && e.course === courseId);
  if (!alreadyEnrolled) {
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  return enrollments;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return Database.enrollments;
}

export function findCoursesForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((e) => e.user === userId);
}

export function findUsersForCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((e) => e.course === courseId);
}
