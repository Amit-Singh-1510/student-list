"use client"

import Navbar from "@/components/Navbar";
import StudentList from "@/components/StudentList";
import Filter from "@/components/Filter";
import { useState } from "react";

export default function Home() {
  const [course, setCourse] = useState("");

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Filter course={course} setCourse={setCourse} />
        <StudentList course={course} />
      </div>
    </main>
  );
}
