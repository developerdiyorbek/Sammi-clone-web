"use client";

import { useResetPassword } from "../store/useResetPassword";
import Done from "./Done";
import EnterEmail from "./EnterEmail";
import PasswordField from "./PasswordField";
import VerifyEmail from "./VerifyEmail";

const ResetPasswordForm = () => {
  const { step } = useResetPassword();

  return (
    <>
      {step === "enter-email" && <EnterEmail />}
      {step === "verify-email" && <VerifyEmail />}
      {step === "password-field" && <PasswordField />}
      {step === "done" && <Done />}
    </>
  );
};

export default ResetPasswordForm;
