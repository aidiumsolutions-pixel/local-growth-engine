import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; openForm: () => void; closeForm: () => void };
const FormCtx = createContext<Ctx | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);
  return <FormCtx.Provider value={{ open, openForm, closeForm }}>{children}</FormCtx.Provider>;
}

export function useContactForm() {
  const ctx = useContext(FormCtx);
  if (!ctx) throw new Error("useContactForm must be used inside FormProvider");
  return ctx;
}