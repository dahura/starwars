import React, { FC, ReactNode } from "react";

interface ModalBody {
  children: ReactNode;
}
export const ModalBody: FC<ModalBody> = ({ children }) => {
  return <p className="py-4">{children}</p>;
};
