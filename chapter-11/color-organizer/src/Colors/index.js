import React from "react";
import { Routes, Route } from "react-router-dom";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import { ColorDetails } from "./ColorDetails";
import "./Colors.css";
import { ColorProvider } from "./hooks";
export * from "./hooks";

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        ></Route>
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  );
}
