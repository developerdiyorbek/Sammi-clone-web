import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SocialButton from "../_components/SocialButton";
import SignUpForm from "./_components/SignUpForm";
import Title from "./_components/Title";

const SignUpPage = () => {
  return (
    <div className="h-fit bg-card shadow-lg w-md rounded-lg">
      <div className="p-6">
        <Title />
        <SocialButton />
        <Separator className="my-6" />
        <SignUpForm />
      </div>
      <div className="bg-secondary py-6 rounded-lg text-center text-sm text-muted-foreground mt-4">
        <span className="dark:text-white">Already have an account?</span>{" "}
        <Link
          href="/sign-in"
          className="text-primary hover:underline font-medium"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
