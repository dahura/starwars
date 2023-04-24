import React, { FC } from "react";
import cn from "classnames";
interface ModalButton {
  name: string;
  modalId: string;
  className?: string;
  onClick?: () => void;
}
export const ModalButton: FC<ModalButton> = ({
  name,
  modalId,
  className,
  onClick,
}) => {
  return (
    <label htmlFor={modalId} className={cn("btn", className)} onClick={onClick}>
      {name}
    </label>
  );
};
