import { useState } from "react";
import styled from "styled-components";

const ListaSuspensaModal = styled.select`
  display: flex;
  flex-direction: column;
  background-color: rgba(3, 18, 47, 0.76);
  color: var(--azulEscuro);
  padding: 15px 10px;
  margin-bottom: 1rem;
  border: 2px solid var(--azulEscuro);
  border-radius: 10px;
  font-size: 0.8rem;
  box-sizing: border-box;
  min-width: 35vw;
  &:hover {
    box-shadow: -10px 10px 60px var(--azulClaro);
  }
  @media (max-width: 430px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    min-width: 60vw;
    margin-left: 10px;
    margin-top: 20px;
  }
  /* @media (max-width: 1024px){
        min-width:40vw;
        margin-left:20px;
        margin-top:20px;
      
    } */
`;

const ListaSuspensaModalComponent = ({
  label,
  value,
  aoAlterado,
  ...props
}) => {
  console.log("Props recebidos:", label, value, aoAlterado, props);

  const [categorias, setCategorias] = useState([
    "FRONT END",
    "BACK END",
    "MOBILE",
  ]);
  console.log("Valor do select:", props.value);

  return (
    <div>
      <ListaSuspensaModal>
        <label htmlFor="categoria">{props.label}</label>

        <select
          id="categoria"
          value={value} // Definindo o valor do select com o valor do estado
          onChange={(event) => aoAlterado(event.target.value)} // Atualizando o estado quando o valor muda
          {...props}
        />

        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </ListaSuspensaModal>
    </div>
  );
};

export default ListaSuspensaModalComponent;
