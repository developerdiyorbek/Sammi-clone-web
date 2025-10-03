import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/constants";

function Page() {
  return (
    <div>
      <h1 className="text-2xl font-geist_mono font-bold mt-6">Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Page;
