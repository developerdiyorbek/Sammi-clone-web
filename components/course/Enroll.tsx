import { IoMdArrowDropright } from "react-icons/io";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function Enroll() {
  return (
    <div className="p-4 lg:p-8 bg-card border w-full rounded-lg">
      <h1 className="text-3xl font-space-grotesk font-semibold">Price</h1>

      <div className="flex items-end gap-x-2 mt-2">
        <h2 className="text-2xl">Free</h2>
        <p className="text-sm text-muted-foreground line-through">10.00 USD</p>
      </div>

      <Separator />

      <Button
        className="w-full mt-4 rounded-full group dark:text-white"
        size={"lg"}
      >
        <span>Enroll Now</span>
        <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

export default Enroll;
