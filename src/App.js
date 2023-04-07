import "./App.css";
import React, { useState, useEffect } from "react";
import Headers from "./components/Headers";
import Container from "./components/Container";
import Footers from "./components/Footers";
import { DarkModeProvider } from "./context/darkmode";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("All");
  const localStorage = window.localStorage;

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }else{
      fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => setTodos(res))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DarkModeProvider className="test">
      <div className="main">
        <Headers state={state} setState={setState} />
        <Container
          todos={todos}
          setTodos={setTodos}
          state={state}
          setState={setState}
        />
        <Footers todos={todos} setTodos={setTodos} />
      </div>
    </DarkModeProvider>
  );
}
