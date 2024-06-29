"use client";
import React from "react";
import { Header } from "@/components/header/Header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </div>
  );
};

export default App;
