import React from "react";
import appStyles from "../App.module.css";

export default function Button({ children }) {
  return <button className={appStyles.button}>{children}</button>;
}
