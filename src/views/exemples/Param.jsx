import React from "react";
import { useParams } from "react-router-dom";

const Param = props => {
    const { id } = useParams(); // Pega o id da URL
  return (
    <div className="Param">
      <h1>Param</h1>
      <h2>Valor R$: {id}</h2>
    </div>
  );
};
export default Param;
