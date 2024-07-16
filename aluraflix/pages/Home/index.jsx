import styled from "styled-components";
import EstilosGlobais from "../../src/componentes/EstilosGlobais";
import Cabecalho from "../../src/componentes/Header";
import Rodape from "../../src/componentes/Rodape";
import Container from "../../src/componentes/Container";
import Categoria from "../../src/componentes/Categoria";
import { useContext, useEffect, useState } from "react";
import { FormularioContext } from "../../src/contexto/FormularioContext";
import CardBanner from "../../src/componentes/Banner";
import Modal from "../../src/componentes/ModalEditar";
import CampoTexto from "../../src/componentes/CampoTexto";

export const Fundo = styled.div`
  background-color: var(--chumbo);
  width: 100%;
  min-height: 100vh;
`;
export const categorias = [
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

function Home(props) {
  const [id, setid] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [video, setVideo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoVideoCadastrado({
      id,
      titulo,
      imagem,
      video,
      descricao,
      categoria,
    });
  };

  const limparFormulario = () => {
    setTitulo(""),
      setImagem(""),
      setVideo(""),
      setDescricao(""),
      setCategoria("");
  };

  const {
    videos,
    setVideos,
    showModal,
    videoSelecionado,
    fecharModal,
    setVideoSelecionado,
    aoVideoCadastrado,
  } = useContext(FormularioContext);

  console.table(videos);

  useEffect(() => {
    // Atualiza o estado videos quando o localStorage for atualizado
    const handleStorageChange = () => {
      const videosDoLocalStorage =
        JSON.parse(localStorage.getItem("videos")) || [];
      setVideos(videosDoLocalStorage);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Fundo>
      <EstilosGlobais />
      <Cabecalho />
      <Container>
        <CardBanner id="banner" />

        {categorias.map((categoria) => (
          <Categoria
            key={categoria.nome}
            styles={{ marginTop: 100 }}
            nome={categoria.nome}
            corNome={categoria.corNome}
            corBorda={categoria.corBorda}
            corSombra={categoria.corSombra}
            corSpan={categoria.corSpan}
            videos={videos.filter(
              (video) =>
                video.categoria.toLowerCase() === categoria.nome.toLowerCase() // Filtra os vídeos da categoria atual
            )}
          />
        ))}
        {showModal && (
          <Modal
            aoVideoCadastrado={aoVideoCadastrado}
            onClose={fecharModal} // Passa a função para fechar o modal
            videoData={videoSelecionado}
          ></Modal>
        )}
        <Rodape />
      </Container>
    </Fundo>
  );
}
export default Home;
