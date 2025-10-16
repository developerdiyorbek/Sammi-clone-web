import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SocialButton from "../_components/SocialButton";
import SignInForm from "./_components/SignInForm";

const SignInPage = () => {
  return (
    <div className="h-fit bg-card shadow-lg w-md rounded-lg">
      <div className="p-6">
        <h1 className="text-xl font-space-grotesk font-semibold">
          Sign in to Sammi
        </h1>
        <p className="text-sm text-muted-foreground">
          Welcome back! Please sign in to continue
        </p>
        <SocialButton />
        <Separator className="my-6" />
        <SignInForm />
      </div>
      <div className="bg-secondary py-6 rounded-lg text-center text-sm text-muted-foreground mt-4">
        <span className="dark:text-white">Don&apos;t have an account?</span>{" "}
        <Link
          href="/sign-up"
          className="text-primary hover:underline font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
