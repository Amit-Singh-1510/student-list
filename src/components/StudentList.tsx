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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No students found</p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((student) => (
        <div
          key={student.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  {student.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {student.course}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
