import { FC } from "react";
import { StoreProvider } from "./store/StoreProvider";
import { Routes } from "./router";
import "../src/styles/tailwind.css";

export const App: FC = () => {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
};
