import styled from "styled-components";

const BotoesEstilizados = styled.button`
  min-width: 100%;
  color: var(--cinzaClaro);
  padding-inline: 3rem;
  background-color: var(--chumbo);
  border: 2px solid var(--cinzaClaro);
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: var(--fonteNavBotoes);
  &:hover {
    border: 2px solid var(--azulEscuro);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
    color: var(--azulEscuro);
  }
`;

const Botoes = (props) => {
  return <BotoesEstilizados>{props.children}</BotoesEstilizados>;
};

export default Botoes;
