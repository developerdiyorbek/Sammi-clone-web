import { getCourseBySlug } from "@/actions/course.action";
import CourseDetailForWhom from "@/components/course/CourseDetailForWhom";
import CourseDetailHeader from "@/components/course/CourseDetailHeader";
import CourseDetailLearning from "@/components/course/CourseDetailLearning";
import Review from "@/components/course/Review";

interface Props {
  params: Promise<{ slug: string }>;
}

async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  return (
    <>
      <CourseDetailHeader />

      <div className="flex mt-6 w-full items-start gap-x-4">
        <div className="w-full lg:w-2/3">
          <CourseDetailLearning />
          <CourseDetailForWhom />
          <Review />
        </div>
        <div className="hidden lg:flex lg:w-1/3"></div>
        <div></div>
      </div>
    </>
  );
}

export default CourseDetailPage;
