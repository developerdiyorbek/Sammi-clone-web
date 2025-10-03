import SourceCodeCard from "@/components/cards/SourceCodeCard";
import { source_codes } from "@/constants";

function Page() {
  return (
    <div>
      <h1 className="text-2xl font-geist_mono font-bold mt-6">Source codes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {source_codes.map((code) => (
          <SourceCodeCard key={code._id} sourceCode={code} />
        ))}
      </div>
    </div>
  );
}

export default Page;
