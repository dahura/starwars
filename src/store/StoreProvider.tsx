import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface StoreProvider {
  children: ReactNode;
}
export const StoreProvider: FC<StoreProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
