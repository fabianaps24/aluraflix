import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import EstilosGlobais from "./src/componentes/EstilosGlobais";
import Cabecalho from "./src/componentes/Header";
import Container from "./src/componentes/Container";
import { FormularioProvider } from "./src/contexto/FormularioContext";

const AppRoutes = () => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  useEffect(() => {
    const carregarVideos = async () => {
      try {
        // Simulando a carga de dados de um arquivo JSON local
        const response = await fetch(
          "https://my-json-server.typicode.com/MaiteFinzi/aluraflix-api/videos"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Erro ao carregar os vídeos");
        }
        const data = await response.json();
        console.log(data);
        setVideos(data.videos || []); // Certifique-se de que 'videos' esteja inicializado como uma array
        localStorage.setItem("videos", JSON.stringify(data.videos));
      } catch (error) {
        console.error("Erro ao carregar os vídeos:", error);
      }
    };

    carregarVideos();
  }, []); // Executa uma vez no início para carregar os vídeos

  // const aoNovoVideoAdicionado = (novoVideo) => {
  //     setVideos([...videos, novoVideo]);
  // };

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

  // ... seu código ...

  const handleAbrirModal = (video) => {
    setShowModal(true);
    setVideoSelecionado(video);
  };
  const fecharModal = () => {
    setShowModal(false);
    setVideoSelecionado(null);
  };

  const aoVideoCadastrado = (novoVideo) => {
    console.log("Novo vídeo:", novoVideo); // Verifique se o novo vídeo está correto
    setVideos([...videos, novoVideo]);
    console.log("Array de vídeos:", videos); // Verifique se o array foi atualizado
  };
  return (
    <BrowserRouter>
      <FormularioProvider>
        <EstilosGlobais />
        <Cabecalho />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  videos={videos}
                  showModal={showModal}
                  videoSelecionado={videoSelecionado}
                  handleAbrirModal={handleAbrirModal}
                  fecharModal={fecharModal}
                />
              } // Passa os vídeos para o componente Home
            />
            <Route
              path="/novo"
              element={<NovoVideo aoVideoCadastrado={aoVideoCadastrado} />} // Passa a função para adicionar novo vídeo para o componente NovoVideo
            />
          </Routes>
        </Container>
      </FormularioProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
