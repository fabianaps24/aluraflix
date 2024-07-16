import CampoTexto from "../CampoTexto";
import styled from "styled-components";
import ListaSuspensa from "../ListaSuspensa";
import { useContext, useState } from "react";
import { FormularioContext } from "../../contexto/FormularioContext";

const TextoEstilizado = styled.h1`
  font-family: var(--fonteNavBotoes);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  padding-block: 20px;
  margin-top: 50px;

  h2 {
    font-family: var(--fonteNavBotoes);
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const FormularioEstilizado = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  form {
    height: 100%;
    width: 90vw;
  }
`;

const CampoTextoEstilizados = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    height: 80%;
    label {
      margin-left: 10px;
    }
  }
`;
const BotoesEstilizadosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 25px;
  button {
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
  }
`;

const Formulario = (props) => {
  // console.log("aoVideoCadastrado:",aoVideoCadastrado)
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [video, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvarNovoVideo = (evento) => {
    console.table(categoria);
    evento.preventDefault();
    const novoVideo = {
      titulo: titulo,
      imagem: imagem,
      video: video,
      url: url,
      id: id,
      descricao: descricao,
      categoria: categoria,
    };
    props.aoVideoCadastrado(novoVideo);
  };

  const limparFormulario = () => {
    setTitulo(""),
      setImagem(""),
      setVideo(""),
      setUrl(""),
      setId(""),
      setDescricao(""),
      setCategoria("");
  };

  return (
    <FormularioEstilizado>
      <form onSubmit={aoSalvarNovoVideo}>
        <TextoEstilizado>
          <header>
            <h1>NOVO VÍDEO</h1>
            <h2>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h2>
          </header>
        </TextoEstilizado>
        <CampoTextoEstilizados>
          <CampoTexto
            obrigatorio={true}
            label="Titulo"
            placeholder="Digite o título do vídeo"
            valor={titulo}
            aoAlterado={(valor) => setTitulo(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Imagem"
            placeholder="Digite o link da imagem do vídeo"
            valor={imagem}
            aoAlterado={(valor) => setImagem(valor)}
          />
        </CampoTextoEstilizados>
        <CampoTextoEstilizados>
          <CampoTexto
            obrigatorio={true}
            label="Vídeo"
            placeholder="Digite o link do vídeo"
            valor={url}
            aoAlterado={(valor) => setUrl(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Descrição"
            placeholder="Sobre o que é esse vídeo?"
            valor={descricao}
            aoAlterado={(valor) => setDescricao(valor)}
          />
        </CampoTextoEstilizados>
        <CampoTextoEstilizados>
          <ListaSuspensa
            obrigatorio={true}
            label="Categorias"
            itens={props.categorias}
            valor={categoria}
            aoAlterado={setCategoria}
          />
          <CampoTexto
            obrigatorio={true}
            label="Id"
            placeholder="Digite o Id do video"
            valor={id}
            aoAlterado={(valor) => setId(valor)}
          />
        </CampoTextoEstilizados>
      </form>
      <BotoesEstilizadosContainer>
        <button type="submit" onClick={aoSalvarNovoVideo}>
          GUARDAR
        </button>
        <button type="button" onClick={limparFormulario}>
          LIMPAR
        </button>
      </BotoesEstilizadosContainer>
    </FormularioEstilizado>
  );
};

export default Formulario;
