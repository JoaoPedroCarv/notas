import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../services/firebaseConnection";
import './style.css'

function CriarNota() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [notaCriada, setNotaCriada] = useState(false);

  const criarNovaNota = async (e) => {
    e.preventDefault();

    try {
      const novaNota = {
        titulo,
        descricao,
      };

      await addDoc(collection(db, "notas"), novaNota);
      setNotaCriada(true);
      setTitulo("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao criar a nota:", error);
    }
  };

  return (
    <div className="princ">
      <h1>Criar uma nova nota</h1>
      <form onSubmit={criarNovaNota}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descrição:
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Criar nova Nota</button>
      </form>

      {notaCriada && (
        <div>
          <p>Nova nota criada com sucesso!</p>
          <Link to="/verNotas">Voltar para a Lista de Notas</Link>
        </div>
      )}
    </div>
  );
}

export default CriarNota;
