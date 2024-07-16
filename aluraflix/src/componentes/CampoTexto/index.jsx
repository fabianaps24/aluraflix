import styled from "styled-components";

const CampoTextoEstilizado = styled.div`
  /* margin:24px 0; */
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: var(--fontePrincipal);
    @media (max-width: 360px) {
      margin-left: 10px;
    }
    /* @media (max-width: 1024px){
        margin-left: 20px;
    } */
  }
  input {
    font-family: var(--fontePrincipal);
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
  }
`;

const CampoTexto = (props) => {
  const placehoderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    console.log("propsValor:", props.valor);
  };

  return (
    <CampoTextoEstilizado>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placehoderModificada}
      />
    </CampoTextoEstilizado>
  );
};

export default CampoTexto;
