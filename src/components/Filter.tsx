type Props = {
    course: string;
    setCourse: (value: string) => void;
  };
  
  export default function Filter({ course, setCourse }: Props) {
    return (
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Courses</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
      </select>
    );
  }
  