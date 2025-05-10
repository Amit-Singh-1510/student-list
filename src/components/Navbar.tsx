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
    <nav>
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
              <div className="px-4 py-2">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                      {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700">{user.displayName || user.email}</span>
                </div>
              </div>
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={login}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
