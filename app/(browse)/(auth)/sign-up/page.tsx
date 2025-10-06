import { Separator } from "@/components/ui/separator";
import SocialButton from "../_components/SocialButton";
import SignUpForm from "./_components/SignUpForm";
import Link from "next/link";

function Page() {
  return (
    <div className=" bg-card rounded-lg shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
          Welcome! Please fill in the details to get started
        </p>
        <SocialButton />
        <Separator className="my-6" />
        <SignUpForm />
      </div>
      <div className="bg-secondary py-6 rounded-lg text-center">
        Already have an account?{" "}
        <Link
          href={"/sign-in"}
          className="text-primary hover:underline font-medium"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Page;
