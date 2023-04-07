import React, { useState, useEffect } from "react";
import styles from "./Container.module.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";

export default function Container({ todos, setTodos, state, setState }) {
  const handleClick = (e, item, type) => {
    if (type === "delete") {
      const newTodos = todos.filter((todo) => todo !== item);
      setTodos(newTodos);
    } else {
      const newTodos = todos.map((todo) => {
        if (todo === item) {
          return {
            ...todo,
            isDid: todo.isDid === "True" ? "False" : "True",
          };
        }
        return todo;
      });
      setTodos(newTodos);
    }
  };
  return (
    <ul className={styles.container}>
      {state === "All" &&
        todos.map((item) => (
          <li className={styles.item}>
            {item.isDid === "True" && (
              <ImCheckboxChecked
                cursor="pointer"
                onClick={(e) => handleClick(e, item, "checkbox")}
              />
            )}
            {item.isDid === "False" && (
              <ImCheckboxUnchecked
                cursor="pointer"
                onClick={(e) => handleClick(e, item, "checkbox")}
              />
            )}
            <p>{item.name}</p>
            <FaTrashAlt
              cursor="pointer"
              onClick={(e) => handleClick(e, item, "delete")}
            />
          </li>
        ))}
      {state === "Active" &&
        todos
          .filter((todo) => todo.isDid === "True")
          .map((item) => (
            <li className={styles.item}>
              {item.isDid === "True" && (
                <ImCheckboxChecked
                  cursor="pointer"
                  onClick={(e) => handleClick(e, item, "checkbox")}
                />
              )}
              {item.isDid === "False" && (
                <ImCheckboxUnchecked
                  cursor="pointer"
                  onClick={(e) => handleClick(e, item, "checkbox")}
                />
              )}
              <p>{item.name}</p>
              <FaTrashAlt
                cursor="pointer"
                onClick={(e) => handleClick(e, item, "delete")}
              />
            </li>
          ))}

      {state === "Completed" &&
        todos
          .filter((todo) => todo.isDid === "False")
          .map((item) => (
            <li className={styles.item}>
              {item.isDid === "True" && (
                <ImCheckboxChecked
                  cursor="pointer"
                  onClick={(e) => handleClick(e, item, "checkbox")}
                />
              )}
              {item.isDid === "False" && (
                <ImCheckboxUnchecked
                  cursor="pointer"
                  onClick={(e) => handleClick(e, item, "checkbox")}
                />
              )}
              <p>{item.name}</p>
              <FaTrashAlt
                cursor="pointer"
                onClick={(e) => handleClick(e, item, "delete")}
              />
            </li>
          ))}
    </ul>
  );
}
