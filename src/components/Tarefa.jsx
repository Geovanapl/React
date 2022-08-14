import { useState, useEffect } from "react";

export default function Tarefas() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(["estudar javascrit"]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function registrar(e) {
    //alert('tarefa registrada')
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h2>Tarefas</h2>
      <form onSubmit={registrar}>
        <label>Nome da tarefa:</label>
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">registrar</button>
      </form>
      <div>
        <ul>
          {tarefas.map((tarefas) => (
            <li key={tarefas}>{tarefas}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
