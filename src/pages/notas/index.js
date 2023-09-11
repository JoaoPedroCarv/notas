import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import './style.css'

function ListaNotas() {
  const [titulosNotas, setTitulosNotas] = useState([]);

  useEffect(() => {
    consultarTitulosNotas();
  }, []);

  async function consultarTitulosNotas() {
    onSnapshot(collection(db, "notas"), (snapshot) => {
      let listaTitulosNotas = [];
      snapshot.forEach((doc) => {
        listaTitulosNotas.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      });
      setTitulosNotas(listaTitulosNotas);
    });
  }

  return (
    <div className="princ">
      <h1>Suas Notas!</h1>
      <ul className="lista">
        {titulosNotas.map((notas) => (
          <li key={notas.id} className="titulo">
            <Link to={`/detalhes/${notas.id}`} className="link">
              {notas.titulo}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListaNotas;
