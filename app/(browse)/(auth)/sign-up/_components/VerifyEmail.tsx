import { useForm } from "react-hook-form";
import { useSignUp } from "../store/use-sign-up";
import { verifyEmailSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropright } from "react-icons/io";

function VerifyEmail() {
  const { user, setStep } = useSignUp();

  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { code: "123456" },
  });

  function onSubmit(data: z.infer<typeof verifyEmailSchema>) {
    setStep("password-field");
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 mt-6"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <Label>One-Time Password</Label>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot index={0} className="w-full" />
                      <InputOTPSlot index={1} className="w-full" />
                      <InputOTPSlot index={2} className="w-full" />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot index={3} className="w-full" />
                      <InputOTPSlot index={4} className="w-full" />
                      <InputOTPSlot index={5} className="w-full" />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full group dark:text-white cursor-pointer"
          >
            <span>Confirm</span>
            <IoMdArrowDropright className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </Form>
    </>
  );
}

export default VerifyEmail;
