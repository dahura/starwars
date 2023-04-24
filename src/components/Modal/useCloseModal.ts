import { useCallback } from "react";

export const useCloseModal = (modalId: string) => {
  const handleClose = useCallback(
    () => (document.getElementById(modalId) as HTMLLabelElement).click(),
    []
  );
  return handleClose;
};
