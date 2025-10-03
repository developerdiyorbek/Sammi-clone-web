import { ICourse } from "@/types";
import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";

interface Props {
  course: ICourse;
}

function CourseCard({ course }: Props) {
  return (
    <Link href={`${course.slug}`} key={course.slug}>
      <Card className="p-0 rounded-lg gap-2">
        <div className="relative h-52 w-full bg-sidebar rounded-lg">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="rounded-lg"
          />
        </div>
        <h2 className="px-2 pt-0 pb-2 text-xl font-bold">{course.title}</h2>
      </Card>
    </Link>
  );
}

export default CourseCard;
