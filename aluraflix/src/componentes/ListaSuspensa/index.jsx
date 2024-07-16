import styled from "styled-components";

const ListaSuspensaEstilizada = styled.select`
  display: flex;
  flex-direction: column;
  background-color: var(--chumbo);
  color: var(--cinzaClaro);
  padding: 15px 10px;
  margin-bottom: 1rem;
  border: 2px solid var(--cinzaEscuro);
  border-radius: 10px;
  font-size: 0.8rem;
  box-sizing: border-box;
  min-width: 35vw;
  &:hover {
    box-shadow: -10px 10px 60px var(--azulClaro);
  }

  @media (max-width: 360px) {
    min-width: 80vw;
    margin-left: 10px;
  }
`;

const ListaSuspensa = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <ListaSuspensaEstilizada
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </ListaSuspensaEstilizada>
    </div>
  );
};

export default ListaSuspensa;
