"use client";
import { useState } from "react";
import api from "@/lib/api";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!auth.currentUser) return alert("Please login to add students.");

    if (!form.name || !form.email || !form.course) {
      setError("All fields are required.");
      return;
    }

    await api.post("/students", form);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-6">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Course"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
  );
}
