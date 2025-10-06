"use client";

import { useSignUp } from "../store/use-sign-up";
import CompleteProfile from "./CompleteProfile";
import Done from "./Done";
import PasswordField from "./PasswordField";
import VerifyEmail from "./VerifyEmail";

function SignUpForm() {
  const { step } = useSignUp();

  return (
    <>
      {step === "complete-profile" && <CompleteProfile />}
      {step === "verify-email" && <VerifyEmail />}
      {step === "password-field" && <PasswordField />}
      {step == "done" && <Done />}
    </>
  );
}

export default SignUpForm;
