"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "../app/api/mock";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, setStudents, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
