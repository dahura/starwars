import React, { FC } from "react";

interface ModalClose {
  modalId: string;
}
export const ModalClose: FC<ModalClose> = ({ modalId }) => {
  return (
    <label
      id={`${modalId}-close`}
      htmlFor={modalId}
      className="btn btn-accent btn-sm btn-circle absolute right-2 top-2"
    >
      ✕
    </label>
  );
};
