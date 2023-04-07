import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footers({ todos, setTodos }) {
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: text,
      isDid: "False",
    };
    setTodos([...todos, data]);
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input
        type="form"
        placeholder="Add Todo..."
        onChange={onChange}
        value={text}
      />
      <button>ADD</button>
    </form>
  );
}
