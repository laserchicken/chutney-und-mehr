import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children, showResults }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
