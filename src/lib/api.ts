import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Student } from "@/types";

const api = axios.create();
const mock = new MockAdapter(api, { delayResponse: 1000 });

const students: Student[] = [
  { id: "1", name: "Alice", email: "alice@example.com", course: "Math" },
  { id: "2", name: "Bob", email: "bob@example.com", course: "Physics" },
];

mock.onGet("/students").reply(200, students);

mock.onPost("/students").reply((config) => {
  const newStudent = JSON.parse(config.data);
  students.push({ ...newStudent, id: (students.length + 1).toString() });
  return [200, { success: true }];
});

export default api;
