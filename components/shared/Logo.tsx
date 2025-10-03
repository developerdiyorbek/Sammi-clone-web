import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <div className="text-4xl font-bold font-mono">Sammi</div>
      </div>
    </Link>
  );
}

export default Logo;
