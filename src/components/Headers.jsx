import React, { useContext } from "react";
import { MdBrightness5, MdDarkMode } from "react-icons/md";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmode";

export default function Headers({ state, setState }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleCheck = (e, type) => {
    setState(type);
  };
  const handleDark = () => {
    toggleDarkMode(darkMode);
  };
  return (
    <div className={styles.header}>
      {darkMode ? (
        <MdDarkMode
          cursor="pointer"
          fontSize={20}
          color="1f4e5f"
          onClick={handleDark}
        ></MdDarkMode>
      ) : (
        <MdBrightness5
          cursor="pointer"
          fontSize={20}
          color="1f4e5f"
          onClick={handleDark}
        ></MdBrightness5>
      )}
      <ul className={styles.itemlist}>
        <li
          onClick={(e) => handleCheck(e, "All")}
          style={{ color: state === "All" ? "black" : "#1f4e5f" }}
        >
          All
        </li>
        <li
          onClick={(e) => handleCheck(e, "Active")}
          style={{ color: state === "Active" ? "black" : "#1f4e5f" }}
        >
          Active
        </li>
        <li
          onClick={(e) => handleCheck(e, "Completed")}
          style={{ color: state === "Completed" ? "black" : "#1f4e5f" }}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}
