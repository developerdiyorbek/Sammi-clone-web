import { useState } from "react";
import { useSignUp } from "../store/use-sign-up";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordFieldSchema } from "@/lib/validation";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropright } from "react-icons/io";

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { setStep } = useSignUp();

  const form = useForm<z.infer<typeof passwordFieldSchema>>({
    resolver: zodResolver(passwordFieldSchema),
    defaultValues: { password: "Success123!", confirmPassword: "Success123!" },
  });

  function onSubmit(data: z.infer<typeof passwordFieldSchema>) {
    setStep("done");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label>Password</Label>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="****"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    {showPassword ? (
                      <EyeOff
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground cursor-pointer dark:text-white"
                        onClick={() => setShowPassword(false)}
                        role="button"
                      />
                    ) : (
                      <Eye
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground cursor-pointer dark:text-white"
                        onClick={() => setShowPassword(true)}
                        role="button"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <Label>Confirm Password</Label>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="****"
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                    />
                    {showConfirmPassword ? (
                      <EyeOff
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground cursor-pointer dark:text-white"
                        onClick={() => setShowConfirmPassword(false)}
                        role="button"
                      />
                    ) : (
                      <Eye
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground cursor-pointer dark:text-white"
                        onClick={() => setShowConfirmPassword(true)}
                        role="button"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full group dark:text-white cursor-pointer"
          >
            <span>Create account</span>
            <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PasswordField;
