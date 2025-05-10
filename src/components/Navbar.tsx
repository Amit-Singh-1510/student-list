"use client";
import { auth, login, logout } from "@/app/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import firebase from "firebase/compat/app";


export default function Navbar() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user as firebase.User | null));
    return () => unsub();
  }, []);

  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between items-center flex-wrap gap-2">
      <h1 className="text-xl font-bold">Student Dashboard</h1>
      <div className="flex items-center gap-3">
        {user && (
          <Link
            href="/add"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
          >
            Add Student
          </Link>
        )}
        {user ? (
          <>
            <span className="text-sm">{user.displayName}</span>
            <button onClick={logout} className="bg-white text-blue-600 px-2 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <button onClick={login} className="bg-white text-blue-600 px-2 py-1 rounded">
            Login
          </button>
        )}
      </div>
    </div>
  );
}
