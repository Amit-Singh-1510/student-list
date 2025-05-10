"use client";
import { Student } from "@/types";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function StudentList({ course }: { course: string }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/students").then((res) => {
      setStudents(res.data);
      setLoading(false);
    });
  }, []);

  const filtered = course ? students.filter((s) => s.course === course) : students;

  if (loading) return <p>Loading students...</p>;

  return (
    <ul className="divide-y">
      {filtered.map((s) => (
        <li key={s.id} className="p-2">
          <strong>{s.name}</strong> - {s.course} <br />
          <span className="text-sm text-gray-500">{s.email}</span>
        </li>
      ))}
    </ul>
  );
}
