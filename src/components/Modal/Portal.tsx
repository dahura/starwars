import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Portal {
  rootId: string;
  children: ReactNode;
}

export const Portal: FC<Portal> = ({ rootId, children }) => {
  const target = useRef(document.getElementById(rootId));

  useEffect(() => {
    return () => {
      window.requestAnimationFrame(() => {
        if (!target.current) return;
        if (target.current.childNodes.length === 0) {
          target.current.remove();
          target.current = null;
        }
      });
    };
  }, [rootId]);

  if (!target.current) {
    target.current = document.createElement("div");
    target.current.setAttribute("id", rootId);
    document.body.appendChild(target.current);
  }

  return createPortal(children, target.current);
};
