import CourseCard from "@/components/cards/CourseCard";
import SourceCodeCard from "@/components/cards/SourceCodeCard";
import { Button } from "@/components/ui/button";
import { courses, projects, source_codes } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

function Page() {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-4 items-center border rounded-lg p-8 max-lg:p-4 bg-gradient-to-tl from-sidebar to-card">
        <div className="col-span-3 max-md:col-span-5">
          <h1 className="text-3xl font-semibold">
            Welcome to <span className="text-primary">Sammi</span>
          </h1>
          <p className="text-muted-foreground leading-5 text-sm">
            Sammi is a platform that offers a variety of programming courses to
            help you enhance your skills and advance your career. Start coding
            journey with us today!
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild className="dark:text-white">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant={"secondary"} className="dark:text-white">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="col-span-2 max-md:col-span-5">
          <FaReact size={200} className="mx-auto max-lg:hidden" />
        </div>
      </div>

      <div className="mt-4">
        <Link
          href="/courses"
          className="flex items-center gap-2 group text-2xl font-bold"
        >
          <span>Courses</span>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/projects"
          className="flex items-center gap-2 group text-2xl font-bold"
        >
          <span>Projects</span>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {projects.map((project) => (
            <CourseCard key={project.slug} course={project} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/source-codes"
          className="flex items-center gap-2 group text-2xl font-bold"
        >
          <span>Source Codes</span>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {source_codes.map((code) => (
            <SourceCodeCard key={code._id} sourceCode={code} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
