import { create } from "zustand";

type Step = "complete-profile" | "verify-email" | "password-field" | "done";

type Store = {
  step: Step;
};

export const useSignUp = create<Store>()((set) => ({
  step: "complete-profile",
  setStep: (step: Step) => set({ step }),
}));
