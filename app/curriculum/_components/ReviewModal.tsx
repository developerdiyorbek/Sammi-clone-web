import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

function ReviewModal() {
  return (
    <Button size={"sm"} variant={"ghost"}>
      <Star />
      <span>Review</span>
    </Button>
  );
}

export default ReviewModal;
