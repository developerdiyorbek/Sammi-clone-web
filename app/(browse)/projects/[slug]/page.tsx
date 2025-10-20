import { getCourseBySlug } from "@/actions/course.action";
import CourseDetailForWhom from "@/components/course/CourseDetailForWhom";
import CourseDetailHeader from "@/components/course/CourseDetailHeader";
import CourseDetailLearning from "@/components/course/CourseDetailLearning";
import Review from "@/components/course/Review";
import Curriculum from "./_components/Curriculum";
import Enroll from "@/components/course/Enroll";
import MobileEnroll from "@/components/course/MobileEnroll";

interface Props {
  params: Promise<{ slug: string }>;
}

async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  console.log("Slug:", slug);

  return (
    <>
      <CourseDetailHeader />

      <div className="flex mt-6 w-full items-start gap-x-4">
        <div className="w-full lg:w-2/3">
          <CourseDetailLearning />
          <Curriculum />
          <CourseDetailForWhom />
          <Review />
        </div>
        <div className="hidden lg:flex lg:w-1/3 sticky top-24">
          <Enroll />
        </div>
      </div>

      <MobileEnroll />
    </>
  );
}

export default ProjectDetailPage;
