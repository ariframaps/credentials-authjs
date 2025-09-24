import { FormsSchema } from "@/types/formsSchema";
import { z } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const signinStateSchema = FormsSchema.pick({
  email: true,
});

interface SignInState {
  step: number;
  formData: Partial<z.infer<typeof signinStateSchema>>;
  nextStep: () => void;
  goToStep: (step: number) => void;
  setFormData: (data: Partial<SignInState["formData"]>) => void;
  reset: () => void;
}

export const useSignInStore = create<SignInState>()(
  persist(
    (set) => ({
      step: 1,
      formData: {},
      nextStep: () => set((state) => ({ step: Math.min(2, state.step + 1) })), // max 2
      goToStep: (step) => set({ step }),
      setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
      reset: () => set({ step: 1, formData: {} }),
    }),
    { name: "signin-storage" }
  )
);
