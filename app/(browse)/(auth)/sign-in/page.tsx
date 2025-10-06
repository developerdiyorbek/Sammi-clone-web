import { Separator } from "@/components/ui/separator";
import SocialButton from "../_components/SocialButton";
import Link from "next/link";

function Page() {
  return (
    <div className=" bg-card rounded-lg shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Sign in to Sammi</h1>
        <p className="text-sm text-muted-foreground">
          Welcome! Please sign in to continue
        </p>
        <SocialButton />
        <Separator className="my-6" />
      </div>
      <div className="bg-secondary py-6 rounded-lg text-center">
        Don&apos;t have an account?{" "}
        <Link
          href={"/sign-up"}
          className="text-primary hover:underline font-medium"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Page;
