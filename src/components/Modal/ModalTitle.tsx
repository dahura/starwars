import React, { FC } from "react";

interface ModalTitle {
  title: string;
}
export const ModalTitle: FC<ModalTitle> = ({ title }) => {
  return <h3 className="text-lg font-bold">{title}</h3>;
};
