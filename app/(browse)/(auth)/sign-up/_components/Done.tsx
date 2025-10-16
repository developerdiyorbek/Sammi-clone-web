import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Done() {
  return (
    <div>
      <div className="flex justify-center">
        <IoCheckmarkDoneCircle className="size-24 text-green-500" />
      </div>
      <p className="text-center text-muted-foreground dark:text-white mt-2">
        You have successfully created your account.
      </p>
      <Button
        className="w-full group mt-4 dark:text-white cursor-pointer"
        asChild
      >
        <Link href={"/sign-in"}>
          <span>Sign In</span>
          <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}

export default Done;
