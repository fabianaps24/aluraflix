import { useContext } from "react";
import Cabecalho from "../../src/componentes/Header";
import Container from "../../src/componentes/Container";
import EstilosGlobais from "../../src/componentes/EstilosGlobais";
import Formulario from "../../src/componentes/Formulario";
import Rodape from "../../src/componentes/Rodape";
import { FormularioContext } from "../../src/contexto/FormularioContext";

const categorias = [
  {
    nome: "FRONT END",
    corNome: "var(--azulClaro)",
    corBorda: "var(--azulClaro)",
    corSombra: "var(--azulClaro)",
    corSpan: "var(--azulClaro)",
  },
  {
    nome: "BACK END",
    corNome: "var(--cinzaEscuro)",
    corBorda: "var(--cinzaEscuro)",
    corSombra: "var(--cinzaEscuro)",
    corSpan: "var(--cinzaEscuro)",
  },
  {
    nome: "MOBILE",
    corNome: "var(--amarelo)",
    corBorda: "var(--amarelo)",
    corSombra: "var(--amarelo)",
    corSpan: "var(--amarelo)",
  },
];

const NovoVideo = () => {
  const { videos, setVideos } = useContext(FormularioContext);

  const aoVideoCadastrado = (novoVideo) => {
    setVideos([...videos, novoVideo]);
  };

  return (
    <>
      <EstilosGlobais />
      <Cabecalho />
      <Container>
        <Formulario
          categorias={categorias.map((categoria) => categoria.nome)}
          aoVideoCadastrado={aoVideoCadastrado}
        />
      </Container>
      <Rodape />
    </>
  );
};

export default NovoVideo;
