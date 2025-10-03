import { ISourceCode } from "@/types";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  sourceCode: ISourceCode;
}

function SourceCodeCard({ sourceCode }: Props) {
  return (
    <Link
      href={sourceCode.repository_url}
      target="_blank"
      rel="noopener noreferrer"
      className="border bg-card rounded-md p-4 flex items-center gap-2 justify-between"
    >
      <h2 className="font-geist_mono font-bold flex-1 line-clamp-1">
        {sourceCode.title}
      </h2>
      <GithubIcon />
    </Link>
  );
}

export default SourceCodeCard;
