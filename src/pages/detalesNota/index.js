import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../services/firebaseConnection";
//import '../style.css'

function DetalhesNota() {
  const { id } = useParams();
  const [nota, setNota] = useState(null);

  useEffect(() => {
    consultarDetalhesNota(id);
  }, [id]);

  async function consultarDetalhesNota(id) {
    const notaDoc = await getDoc(doc(db, "notas", id));
    if (notaDoc.exists()) {
      setNota(notaDoc.data());
    }
  }

  if (!nota) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="princ">
      <h1>Titulo: {nota.titulo}</h1>
      <p>Descrição: {nota.descricao}</p>
    </div>
  );
}

export default DetalhesNota;
