import Notes from "../../../_components/Notes";
import VideoPlayer from "../../../_components/VideoPlayer";

interface PageProps {
  params: Promise<{ slug: string; lessonId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { lessonId } = await params;

  return (
    <>
      <div className="grid-cols-4 gap-x-4 hidden lg:grid">
        <div className="aspect-video bg-sidebar rounded-lg border lg:col-span-3">
          <VideoPlayer videoId={lessonId} />
        </div>
        <Notes />
      </div>
    </>
  );
};

export default Page;
