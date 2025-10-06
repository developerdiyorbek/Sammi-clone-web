import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

function SocialButton() {
  return (
    <div className="grid grid-cols-2 gap-x-4 mt-4">
      <Button variant={"outline"} className="cursor-pointer">
        <FaGithub />
        <span>Github</span>
      </Button>
      <Button variant={"outline"} className="cursor-pointer">
        <FaGoogle />
        <span>Google</span>
      </Button>
    </div>
  );
}

export default SocialButton;
