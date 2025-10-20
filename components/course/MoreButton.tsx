import React from "react";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";

function MoreButton() {
  return (
    <div className="flex justify-center items-center mt-4">
      <Button className="group rounded-full dark:text-white" size={"lg"}>
        <span>Load More</span>
        <IoMdArrowDropdown className="transition-transform group-hover:translate-y-1" />
      </Button>
    </div>
  );
}

export default MoreButton;
