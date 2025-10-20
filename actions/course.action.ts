"use server";

import { courses } from "@/constants";

export const getCourseBySlug = async (slug: string) => {
  const course = courses.find((course) => course.slug === slug);
  return course;
};
