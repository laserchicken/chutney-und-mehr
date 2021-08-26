import React from "react";
import ComingSoon from "./comingSoon";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children, showResults }) {
  return (
    <div>
      <ComingSoon />
    </div>
  );
}
