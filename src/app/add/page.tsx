import Navbar from "@/components/Navbar";
import StudentForm from "@/components/StudentForm";

export default function AddStudentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900">Add New Student</h2>
          <p className="mt-1 text-sm text-gray-600">
            Fill in the student details to add them to the system.
          </p>
        </div>

        {/* Form section */}
        <div className="mt-6">
          <StudentForm />
        </div>
      </div>
    </main>
  );
}
