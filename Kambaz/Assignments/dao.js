import { v4 as uuidv4 } from "uuid";

let assignments = [];

export const findUsersByRole = (role) => model.find({ role: role })

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: uuidv4() };
  assignments.push(newAssignment);
  return newAssignment;
};

export const findAllAssignments = () => assignments;

export const findAssignmentById = (aid) =>
  assignments.find((a) => a._id === aid);

export const updateAssignment = (aid, updated) => {
  assignments = assignments.map((a) => (a._id === aid ? { ...a, ...updated } : a));
  return assignments.find((a) => a._id === aid);
};

export const deleteAssignment = (aid) => {
  assignments = assignments.filter((a) => a._id !== aid);
  return assignments;
};
