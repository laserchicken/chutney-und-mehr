import React from "react";
import Header from "./header";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
