import React, { FC, ReactNode } from "react";
import { Portal } from "./Portal";

interface Modal {
  id: string;
  children: ReactNode;
}
export const Modal: FC<Modal> = ({ id, children }) => {
  return (
    <Portal rootId={`${id}-modal`}>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal bg-black/50">
        <div className="modal-box bg-black relative text-white">{children}</div>
      </div>
    </Portal>
  );
};
