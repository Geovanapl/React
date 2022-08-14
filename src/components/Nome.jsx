import React from "react";
import { useState } from "react";

export default function Nome(props) {
  const [Nome, setNome] = useState("b22");
  function trocarNome() {
    //alert("trocar nome");
    setNome("start");
  }

  return (
    <div>
      <h2>Ola:{Nome}</h2>
      <button onClick={trocarNome}>Trocar nome</button>
    </div>
  );
}
