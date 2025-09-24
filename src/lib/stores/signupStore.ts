import { FormsSchema } from "@/types/formsSchema";
import { z } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const signupStateSchema = FormsSchema.pick({
  email: true,
  firstname: true,
  lastname: true,
  username: true,
  phone: true,
  countryCode: true,
});

interface SignUpState {
  step: number;
  formData: Partial<z.infer<typeof signupStateSchema>>;
  // mutations
  nextStep: () => void;
  goToStep: (step: number) => void;
  setFormData: (data: Partial<SignUpState["formData"]>) => void;
  reset: () => void;
}

export const useSignUpStore = create<SignUpState>()(
  persist(
    (set) => ({
      step: 1,
      formData: {},
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      goToStep: (step) => set({ step }),
      setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
      reset: () => set({ step: 1, formData: {} }),
    }),
    { name: "signup-state" }
  )
);
