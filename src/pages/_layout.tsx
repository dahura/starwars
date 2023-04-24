import React, { FC, ReactNode } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

interface Layout {
  children: ReactNode;
}

const LayoutBase: FC<Layout> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};

export default LayoutBase;
