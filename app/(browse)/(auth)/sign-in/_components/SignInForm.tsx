"use client";

import Reveal from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowDropright } from "react-icons/io";
import z from "zod";

function SignInForm() {
  const [needsPassword, setNeedsPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const schema = useMemo(() => signInSchema(needsPassword), [needsPassword]);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const handleCheckEmail = async () => {
    const isValid = await form.trigger("email");
    if (!isValid) return;
    setNeedsPassword(true);
  };

  const onSubmit = (values: z.infer<typeof schema>) => {
    const { email, password } = values;
    if (!email || !password) return;

    router.push("/dashboard");
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email address</Label>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCheckEmail();
                      }
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!needsPassword && (
            <Button
              type="button"
              className="w-full group cursor-pointer dark:text-white"
              onClick={handleCheckEmail}
            >
              <span>Continue</span>
              <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}

          {needsPassword && (
            <Reveal>
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
                            className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground dark:text-white cursor-pointer"
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
              <Button
                type="submit"
                className="w-full group mt-4 cursor-pointer dark:text-white"
              >
                <span>Continue</span>
                <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          )}
        </form>
      </Form>
    </>
  );
}

export default SignInForm;
