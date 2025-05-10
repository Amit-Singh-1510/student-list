type Props = {
  course: string;
  setCourse: (value: string) => void;
};

export default function Filter({ course, setCourse }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-48">
        <label htmlFor="course-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Course
        </label>
        <div className="relative">
          <select
            id="course-filter"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
          >
            <option value="">All Courses</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
