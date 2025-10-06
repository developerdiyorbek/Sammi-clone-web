import { z } from "zod";

export const completeProfileSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2, "Required!").max(50),
  lastName: z.string().min(2, "Required!").max(50),
});
