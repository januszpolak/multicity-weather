import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="date">
      <h1>Dzisiaj jest: {new Date().toLocaleDateString()}</h1>
    </div>
  );
}
